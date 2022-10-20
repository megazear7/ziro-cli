import source from '../../node_modules/chalk/source/index.js';

function notFoundCommand(config) {
    console.log(`No command found: ${source.blue('ziro ' + config.command)}`);
}

export { notFoundCommand as default };
