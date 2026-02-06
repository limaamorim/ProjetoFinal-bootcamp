<div align="center">

# 🛒 Gerenciador de Produtos

### Projeto Final - Bootcamp Java | API REST para Cadastro e Gerenciamento de Produtos

[![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=java&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.2-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![H2 Database](https://img.shields.io/badge/H2-Database-4479A1?style=for-the-badge&logo=h2&logoColor=white)](https://www.h2database.com/)
[![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)

[🌐 **Aplicação em Produção**](https://josefernando-b6adcrbwfyh3czff.canadacentral-01.azurewebsites.net/) | [📚 **Documentação Swagger**](https://josefernando-b6adcrbwfyh3czff.canadacentral-01.azurewebsites.net/swagger-ui/index.html)

</div>

---

## 📋 Sobre o Projeto

Este é o **projeto final do Bootcamp Java**, desenvolvido como uma API REST completa para cadastro e gerenciamento de produtos. A aplicação foi construída utilizando **Spring Boot** e está hospedada no **Azure App Service**, demonstrando conhecimentos em desenvolvimento backend, arquitetura de APIs e deploy em nuvem.

### 🎯 Objetivos do Projeto

- Implementar uma API REST completa seguindo boas práticas
- Aplicar conceitos de **JPA/Hibernate** para persistência de dados
- Utilizar **DTOs** para transferência de dados
- Implementar tratamento de exceções global
- Documentar a API com **Swagger/OpenAPI**
- Deploy da aplicação em produção (Azure)

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Java** | 17 | Linguagem de programação |
| **Spring Boot** | 3.2.2 | Framework Java para desenvolvimento |
| **Spring Data JPA** | - | Persistência de dados |
| **H2 Database** | - | Banco de dados em memória |
| **SpringDoc OpenAPI** | 2.5.0 | Documentação automática da API |
| **Maven** | - | Gerenciador de dependências |
| **Azure App Service** | - | Plataforma de hospedagem |

---

## ✨ Funcionalidades

- ✅ **Cadastrar Produto** - Criação de novos produtos com validação
- ✅ **Listar Produtos** - Consulta de todos os produtos cadastrados
- ✅ **Buscar por ID** - Busca específica de um produto
- ✅ **Atualizar Produto** - Edição de dados de produtos existentes
- ✅ **Excluir Produto** - Remoção de produtos do sistema
- ✅ **Interface Web** - Frontend simples para gerenciamento
- ✅ **Documentação Swagger** - API totalmente documentada

---

## 🏗️ Arquitetura do Projeto

O projeto segue o padrão de arquitetura em camadas:

```
Controller (REST) → Service (Regras de Negócio) → Repository (JPA) → Database (H2)
```

### 📁 Estrutura de Pastas

```
src/main/java/com/nando/Cadastro/
├── controller/          # Endpoints REST
│   └── ProdutoController.java
├── service/            # Lógica de negócio
│   ├── ProdutoService.java
│   └── ProdutoServiceImpl.java
├── repository/         # Acesso ao banco de dados
│   └── ProdutoRepository.java
├── model/              # Entidades JPA
│   └── Produto.java
├── dto/                # Data Transfer Objects
│   ├── ProdutoRequestDTO.java
│   └── ProdutoResponseDTO.java
├── mapper/             # Conversão entre entidades e DTOs
│   └── ProdutoMapper.java
└── exception/          # Tratamento de exceções
    ├── GlobalExceptionHandler.java
    ├── ProdutoNaoEncontrado.java
    └── ErrorResponse.java
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos

- **Java JDK 17** ou superior
- **Maven** 3.6+
- **IDE** (IntelliJ IDEA, Eclipse ou VS Code)

### Passos para Execução

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd projeto_Final
   ```

2. **Execute a aplicação**
   ```bash
   mvn spring-boot:run
   ```
   Ou execute diretamente pela IDE através da classe `CadastroApplication.java`

3. **Acesse a aplicação**
   - **Interface Web**: http://localhost:8080
   - **Swagger UI**: http://localhost:8080/swagger-ui/index.html
   - **API Base**: http://localhost:8080/produtos

---

## 📡 Endpoints da API

### Base URL
```
https://josefernando-b6adcrbwfyh3czff.canadacentral-01.azurewebsites.net/produtos
```

### Métodos Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/produtos` | Criar um novo produto |
| `GET` | `/produtos` | Listar todos os produtos |
| `GET` | `/produtos/{id}` | Buscar produto por ID |
| `PUT` | `/produtos/{id}` | Atualizar um produto |
| `DELETE` | `/produtos/{id}` | Excluir um produto |

### Exemplo de Requisição (POST)

```json
POST /produtos
Content-Type: application/json

{
  "nome": "Notebook Dell",
  "preco": 3500.00,
  "quantidade": 15
}
```

### Exemplo de Resposta

```json
{
  "id": 1,
  "nome": "Notebook Dell",
  "preco": 3500.00,
  "quantidade": 15
}
```

> 📚 **Documentação Completa**: Acesse o [Swagger UI](https://josefernando-b6adcrbwfyh3czff.canadacentral-01.azurewebsites.net/swagger-ui/index.html) para ver todos os endpoints detalhados com exemplos de requisição e resposta.

---

## 🗄️ Banco de Dados

O projeto utiliza **H2 Database** configurado para persistência em arquivo:

- **Tipo**: H2 File Database
- **Localização**: `/home/site/data/produtos-db` (produção)
- **Dialeto**: H2Dialect
- **DDL**: `update` (cria/atualiza tabelas automaticamente)

---

## 🧪 Testes

Execute os testes unitários com:

```bash
mvn test
```

---

## 📦 Build e Deploy

### Build do Projeto

```bash
mvn clean package
```

O arquivo JAR será gerado em: `target/app.jar`

### Deploy no Azure

O projeto está configurado para deploy automático no Azure App Service através do GitHub Actions (`.github/workflows/main_josefernando.yml`).

---

## 🎓 Conceitos Aplicados

### ☕ Java
- Programação Orientada a Objetos (POO)
- Encapsulamento
- Interfaces e Implementações
- Anotações

### 🌱 Spring Boot
- Injeção de Dependência
- Controllers REST
- Service Layer Pattern
- Auto-configuration

### 🗄️ JPA / Hibernate
- Mapeamento Objeto-Relacional (ORM)
- Entidades JPA
- Repositories
- Queries automáticas

### 🌐 API REST
- Métodos HTTP (GET, POST, PUT, DELETE)
- Status Codes apropriados
- JSON como formato de dados
- CORS configurado

### 🛡️ Boas Práticas
- DTOs para transferência de dados
- Tratamento global de exceções
- Validação de dados de entrada
- Separação de responsabilidades

---

## 📝 Melhorias Futuras

- [ ] Implementar autenticação e autorização (JWT)
- [ ] Adicionar paginação nas listagens
- [ ] Implementar busca e filtros avançados
- [ ] Adicionar categorias de produtos
- [ ] Upload de imagens dos produtos
- [ ] Migrar para PostgreSQL ou MySQL
- [ ] Implementar testes de integração
- [ ] Adicionar cache com Redis
- [ ] Implementar logs estruturados

---

## 👨‍💻 Autor

**José Fernando**

Projeto desenvolvido como trabalho final do **Bootcamp Java**.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

---

<div align="center">

**Desenvolvido durante o Bootcamp Java**

[⬆ Voltar ao topo](#-gerenciador-de-produtos)

</div>
