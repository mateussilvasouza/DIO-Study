# Configurando o webpack

* No diretório do projeto iniciar o npm executando os comandos no terminal:

    ```javascript
    npm init

    npm i -D react react-dom
    ```

* Criar o arquivo webpack.config.js e adicionar o seguinte código 
    
    ```javascript
    const path = new require('path'); //Pega o diretório padrão

    module.exports = { //exporta o código que será utilizado em node
        entry: './teste.js', //Recebe o arquivo de entrada
        output: {
            path: path.resolve(__dirname, 'dist'), //diretório de saída que será gerado
            filename: 'bundler.js' //arquivo final que será gerado no diretório
        }
    };
    ```


* Executar os comandos para instalar o webpack em modo de desenvolvedor no terminal:

    ```javascript 
    npm i -D webpack webpack-cli
    ```

* Executar os comandos para instalar o babel via terminal:

    ```javascript 
    npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react

    npm i -D babel-preset-react
    ```

* Após instalado adicione o seguinte código após o output no arquivo webpack.config.js

    ```javascript
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
    ```


* Crie o arquivo .babelrc e insira o código:

    ```javascript
    {

        //Nesse arquivo o babel irá ler todos os presets e plugins
        
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ]
    }
    ```



* Execute o comando no terminal para instalar o plugin html para webpack:

    ```javascript
    npm i _D html-webpack-plugin html-loader webpack-dev-server
    ```
* Em seguida adicione o código abaixo após a importação do path em webpack.config.js:

    ```javascript
    const HtmlWebPackPlugin = require("html-webpack-plugin"); //Importa o plugin html
    ```

* Adicione o código abaixo após o module no webpack.config.js:

    ```javascript
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
    ```

## Resultado final do código do webpack.config.js

    ```javascript
    const path = new require('path');  //Pega o diretório padrão
    const HtmlWebPackPlugin = require("html-webpack-plugin"); //Importa o plugin html

    module.exports = { //exporta o código que será utilizado em node
        mode: 'production',
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
    }```