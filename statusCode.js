#!/usr/bin/env node
import fetch from 'node-fetch';
import chalk from 'chalk';

const site = process.argv[2];

async function checaStatus(url) {
    if (!url) {
        console.log(chalk.red("Erro: nenhum site foi informado."));
        console.log(chalk.yellow("Uso: npm init teste <SITE>"));
        return;
    }
    try {
        new URL(url);
    } catch {
        console.log(chalk.red(`Erro: "${url}" não é um indereço válido.`));
        return;
    }
    try {
        const resposta = await fetch(url);
        const cor = corStatusCode(resposta.status);
        console.log(chalk.cyan(`Site: ${url}`));
        console.log(cor(`Status Code: ${resposta.status}`));
    } catch (erro) {
        console.log(chalk.red(`Erro ao acessar o site: ${erro.message}`));
    }
}

function corStatusCode(status) {
    if (status >= 200 && status < 300) return chalk.green;
    if (status >= 300 && status < 400) return chalk.yellow;
    return chalk.red;
}

checaStatus(site)