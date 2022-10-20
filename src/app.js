import versionCommand from './commands/version.js';
import helpCommand from './commands/help.js';
import notFoundCommand from './commands/not-found.js';
import createCommand from './commands/create.js';
import getConfig from './utils/get-config.js';

const VERSION_COMMANDS = [ 'v', 'version', '-v', '--version'];
const HELP_COMMANDS = [ 'h', 'help', '-h', '--help'];
const CREATE_COMMANDS = [ 'c', 'create'];

export default function() {
    const args = process.argv.slice(2);
    const cmd = args[0];
    const config = getConfig(args);

    if (VERSION_COMMANDS.includes(cmd)) {
        versionCommand(config);
    } else if (HELP_COMMANDS.includes(cmd)) {
        helpCommand(config);
    } else if (CREATE_COMMANDS.includes(cmd)) {
        createCommand(config);
    } else {
        notFoundCommand(config);
    }
}

