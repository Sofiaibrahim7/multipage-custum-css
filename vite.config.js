var resolve = require('path').resolve;
var defineConfig = require('vite').defineConfig;

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                public: resolve(__dirname, 'src/pages/public/public.html'),
                admin: resolve(__dirname, 'src/pages/admin/admin.html'),
            }
        }
    }
});
