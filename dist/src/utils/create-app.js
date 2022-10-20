import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

function createApp (appName) {
    const parts = appName.replace(/-/, ' ')
        .split(" ")
        .map(word => word[0].toUpperCase() + word.substr(1));
    const upperName = parts.join('');
    const prettyName = parts.join(' ');

    execSync(`git clone https://github.com/megazear7/ziro-app.git ${appName}`, { stdio: 'inherit' });
    execSync(`rm -rf ./${appName}/.git`, { stdio: 'inherit' });

    walk(`./${appName}`, (e, results) => {
        if (e) {
            console.error(e);
        }

        results.forEach(result => {
            const oldContent = fs.readFileSync(result, 'utf8');
            let newContent = oldContent
                .replace(/my-app/g, appName)
                .replace(/MyApp/g, upperName)
                .replace(/My App/g, prettyName);
            fs.writeFileSync(result, newContent);
        });
    });
}

var walk = function (dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var pending = list.length;
        if (!pending) return done(null, results);
        list.forEach(function (file) {
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    results.push(file);
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};

export { createApp as default };
