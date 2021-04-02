# Ziro CLI

This is a command line tool for using the ziro projects.

1. [Ziro App](https://github.com/megazear7/ziro-app)
1. [Ziro Components](https://github.com/megazear7/ziro-components)
1. [Ziro State](https://github.com/megazear7/ziro-state)

## Install

```
npm install --global ziro-app
```

## Commands

### Create

```
ziro create app example-app
```

This will create a Ziro app in the `example-app` directory.

> TODO: The CLI needs to find and replace the placeholder app names with the user provided app name.

## Contributing

Clone the repo and then run npm link.

```
cd ziro-cli
npm link
ziro help # This will run from your local.
```
