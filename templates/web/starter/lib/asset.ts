// public/ の画像・動画のパス。basePath（サブパス公開）に対応する
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
