<div align="center">

# 🛒 Cadastro de Produtos — Spring Boot API

### API REST para Cadastro, Consulta e Gerenciamento de Produtos

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java Logo" width="80"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Logo" width="80"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="Database Logo" width="80"/>

[![Java](https://img.shields.io/badge/Java-25-ED8B00?style=for-the-badge&logo=java&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![JPA](https://img.shields.io/badge/JPA-Hibernate-blue?style=for-the-badge)](https://hibernate.org/)
[![H2](https://img.shields.io/badge/H2-Database-lightgrey?style=for-the-badge)](https://www.h2database.com/)

</div>

---

## 📋 Sobre o Projeto

API REST desenvolvida em **Spring Boot** para realizar o **cadastro e gerenciamento de produtos**, utilizando:

- **JPA / Hibernate** para mapeamento das entidades
- **Banco de dados H2 em memória** para testes e desenvolvimento
- Arquitetura em camadas (**Controller, Service e Repository**)

> 🎯 **Ideal para:** Estudantes iniciantes em Spring Boot que já conhecem **POO** e desejam aprender **API REST + Banco de Dados + JPA**.

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|--------|------------|
| ➕ Cadastrar Produto | Cria um novo produto |
| 📄 Listar Produtos | Retorna todos os produtos |
| 🔍 Buscar por ID | Busca produto específico |
| 💲 Buscar por Preço | Produtos acima de determinado valor |
| 📦 Buscar por Quantidade | Produtos com estoque acima de X |
| ✏️ Atualizar Produto | Edita dados do produto |
| 🗑️ Excluir Produto | Remove produto do banco |

---

## 🏗️ Arquitetura do Projeto

O projeto segue o padrão:

Controller → Service → Repository → Banco (H2)


### 📌 Responsabilidades

- **Controller**: recebe requisições HTTP (Postman / Front-end)
- **Service**: contém regras de negócio
- **Repository**: comunicação com o banco via JPA
- **Entity (Model)**: representa a tabela no banco

---

## 🚀 Como Executar

### ✅ Pré-requisitos

- Java JDK 17+ (projeto usando Java 25)
- Maven
- IDE (IntelliJ, VS Code ou Eclipse)

---

### ▶ Executando o Projeto

```bash
# clonar o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# entrar na pasta
cd Cadastro

# rodar a aplicação
mvn spring-boot:run
Ou execute diretamente pela IDE.

A API ficará disponível em:

http://localhost:8080
🗄️ Banco de Dados H2
O banco utilizado é o H2 em memória, criado automaticamente ao iniciar a aplicação.

🔗 Acessar Console H2
http://localhost:8080/h2-console
Configuração:

JDBC URL: jdbc:h2:mem:produtosdb

User: sa

Password: (vazio)

🔥 Endpoints Principais
➕ Criar Produto
POST /produtos

{
  "nome": "Mouse",
  "preco": 120,
  "quantidade": 10
}
📄 Listar Produtos
GET /produtos

🔍 Buscar por ID
GET /produtos/{id}

💲 Buscar por Preço Maior que X
GET /produtos/preco-maior?valor=500

📦 Buscar por Quantidade Maior que X
GET /produtos/quantidade-maior?qtd=5

🗑️ Excluir Produto
DELETE /produtos/{id}

🧠 Conceitos Aplicados
☕ Java / POO
Classes

Encapsulamento

Construtores

DTO implícito via Entity

🌱 Spring Boot
Injeção de dependência

Controllers REST

Configuração automática

🗄️ JPA / Hibernate
@Entity

@Id e @GeneratedValue

Repositories

Queries por nome de método

🌐 API REST
HTTP Methods (GET, POST, PUT, DELETE)

JSON

Postman para testes

⚠️ Limitações (Didáticas)
❌ Banco em memória (dados se perdem ao reiniciar)
❌ Sem autenticação
❌ Sem front-end integrado

Projeto focado em aprendizado de backend com Spring Boot.

📝 Melhorias Futuras

- Funcionalidades
- Categorias de produtos
- Paginação
- Ordenação
- Upload de imagem do produto
- Técnicas
- Migrar H2 → MySQL ou PostgreSQL
- Criar DTOs
- Validações avançadas
- Tratamento global de exceções
- Documentação com Swagger

👨‍💻 Autor
Projeto desenvolvido por José Fernando
Bootcamp Java 
