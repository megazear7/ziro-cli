import source from '../../node_modules/chalk/source/index.js';

function helpCommand(config) {
    console.log(helpMessage());
}

const helpMessage = config => `
Commands:
${source.blue('ziro create app <name>')} :: Create a new Ziro app in the directory <name>
                          The name should be lowercase with words separated by dashes
${source.blue('ziro version')}           :: Get the version of the Ziro cli
${source.blue('ziro help')}              :: Get help with the Ziro cli
`;

export { helpCommand as default };
