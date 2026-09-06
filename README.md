# 🌐 PROJETO 03 – Verificador de Status Code HTTP (CLI em Node.js)

> **Disciplina:** Desenvolvimento Web III (DWIII)  
> **Linguagem:** JavaScript (Node.js)  
> **Conceitos:** CLI / HTTP / NPM Bin / Fetch API  

---

## 📌 Sobre o Projeto

Este projeto foi desenvolvido para a disciplina de **Desenvolvimento Web III (DWIII)**, estendendo as atividades realizadas em sala de aula no dia **02/09/2026**.

O objetivo principal é a criação de uma ferramenta de linha de comando (CLI) construída em **Node.js**, executada diretamente pelo terminal, para verificar o *Status Code HTTP* de qualquer site fornecido pelo usuário através do comando customizado `npm init teste <SITE>`. O projeto foi estruturado de forma incremental, mantendo todos os scripts e utilitários criados nas aulas passadas.

---

## 🎯 Funcionalidades do CLI

- **Execução Nativa via NPM:** Permite consultar sites utilizando a sintaxe `npm init teste <SITE>`.
- **Tratamento Automático de Protocolo:** Adiciona automaticamente o prefixo `https://` caso o usuário digite o endereço sem o protocolo (ex: `github.com`).
- **Verificação de Status HTTP/HTTPS:** Realiza requisições assíncronas e exibe a URL acessada e a resposta do servidor (ex: `200 - OK`, `404 - Not Found`).
- **Resiliência e Tratamento de Erros:** Exibe mensagens amigáveis no terminal impedindo a interrupção abrupta do programa em casos de erro de rede ou URLs inválidas.
- **Preservação de Histórico:** Mantém intactos os demais scripts/CLIs desenvolvidos anteriormente.

---

## 💻 Estrutura e Funcionamento do Código

O projeto está estruturado com foco em simplicidade e utilização de recursos nativos do Node.js:

1. **`status-code.js` (Script Executável):**
   - Utiliza a *Shebang* (`#!/usr/bin/env node`) para permitir a execução direta pelo interpretador.
   - Captura os parâmetros informados no terminal através do `process.argv`.
   - Utiliza a **Fetch API** nativa para realizar as requisições HTTP e capturar os status de resposta.

2. **`package.json` (Mapeamento do CLI):**
   - Configurado com a chave `"name": "create-teste"` para seguir o padrão do inicializador do `npm init`.
   - Mapeia o executável CLI através do campo `"bin": { "create-teste": "./status-code.js" }`.

---

## 🚀 Como Instalar e Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão **18.0.0** ou superior recomendada).
- [Git](https://git-scm.com/) instalado.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/yasminandrade8/Projeto03-DWIII.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd Projeto03-DWIII
   ```

3. **Registre o comando globalmente via npm link:**
   ```bash
   npm link
   ```

4. **Execute o comando principal:**
   ```bash
   npm init teste https://www.google.com
   ```

---

## 🧪 Exemplos de Execução no Terminal

### 1. Consulta bem-sucedida (Status 200)
```bash
npm init teste https://www.google.com
```
**Saída:**
```text
Site: https://www.google.com/
Status Code: 200
```

### 2. Consulta simplificada (Sem protocolo)
```bash
npm init teste github.com
```
**Saída:**
```text
Site: https://github.com/
Status Code: 200
```

### 3. Página não encontrada (Status 404)
```bash
npm init teste https://httpbin.org/status/404
```
**Saída:**
```text
Site: https://httpbin.org/status/404
Status Code: 404 
```

---

## ⚠️ Tratamento de Erros

O script foi preparado para lidar com cenários de falha comuns e orientar o usuário:

| Cenário de Erro | Comando Exemplo | Exibição no Terminal |
| :--- | :--- | :--- |
| **Site não informado** | `npm init teste` | `❌ Erro: Nenhum site foi informado.`<br>`👉 Uso correto: npm init teste <URL_DO_SITE>` |
| **URL malformada/inválida** | `npm init teste teste_invalido` | `❌ Erro: O endereço fornecido é uma URL inválida.` |
| **Servidor offline / Falha de rede** | `npm init teste https://site-inexistente-123456.com.br` | `❌ Erro ao conectar com o site: fetch failed`<br>`Verifique sua conexão de rede ou se o endereço está correto.` |

---

## 👩‍💻 Autora
Feito com 💜 por Yasmin Andrade
