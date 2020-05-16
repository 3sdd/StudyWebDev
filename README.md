# StudyWebDev
 

## 1.デジタル時計
https://3sdd.github.io/StudyWebDev/website/clock/

ただのデジタル時計です。
npmとbrowserifyを使って作りました。

使ったライブラリ

| 使ったライブラリ | 内容|
|- | - |
|browserify | ビルドする時。ブラウザで動くようにjavascriptのコードを変換 |
| dayjs | 時計の時間部分に使用|

## 2.タイマー
https://3sdd.github.io/StudyWebDev/website/timer/

ただのタイマーです。
コード圧縮を使ってみました。

| 使ったライブラリ | 内容|
|- | - |
|uglify-es | ビルドする時。圧縮とマングリングに使用 |
|browserify | ビルドする時。 |
| easytimer.js | タイマーの時間部分に使用|
| jquery | タイマーの表示変更などに使用|

## 3.ベクトル計算サイト

ベクトルの足し算などの計算が出来る際サイトです。
ウェブサイト公開までの一通りの方法を勉強するために作りました。
vueの勉強も兼ねていました。@vue/cliを使ってプロジェクトを作成し、
制作しました。

| 使ったライブラリ | 内容|
|- | - |
|@vue/cli | プロジェクト作成、開発用、ビルドなど。 |
|vue | サイト全般 |
| jsxgraph |ベクトルをグラフ上に描画するために使用|
| katex | ベクトル記号などの式を描画するのに使用|


## 4. TreeText

インデントしたテキストをtreeコマンドを実行したように、ツリー状にする。
VueRouterとBootstrapVueの試しで作りました。

サイト公開するためリポジトリ移動しました。

url: <https://www.treetext.online>

| 使ったライブラリ | 内容|
|- | - |
|@vue/cli | プロジェクト作成、開発用、ビルドなど。 |
|vue | サイト全般 |
| bootstrap-vue |デザインで使用|
| vue-router | ページの設定するため使用 |
| vue-head | <head>の情報を書き換えるため使用 |
| vue-clipboard2 | ツリー上にしたテキストをコピーするために使用 |