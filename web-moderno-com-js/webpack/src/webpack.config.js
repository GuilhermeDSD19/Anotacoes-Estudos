const modoDev = process.env.NODE_ENV !== 'production'; 

const path = require('path'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Plugin para extrair estilos CSS em arquivos separados.

module.exports = {
    mode: modoDev ? 'development' : 'production', 
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js', 
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regra para arquivos CSS
                use: [
                    modoDev === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', // Utiliza o MiniCssExtractPlugin em produção para extrair estilos em arquivo separado ou o style-loader em desenvolvimento para injetar estilos no DOM
                    'css-loader', // Processa os imports e url() dentro dos arquivos CSS
                ],
            },
            {
                test: /\.s[ac]ss$/i, // Regra para arquivos SASS/SCSS
                use: [
                    modoDev === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'sass-loader', // Compila arquivos SASS/SCSS em CSS
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css', // Define o nome do arquivo CSS de saída
            chunkFilename: '[id].css', // Define o nome do arquivo CSS para chunks ou módulos separados
        }),
    ],
};
