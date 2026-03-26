// O Webpack é um "empacotador" (bundler) de módulos para aplicações JavaScript modernas.

// O Webpack pega todos os arquivos, entende como eles se conectam (quem importa quem) e
// gera um único arquivo (ou poucos) otimizado e pronto para o navegador ler.
const path = require("path");

const HtmlwebpackPlugin = require("html-webpack-plugin"); //Importa o plugin HTML-webpack

const CopyWebpackPlugin = require("copy-webpack-plugin"); //Importa o plugin Copy-webpack

/*
  Essa linha importa um módulo nativo do Node.js chamado path. Ele serve 
  para lidar com caminhos de pastas e arquivos de forma que funcione tanto 
  no Windows quanto no Linux/Mac, evitando erros de barras invertidas (\) ou normais (/).
*/
module.exports = {
  target: "web", //Informa ao Webpack que o código que ele vai gerar é para rodar em um navegador (web).

  mode: "development", 
  /*
    Webpack não vai "minificar" o código (deixar tudo em uma linha só), facilitando a leitura 
    e a depuração (debug) enquanto desenvolve.
  */

  entry: path.resolve(__dirname, "src", "main.js"),
  /*
    Aqui diz: "Webpack, comece a ler o projeto a partir deste arquivo".
    O "path.resolve" garante que ele encontre a pasta "src" e o arquivo "main.js" 
    a partir da pasta atual do projeto (__dirname).
  */

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  /* 
    Aqui define o que o Webpack deve "cuspir" no final:
      "filename": O nome do arquivo final empacotado (main.js).
      "path": A pasta onde esse arquivo será salvo. No caso, ele criará (ou usará) uma pasta chamada dist (de distribution).
  */

  //webpack-dev-server cria um servidor local no computador para rodar o site enquanto o constrói. 
  devServer: {

  //Diz ao servidor onde estão os arquivos que ele deve "servir" ao navegador.
  static: {
    directory: path.join(__dirname, "dist"),
  },
    port: 3000,
    open: true,
    liveReload: true,
  },


  /*
    O Webpack usa o campo plugins para adicionar funcionalidades extras que vão além de apenas "ler arquivos". 
    Pense nos plugins como superpoderes que dá ao Webpack para realizar tarefas complexas de automação. 
  */
  plugins: [
    new HtmlwebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve("src", "assets", "scissors.svg"), //Coloca o ícone do projeto no titúlo da página.
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"), // Vai até a pasta src/assets e pega tudo o que está lá dentro.
          to: path.resolve(__dirname, "dist", "src", "assets"), // Leva esses arquivos e cola eles exatamente nesse caminho dentro da pasta dist.
        },
      ],
    }),
  ],


  /*
    Esse bloco de código é o que "ensina" o Webpack a ler arquivos que não são JavaScript. 
    Como foi instalado o "style-loader" e o "css-loader", esse código no "webpack.config.js" 
    é o que coloca esses dois para trabalhar juntos. 
  */
  module: {
    /*
      Por padrão, o Webpack só entende arquivos .js e .json. O campo module é onde define as regras 
      de como ele deve tratar outros tipos de arquivos (CSS, imagens, fontes, etc.). 
    */
    rules: [ // Cada item dentro de rules é uma instrução para um tipo de arquivo diferente.  
      {
        test: /\.css$/, //É uma Expressão Regular (Regex). Serve como um filtro. "Webpack, aplique esta regra em todos os arquivos que terminarem com .css"

        use: ["style-loader", "css-loader"], //Quais ferramentas usar para processar esses arquivos
        /*
          css-loader: Ele lê o conteúdo do arquivo CSS e o transforma em uma string dentro do JavaScript. 
          style-loader: Ele pega essa string e a injeta dentro de uma tag <style> no cabeçalho do site para o estilo aparecer na tela.
        */
      },
      {
        // Toda vez que o Webpack encontrar um arquivo JS, passe ele para o Babel 'traduzir' antes de colocá-lo na pasta final.

        test: /\.js$/, // É o filtro. Essa expressão regular diz ao Webpack: "Olhe para todos os arquivos que terminam com a extensão .js"
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
}