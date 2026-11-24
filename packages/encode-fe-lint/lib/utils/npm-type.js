import { sync as commandExistsSync } from 'command-exists';
const promise = new Promise((resolve) => {
    if (!commandExistsSync('pnpm'))
        return resolve('npm');
    resolve('pnpm');
});
export default promise;
