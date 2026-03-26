// O Webpack é um "empacotador" (bundler) de módulos para aplicações JavaScript modernas.

// O Webpack pega todos os arquivos, entende como eles se conectam (quem importa quem) e
// gera um único arquivo (ou poucos) otimizado e pronto para o navegador ler.
const path = require("path");

const HtmlwebpackPlugin = require("html-webpack-plugin"); //Importa o plugin HTML-webpack

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
    }),
  ],
}