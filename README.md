Este projeto configura um ambiente de desenvolvimento utilizando Docker e Docker Compose com os seguintes serviços:

- PostgreSQL
- MongoDB
- Node.js 22
# Como executar

1. clone o repositório:

```bash
git clone https://github.com/seu-usuario/pesquisa-satisfacao.git
cd pesquisa-satisfacao
```

2. Construa e inicie os containers:

```bash
docker-compose up --build
```

3. Acesse a aplicação via `http://localhost:8501`.

## Credenciais de Acesso

- PostgreSQL:  
  Usuário: `admin`  
  Senha: `admin123`

- MongoDB:  
  Usuário: `admin`  
  Senha: `admin123`
