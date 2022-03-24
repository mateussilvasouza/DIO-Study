const path = new require('path');  //Pega o diretório padrão
const HtmlWebPackPlugin = require("html-webpack-plugin"); //Importa o plugin html

module.exports = { //exporta o código que será utilizado em node
    mode: 'production',
    devtool: 'source-map', //mapeia os arquivos
    entry: './src/index.js', //Recebe o arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'dist'), //diretório de saída que será gerado
        filename: 'bundler.js' //arquivo final que será gerado no diretório
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //O que será interpretado
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' //o loader que será utilizado para interpretação do JS
                }
            }

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}