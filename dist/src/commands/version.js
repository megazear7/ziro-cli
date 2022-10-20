import source from '../../node_modules/chalk/source/index.js';

function versionCommand(config) {
    console.log(source.blue(config.version));
}

export { versionCommand as default };
