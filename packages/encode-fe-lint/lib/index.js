import initAction from './actions/init.js';
export const init = async (options) => {
    return await initAction({
        ...options,
        checkVersionUpdate: false,
    });
};
