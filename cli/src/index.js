import chalk from 'chalk';
import versionCommand from './commands/version.js';
import helpCommand from './commands/help.js';

export default function() {
    const args = process.argv.slice(2);
    const cmd = args[0];
    const config = getConfig(args);

    switch (cmd) {
        case 'v':
        case 'version':
            versionCommand(config);
            break;
        case 'h':
        case 'help':
            helpCommand(config);
            break;
        default:
            helpCommand(config);
            break;
      }
}

