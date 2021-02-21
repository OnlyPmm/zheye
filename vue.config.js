const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.ts', '.vue', '.json', '.scss'],
            alias: {
                "@": path.join(__dirname, 'src')
            }
        }
    }
}