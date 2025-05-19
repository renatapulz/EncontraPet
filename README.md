# 🐾 EncontraPet

O **EncontraPet** é uma aplicação web que ajuda a localizar animais de estimação perdidos. A plataforma permite cadastrar animais desaparecidos, visualizar pets encontrados e promover o reencontro por meio do compartilhamento de informações e contatos.

📄 [Clique aqui para acessar o projeto teórico (PDF)](./projeto-teorico.pdf)

## Tecnologias Utilizadas

### Frontend
- **HTML5**
- **CSS3**
- **JavaScript**

### Backend
- **Node.js** – ambiente de execução
- **Express** – Construção de APIs
- **Sequelize** – ORM para banco de dados relacional
- **PostgreSQL** – Sistema de gerenciamento de banco de dados
- **pgAdmin** – interface gráfica para gerenciamento do banco
- **Postman** - testes em APIs

### Bibliotecas Utilizadas no Backend

- **cors** — Middleware para habilitar CORS (controle de acesso entre domínios)
- **dotenv** — Carrega variáveis de ambiente do arquivo `.env`
- **pg-hstore** — Serialização/deserialização de dados JSON para PostgreSQL

## 📌 Funcionalidades

- Cadastro de animais perdidos
- Exibição de uma galeria de pets com detalhes
- Contato do tutor visível para facilitar o reencontro
- Botão para marcar um animal como encontrado
- Exibição da porcentagem de sucesso da plataforma (pets encontrados)
- Responsividade para diferentes dispositivos


## Rotas Criadas (APIs)

- `GET /pets` - Lista todos os pets  
- `GET /pets/:id` - Retorna um pet pelo ID  
- `POST /pets` - Cadastra um novo pet  
- `PATCH /pets/:id` - Atualiza informações de um pet  
- `DELETE /pets/:id` - Deleta um pet  

---

## 📁 Estrutura do Projeto

```
EncontraPet/
├── backend/
│   ├── src/
│       ├── controllers/
│       ├── routes/
│       ├── db.js
│       ├── index.js
│   ├── models/
│   ├── migrations/
│   ├── controllers/
│   ├── config/
│   └── .env
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── scripts.js
└── README.md
```

## ▶️ Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/renatapulz/EncontraPet
cd EncontraPet
```

### 2. Instale as dependências do backend
```bash
cd backend
npm install
```

### 3. Configure o arquivo `.env`
Crie um arquivo `.env` na raiz do backend com as variáveis de ambiente necessárias (como configurações do banco de dados).

### 4. Execute as migrations
```bash
npx sequelize db:migrate
```

### 5. Inicie o servidor backend
```bash
npm run start:dev
```

### 6. Acesse o frontend
Abra o arquivo `frontend/index.html` em seu navegador ou utilize uma extensão como o **Live Server** do VS Code para simular um ambiente local.

---

## Integrantes

- DANILO AUGUSTO FELIX
- IGOR BARROSO DE CARVALHO
- RICHARD CARVALHO VIANA
- HASSAN DIAB
- MIGUEL GONCALVES LEITE
- RENATA MARTINS DANTAS PULZ

---

📝 Projeto desenvolvido para a disciplina PROJETO INTEGRADOR - Senac com foco em integração entre frontend e backend.

---
