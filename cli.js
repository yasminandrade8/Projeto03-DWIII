import pegaArquivo from "./app.js";
import validaURL from "./validacao.js";
import chalk from "chalk";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);

    if (caminho[3] === 'validar') {
        console.log(chalk.green("Links Validados"), await validaURL(resultado));
    }else {
        console.log(chalk.cyan("Lista de Links"), resultado);
    }
}

processaTexto(caminho);