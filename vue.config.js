module.exports = {
    devServer: {
        proxy: {
            '/apis': {
                target: 'http://www.wanandroid.com/', // target host
                ws: true, // proxy websockets 
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': '' // rewrite path
                }
            },
        }
    }
};