# API de Gerenciamento de Tickets

API para gerenciamento de tickets de suporte desenvolvida utilizando os módulos nativos do Node.js.

O objetivo do projeto é trabalhar os fundamentos de uma API HTTP sem utilizar frameworks como Express, implementando manualmente tratamento de requisições, rotas, parâmetros e persistência dos dados.

## Funcionalidades

- Criação de tickets
- Listagem de tickets
- Atualização de tickets
- Encerramento de tickets
- Exclusão de tickets
- Identificação dos tickets por UUID
- Manipulação de parâmetros de rota
- Tratamento do corpo das requisições JSON
- Persistência dos dados em arquivo JSON

## Tecnologias

- Node.js
- JavaScript
- Node HTTP
- File System
- JSON

## Endpoints

```text
GET    /tickets
POST   /tickets
PUT    /tickets/:id
PATCH  /tickets/:id/closed
DELETE /tickets/:id
```

## Estrutura

```text
src/
├── controllers/
│   └── tickets/
├── database/
├── middlewares/
├── routes/
├── utils/
└── server.js
```

O projeto possui implementações próprias para processamento do corpo JSON, identificação das rotas e extração de parâmetros de consulta.

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie a API:

```bash
npm run dev
```

## Aprendizados

Este projeto foi desenvolvido para compreender melhor o funcionamento de uma API por baixo dos frameworks, incluindo servidor HTTP, métodos HTTP, roteamento, parâmetros, manipulação de JSON e persistência de dados.

## Autor

Desenvolvido por **Philipi Pastor**.
