# API REST - Fundamentos do Node.js com TypeScript

Este projeto foi desenvolvido durante o curso de formação Full Stack da Rocketseat, na aula sobre os fundamentos do Node.js com TypeScript. Criamos uma API REST utilizando Express e Zod para validação de dados.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework para criação de servidores web
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Zod** - Biblioteca para validação e tipagem de dados

## Como Executar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/joomdeveloper/API-REST_Rocket
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd API-REST_Rocket
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   npm run dev
   ```

O servidor será executado na porta definida no arquivo de configuração, por padrão `http://localhost:2025`.

## Estrutura do Projeto

```
├── src
│   ├── routes
│   │   ├── products-routes.ts
│   ├── controllers
│   │   ├── ProductsController.ts
│   ├── schemas
│   │   ├
│   ├── server.ts
├── package.json
├── tsconfig.json
```

- **routes/**: Contém as rotas da API.
- **controllers/**: Implementa a lógica dos endpoints.
- **schemas/**: Define os esquemas de validação com Zod.
- **server.ts**: Arquivo principal do servidor.

## Endpoints

### Criar Usuário

- **Rota:** `POST /products`
- **Body:**
  ```json
  {
    "name": "Computador",
    "price": 2000,
  }
  ```
- **Validação:** Realizada com Zod para garantir que os dados estejam no formato correto.

### Listar Usuários

- **Rota:** `GET /products`
- **Resposta:** Lista de usuários cadastrados.

## Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e contribuir!

---

Desenvolvido por João Marcos durante o curso de Formação Full Stack da Rocketseat 🚀.

