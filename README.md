# ayayatter

[GitHub Repository](https://github.com/tukinami/ayayatter)

## これはなに？

伺かのSHIORIの一つである`YAYA`のスクリプト用のフォーマッターです。**開発版になります。**

先行作品として、apxxxxxxeさんの[formatyaya](https://github.com/apxxxxxxe/formatyaya)があります。

機能は`UTF-8`の辞書ファイルをフォーマットします。(その他の文字コードの辞書については対応検討中です)

## これを使うのに必要なもの

- [Node.js(と付属の`npm`)](https://nodejs.org)

## 使い方の基本

まず、このレポジトリをダウンロードして、置きたい場所に展開しておいてください。

レポジトリのダウンロードは、レポジトリトップの`Code`ボタンの中にある`Download ZIP`から行なえると思います。

展開したディレクトリの場所を、仮に`path/to/ayayatter`とします。

### `path/to/ayayatter`から起動する方法

1. コマンドプロンプト、PowerShellなどのシェルで、`path/to/ayayatter`に移動します。
2. `npm install` とし、必要なファイルをインストールします。
3. `npm exec ayayatter`と入力し、決定します
4. 使い方が出てくるので、`npm exec ayayatter -- `と入力し、次に使いたい機能を入力して使用します。

例:

``` Powershell
PS path\to\ayayatter> npm exec ayayatter -- --version
0.1.0
```

### どこからでも使えるようにする方法

1. コマンドプロンプト、PowerShellなどのシェルで、`path/to/ayayatter`に移動します。
2. `npm install` とし、必要なファイルをインストールします。
3. `npm link`と入力して決定すると、シェルで`ayayatter`と入力すると、どこからでも使えるようになります。
4. `ayayatter`と入力し、出てきた使い方にそって、次に使いたい機能を入力して使用します。

例: 登録

``` PowerShell
PS path\to\ayayatter> npm link
```

例: 使用

``` PowerShell
PS anywhere\you\want> ayayatter --version
0.1.0
```

登録を解除したい場合は、シェル上のどこでもいいので、`npm unlink -g ayayatter`と入力して決定してください。

例: 登録解除

``` PowerShell
PS anywhere\you\want> npm unlink -g ayayatter
```

## 詳細な使い方

ここからの例は全て、**どこからでも使えるようにする方法**を使っています。

### 概略

```
Usage: ayayatter [options] [command]

Options:
  -V, --version              output the version number
  -h, --help                 display help for command

Commands:
  stdin|s <string>           stdin input contents of a yaya dic
  input|i [options] <input>  path to input dic.file
  help [command]             display help for command
```

### `stdin`コマンドの例

`<`というシェルの機能を使うので、使えるシェルが限られるのですが、

``` shell
$ ayayatter stdin < path/to/yaya_dict.txt
```

とすると、`path/to/yaya_dict.txt`をフォーマットした結果をシェルに出力します。

### `input`コマンドの使い方と例

使い方

```
Usage: ayayatter-input [options]

Options:
  -V, --version              output the version number
  -f, --force                force over-writing (default: false)
  -e, --encoding <encoding>  encoding of input dic file (default: "utf8")
  -h, --help                 display help for command
```

例

``` Powershell
PS anywhere\you\want> ayayatter input -e utf8 path/to/yaya_dict.txt
```

`-f`や`--force`オプションを付けていない場合、フォーマット結果をシェルに出力します。
付けている場合は、入力されたファイルに結果を上書きします。

## 開発者向け: ビルド方法

``` shell
$ npm install
$ npm run build-parser
$ npm run build
```

## ライセンス

MITにて配布いたします。

## 作成者

月波 清火 (tukinami seika)

[GitHub](https://github.com/tukinami)


