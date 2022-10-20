import source from '../../../node_modules/chalk/source/index.js';
import createApp from '../../utils/create-app.js';

function createAppCommand(config) {
    if (config.help) {
        console.log(helpMessage());
    } else if (config.args(2)) {
        createApp(config.args(2));
    } else {
        console.log(noCommandMessage());
    }
}

const helpMessage = config => `
Create App Commands:
${source.blue('ziro create app <name>')} :: Create a new Ziro app in the directory <name>
                          The name should be lowercase with words separated by dashes
`;

const noCommandMessage = config => `
${source.blue('ziro create app')} requires a name for the app such as ${source.blue('ziro create app my-app')}
`;

export { createAppCommand as default };
