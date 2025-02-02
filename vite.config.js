var resolve = require('path').resolve;
var defineConfig = require('vite').defineConfig;
module.exports = defineConfig({
    build: {
        rollupoptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                public: resolve(__dirname, 'src/pages/public/public.html'),
                public: resolve(__dirname, 'src/pages/admin/admin.html'),
            }
        }
    }
});
