// Playwright（Chromium）の起動を共通化する。render.mjs / board.mjs から使う。
//
// プロキシ環境（クラウド環境など）では、Chromium がプロキシの証明書を信頼できず
// Google Fonts などの外部リソースを読めないことがある。その場合は外部への通信を Node 側で取得して
// Chromium に渡す（Node は NODE_EXTRA_CA_CERTS の証明書で TLS を検証する。検証は無効にしない）。
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { join } from "node:path";

const require = createRequire(import.meta.url);

function loadPlaywright() {
  try { return require("playwright"); } catch {}
  return require(join(execSync("npm root -g").toString().trim(), "playwright"));
}

const proxyServer = process.env.HTTPS_PROXY || process.env.https_proxy;

export async function launchBrowser() {
  const { chromium } = loadPlaywright();
  return chromium.launch(proxyServer ? { proxy: { server: proxyServer, bypass: "localhost,127.0.0.1" } } : {});
}

export async function newContext(browser, options = {}) {
  const context = await browser.newContext(options);
  if (proxyServer) {
    await context.route((url) => /^https?:$/.test(url.protocol), async (route) => {
      try {
        const u = new URL(route.request().url());
        if (["localhost", "127.0.0.1"].includes(u.hostname)) {
          // Playwright はプロキシ設定時にローカル宛ても proxy に送るため、ローカルサーバーへは Node から直接取得する
          const req = route.request();
          const res = await fetch(u, { method: req.method(), headers: req.headers(), body: req.postDataBuffer() || undefined });
          await route.fulfill({ status: res.status, headers: Object.fromEntries(res.headers), body: Buffer.from(await res.arrayBuffer()) });
        } else {
          await route.fulfill({ response: await route.fetch() });
        }
      } catch {
        await route.abort();
      }
    });
  }
  return context;
}

export async function newPage(browser, options = {}) {
  const context = await newContext(browser, options);
  return context.newPage();
}
