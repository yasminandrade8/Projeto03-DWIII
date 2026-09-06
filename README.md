# 🌐 Projeto 03 - DWIII: Verificador de Status Code HTTP (CLI)

[![Node.js Version](https://img.shields.io/badge/Node.js->=18.0.0-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Este projeto foi desenvolvido para a disciplina de **Desenvolvimento Web III (DWIII)**. Ele consiste em uma ferramenta de linha de comando (CLI) construída em **Node.js** para realizar requisições HTTP/HTTPS e verificar o *Status Code* de um site fornecido pelo usuário via terminal.

O projeto estende os scripts desenvolvidos em sala de aula no dia **02/09/2026**, mantendo todas as funcionalidades anteriores e adicionando o inicializador customizado para o comando `npm init teste <SITE>`.

---

## 📌 Sumário

- [Recursos](#-recursos)
- [Prerequisites](#-pré-requisitos)
- [Instalação e Configuração Local](#-instalação-e-configuração-local)
- [Como Usar](#-como-usar)
- [Exemplos de Uso](#-exemplos-de-uso)
- [Tratamento de Erros](#-tratamento-de-erros)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Autores](#-autores)

---

## ✨ Recursos

- 🚀 **Execução via CLI nativa do NPM**: Permite a chamada com o comando `npm init teste <URL>`.
- 🔍 **Consulta de Status Code HTTP/HTTPS**: Exibe a URL acessada e a resposta do servidor (ex: `200 - OK`, `404 - Not Found`).
- 🛡️ **Tratamento de Erros Robusto**: Lida com falta de argumentos, URLs malformadas, indisponibilidade de servidor e falhas de rede.
- 📦 **Preservação de Scripts Anteriores**: Mantém intactos os scripts e utilitários criados nas aulas passadas.

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão **18.0.0** ou superior recomendada).
- [Git](https://git-scm.com/).

---

## 🔧 Instalação e Configuração Local

Siga o passo a passo abaixo para clonar o repositório e registrar a CLI localmente em seu ambiente.

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/yasminandrade8/Projeto03-DWIII.git
   cd Projeto03-DWIII
   ```

2. **Instalar dependências (caso existam):**
   ```bash
   npm install
   ```

3. **Vincular o pacote CLI localmente com o NPM Link:**
   Como a CLI utiliza a convenção `npm init teste`, o pacote deve estar registrado globalmente na máquina como `create-teste`. Para isso, execute:
   ```bash
   npm link
   ```
   *Pronto! O comando `npm init teste` agora está disponível globalmente no seu terminal.*

---

## 🚀 Como Usar

A sintaxe principal para executar a verificação de um site é:

```bash
npm init teste <SITE>
```

> **Nota:** Caso o protocolo (`http://` ou `https://`) não seja informado pelo usuário, o script adicionará automaticamente o prefixo `https://`.

---

## 🧪 Exemplos de Uso

### 1. Consulta com sucesso (200 OK)
```bash
npm init teste https://www.google.com
```
**Saída no terminal:**
```text
Site: https://www.google.com/
Status Code: 200 - OK
```

### 2. Consulta de endereço sem protocolo
```bash
npm init teste github.com
```
**Saída no terminal:**
```text
Site: https://github.com/
Status Code: 200 - OK
```

### 3. Redirecionamentos ou erros de servidor
```bash
npm init teste https://httpbin.org/status/404
```
**Saída no terminal:**
```text
Site: https://httpbin.org/status/404
Status Code: 404 - NOT FOUND
```

---

## 🛡️ Tratamento de Erros

O programa foi desenvolvido para lidar graciosamente com falhas, exibindo mensagens amigáveis no terminal sem interromper a execução abruptamente com pilhas de erros do Node.js (*unhandled exceptions*).

| Cenário de Erro | Comando Executado | Mensagem Exibida no Terminal |
| :--- | :--- | :--- |
| **Site não informado** | `npm init teste` | `❌ Erro: Nenhum site foi informado.`<br>`👉 Uso correto: npm init teste <URL_DO_SITE>` |
| **URL inválida** | `npm init teste invalid_url_test` | `❌ Erro: O endereço fornecido é uma URL inválida.` |
| **Falha na Conexão / Servidor Indisponível** | `npm init teste https://site-inexistente-12345.com.br` | `❌ Erro ao conectar com o site: fetch failed`<br>`Verifique sua conexão de rede ou se o endereço está correto.` |

---

## 📁 Estrutura do Projeto

A estrutura de arquivos do projeto garante a convivência entre as tarefas anteriores e o novo recurso de CLI:

```text
Projeto03-DWIII/
├── status-code.js         # Script principal da CLI de consulta de Status Code
├── package.json           # Configuração do pacote (contendo "name": "create-teste" e "bin")
├── README.md              # Documentação oficial do projeto
└── ...                    # Demais scripts e arquivos desenvolvidos na aula de 02/09/2026
```

---

## 🛠️ Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript no servidor.
- **Fetch API (Nativa)**: Para realização de requisições HTTP/HTTPS assíncronas.
- **NPM Bin / Link**: Para criação do executável no terminal do sistema operacional.

---

## 👥 Autores

Trabalho desenvolvido em dupla para a disciplina de **Desenvolvimento Web III**:

- **Yasmin Andrade** - [@yasminandrade8](https://github.com/yasminandrade8)
- **Integrante da Dupla** - Nome e link do GitHub do colega

---

*Projeto entregue em conformidade com as orientações do dia 02/09/2026.*