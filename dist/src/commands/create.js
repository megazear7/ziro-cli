import source from '../../node_modules/chalk/source/index.js';
import createAppCommand from './create/app.js';

function createCommand(config) {
    if (config.help) {
        console.log(helpMessage());
    } else if (config.args(1) === 'app') {
        createAppCommand(config);
    } else if (config.args(1)) {
        console.log(notFoundMessage(config));
    } else {
        console.log(noCommandMessage());
    }
}

const helpMessage = config => `
Create Commands:
${source.blue('ziro create app <name>')} :: Create a new Ziro app in the directory <name>
                          The name should be lowercase with words separated by dashes
`;

const notFoundMessage = config => `
${source.blue('ziro create')} does not have sub command of ${source.blue(config.args(1))}
`;

const noCommandMessage = config => `
${source.blue('ziro create')} requires a sub command such as ${source.blue('ziro create app')}
`;

export { createCommand as default };
