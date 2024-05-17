<h1 align="center" style="font-weight: bold;">Enterprise API</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
 <a href="#routes">API Endpoints</a> •
 <a href="https://github.com/ugabb/challenge-2024">Frontend</a> • 
</p>

<p align="center">
    <b>Simples API SOLID para gerenciar empreendimentos</b>
</p>

<h2 id="technologies">💻 Technologies</h2>

- Express
- Prisma
- Zod
- Typescirpt

<h2 id="started">🚀 Getting started</h2>

<h3>Prerequisites</h3>

<h3>Cloning</h3>

Como clonar

```bash
git clone https://github.com/ugabb/enterprise-api.git
```

<h3>Configurando variaveis de ambiente .env </h2>

Use o `.env.example` como referência para criar o seu `.env`

```yaml
DATABASE_URL="file:./dev.db"
FRONT_END_ORIGIN=
PORT=
```

<h3>Starting</h3>

Como rodar o projeto

```bash
cd enterprise-api
yarn install
yarn prisma db pull
yarn dev
```

<h2 id="routes">📍 API Endpoints</h2>
​

| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /enterprise</kbd>     | Lista todas os empreendimentos
| <kbd>GET /enterprise/:id</kbd>     | Busca por um empreendimento pelo ID
| <kbd>POST /enterprise</kbd>     | Cria um empreendimento
| <kbd>PUT /enterprise/:id</kbd>     | Atualiza um empreendimento pelo ID
| <kbd>DELETE /enterprise/:id</kbd>     | Exclui um empreendimento pelo ID

<h3 id="get-auth-detail">GET /enterprise</h3>

**RESPONSE**
```json
{
    "enterprises": [
        {
            "id": "5dfa13e4-ca45-4998-b2fb-8b893afca252",
            "name": "Sirius Vila Bastos",
            "status": "RELEASE",
            "purpose": "commercial",
            "ri_number": "123321",
            "addressId": "ea4413e0-32e2-490a-8191-fdc279ca2f39",
            "address": {
                "id": "ea4413e0-32e2-490a-8191-fdc279ca2f39",
                "district": "Vila Bastos",
                "city": "Santo André",
                "street": "Rua Doutor Messuti",
                "state": "SP",
                "number": "339",
                "cep": "60000000"
            }
        },
        {
            "id": "3906d5b2-d50d-425e-b0a2-4df6dbcc630c",
            "name": "Sirius Vila Bastos",
            "status": "RELEASE",
            "purpose": "HOME",
            "ri_number": "123321",
            "addressId": "666942b7-a559-4635-825d-25c505c7074c",
            "address": {
                "id": "666942b7-a559-4635-825d-25c505c7074c",
                "district": "Vila Bastos",
                "city": "Santo André",
                "street": "Rua Doutor Messuti",
                "state": "SP",
                "number": "339",
                "cep": "60000000"
            }
        }
    ]
}
```

<h3 id="get-auth-detail">GET /enterprise/:id</h3>

**RESPONSE**
```json
{
    "enterprise": {
        "id": "5dfa13e4-ca45-4998-b2fb-8b893afca252",
        "name": "Sirius Vila Bastos",
        "status": "RELEASE",
        "purpose": "commercial",
        "ri_number": "123321",
        "addressId": "ea4413e0-32e2-490a-8191-fdc279ca2f39",
        "address": {
            "id": "ea4413e0-32e2-490a-8191-fdc279ca2f39",
            "district": "Vila Bastos",
            "city": "Santo André",
            "street": "Rua Doutor Messuti",
            "state": "SP",
            "number": "339",
            "cep": "60000000"
        }
    }
}
```

<h3 id="post-auth-detail">POST /enterprise</h3>

**REQUEST**
```json
{
    "name": "Sirius Vila Bastos",
    "status": "RELEASE",
    "purpose": "HOME",
    "ri_number": "123321",
    "address": {
        "district": "Vila Bastos",
        "city": "Santo André",
        "street": "Rua Doutor Messuti",
        "state": "SP",
        "number": "339",
        "cep": "60000000"
    }
}
```

**RESPONSE**
```json
{
    "message": "Enterprise created"
}
```

<h3 id="post-auth-detail">PUT /enterprise/:id</h3>

**REQUEST**
```json
{
    "name": "Sirius Vila Bastos",
    "status": "READY",
    "purpose": "HOME",
    "ri_number": "123321",
    "address": {
        "district": "Vila Bastos",
        "city": "Santo André",
        "street": "Rua Doutor Messuti",
        "state": "SP",
        "number": "339",
        "cep": "60000000"
    }
}
```

**RESPONSE**
```json
{
    "message": "Enterprise Updated"
}
```

<h3 id="get-auth-detail">DELETE /enterprise/:id</h3>

**RESPONSE**
```json
{
    "message": "Enterprise Deleted"
}
```

