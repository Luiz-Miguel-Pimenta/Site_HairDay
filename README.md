# ✂️ Hair Day — Agendamento de Cortes de Cabelo

Uma aplicação web para agendamento de atendimentos em barbearia/salão, com visualização de horários disponíveis e gerenciamento de agendamentos por período do dia, desenvolvida com JavaScript moderno, Webpack e json-server.

## 📋 Sobre o Projeto

O **Hair Day** é uma aplicação de agendamentos que permite selecionar uma data, escolher um horário disponível (manhã, tarde ou noite) e cadastrar o nome do cliente. Os agendamentos ficam organizados em um painel lateral separado por período do dia, e os dados são persistidos via uma API local simulada com **json-server**.

## ✨ Funcionalidades

- 📅 Seleção de data para o agendamento
- 🕐 Grade de horários dividida por período (Manhã, Tarde e Noite)
- ✅ Visualização de horários **disponíveis** e **indisponíveis**
- 👤 Cadastro do nome do cliente
- 📋 Painel lateral com todos os agendamentos do dia selecionado
- ❌ Cancelamento de agendamentos
- 💾 Persistência de dados com json-server (API REST local)
- 📆 Manipulação de datas com a biblioteca **dayjs**

## 🕒 Períodos de Atendimento

| Período | Horário |
|---------|---------|
| 🌅 Manhã | 09h – 12h |
| ☀️ Tarde | 13h – 18h |
| 🌙 Noite | 19h – 21h |

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura da aplicação
- **CSS3** — Estilização e layout
- **JavaScript (ES6+)** — Lógica de agendamento e manipulação do DOM
- **Webpack 5** — Bundler para empacotamento dos módulos
- **Babel** — Transpilação do JavaScript moderno para compatibilidade entre navegadores
- **json-server** — API REST local para persistência dos agendamentos
- **dayjs** — Biblioteca leve para manipulação e formatação de datas
- **Google Fonts** — Fonte **Catamaran** para a identidade visual

## 📁 Estrutura do Projeto

```
Site_HairDay/
├── src/
│   ├── assets/         # Ícones e imagens SVG (logo, tesoura, calendário, pessoa, etc.)
│   └── ...             # Arquivos JS e CSS organizados em módulos
├── index.html          # Página principal da aplicação
├── package.json        # Dependências e scripts do projeto
├── webpack.config.js   # Configuração do Webpack
├── server.json         # Banco de dados local do json-server
├── .gitignore
└── .gitattributes
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 16 ou superior recomendada)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Luiz-Miguel-Pimenta/Site_HairDay.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd Site_HairDay
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando a Aplicação

Você precisará rodar **dois processos em paralelo** — o servidor de dados e o servidor de desenvolvimento:

**Terminal 1 — Inicia a API local (json-server na porta 3333):**
```bash
npm run server
```

**Terminal 2 — Inicia o servidor de desenvolvimento com Webpack:**
```bash
npm run dev
```

Acesse a aplicação em `http://localhost:8080` (ou a porta indicada pelo Webpack).

### Build para Produção

```bash
npm run build
```

## 🖥️ Como Utilizar a Interface

1. Selecione uma **data** no campo de data
2. Escolha um **horário disponível** na grade de horários (manhã, tarde ou noite)
3. Informe o **nome do cliente** no campo correspondente
4. Clique em **Agendar**
5. O agendamento aparecerá no painel lateral **"Agendamentos"**, organizado por período
6. Para cancelar um agendamento, clique no **ícone de cancelar** ao lado do registro

## 👤 Autor

**Luiz Miguel Nunes Pimenta**

- GitHub: [@Luiz-Miguel-Pimenta](https://github.com/Luiz-Miguel-Pimenta)
