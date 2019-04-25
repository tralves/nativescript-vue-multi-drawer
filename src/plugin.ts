import MultiDrawer, { updateDefaultOptions } from './MultiDrawer';

const Plugin = {
    install(Vue, options) {
        console.log('installing MultiDrawer plugin', options);
        if (options) {
            updateDefaultOptions(options);
        }
        Vue.component('MultiDrawer', MultiDrawer);
    }
};

export default Plugin;
