#!/bin/bash
# usage: bash render-one.sh C3-01   （作業ディレクトリは /home/user/LUX）
set -e
cd /home/user/LUX
D=projects/gokumin-flagship-bed/product/designs/v2/c3
node $D/gen-scenes.mjs $1
node scripts/render3d.mjs $D/$1-hero.scene.json $D/$1-three-quarter --views three-quarter
node scripts/render3d.mjs $D/$1.scene.json $D/$1 --views front,side
node scripts/render3d.mjs $D/$1-frame.scene.json $D/$1-frame --views three-quarter
node scripts/render3d.mjs $D/$1-structure.scene.json $D/$1-structure --views three-quarter
node scripts/render3d.mjs $D/$1-under.scene.json $D/$1-underfloor --views low
