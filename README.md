## Recoded From Jaksel-Language by Rio Chandra

This project recoded from jaksel-language!.

---

# Kalteng Script

Jaksel Script is a new programming language, very modern, easy to learn, using Indonesia-slang language. No programming experience required.

Thank you for all your contributions, share, star, and everything.

## Instalation & Run

Install from npm
```bash
npm install -g Kalteng-language
```
Or Clone this repository

```bash
git clone https://github.com/Aufaruq/kalteng-language.git
```

### Run

If you install from npm, run jaksel script using `jaksel` command

```bash
jaksel example/example1.kalteng
```

Or run from this repository
```
node kalteng-interpreter.js example/example1.kalteng
```

## Table Of Content

* [Jaksel Script](#kalteng-script)
   * [Instalation &amp; Run](#instalation--run)
   * [Table Of Content](#table-of-content)
   * [Example](#example)
   * [Command](#command)
  * [Disclaimer](#disclaimer)
   * [Showcase](#showcase)
      * [Highlight Text Editor](#highlight-text-editor)

[github-markdown-toc](https://github.com/ekalinin/github-markdown-toc)

## Example 

Example : 

```
amunnya umur itu 21
tampaikan "Umur lu " + umur
amun umur lebih gede 20
  tampaikan "Elu tua"
  amunnya umurgua itu umur + 10
  tampaikan "amun gua umurnya " + umurgua
  amun umurgua lebih gede 30
    tampaikan "gua lebih tua"
  udaham
amunsik
  tampaikan "dasar bocil"
udaham
tampaikan "udaham ah"
```

```
amunnya jumlah itu 10
tampaikan "Jumlah: " + jumlah

inilawan jumlah itu 11
tampaikan "Jumlah: " + jumlah

amunnya isHidup itu positive vibes
tampaikan "is hidup :" + isHidup

ulihbalik i endup 10
  amun i lebih gede 3
    tampaikan "loop ke " + i
  udaham
udaham
```

### Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.

- [List Command](Command.md)

### Disclaimer

This project just for fun, I don't want to hurt anyone. Just from idea "what if jaksel language is a programming language" and make it true. This project only for education purpose, not for production ready.

## Showcase

Some cool project from you, submit your project like highlight text, jaksel-to-js, etc. Make PR link to your repo !. Don't limit your creativity

### Highlight Text Editor
- [vscode-jaksel-language-support](https://github.com/ngupuk/vscode-jaksel-language-support) visual studio code extension for syntax highlighting, code snippet, and auto formatting
