# Ziro CLI

This is a command line tool for using the [Ziro projects](https://ziro.alexlockhart.me).

[A Ziro Project](https://ziro.alexlockhart.me/)

## Install

```bash
npm install --global ziro-app
```

## Commands

### Create

```bash
ziro create app example-app
```

This will create a Ziro app in the `example-app` directory.

## Contributing

Clone the repo and then run npm link.

```bash
cd ziro-cli
npm link
npm run watch
ziro help # This will run from your local.
```

### Publishing

```bash
npm run build
npm add .
npm commit -m "Something"
npm push origin main
npm publish
```
