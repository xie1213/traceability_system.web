const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            "/api": {
                target: "http://172.31.13.200:5000/api/", // 后端接口
                // target: 'http://192.168.1.26:5000/api/',// 后端接口
                secure: true, //是否https接口
                changeOrigin: true, // 是否跨域
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    },
});
