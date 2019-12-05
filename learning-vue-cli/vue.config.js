// vue.config.js
module.exports = {
    // options...
    devServer: {
        useLocalIp: false,
        public: 'www.foothillfarmflowers.com:8081',
        disableHostCheck: true,
        proxy: {
            '^/api': {
                target: 'http://www.foothillfarmflowers.com:3000',
            },
        },
    }
}