<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ifbaianosi/watermonitor?color=%2304D361&style=flat">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ifbaianosi/watermonitor?style=flat">
  
  <a href="https://github.com/ifbaianosi/watermonitor/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ifbaianosi/watermonitor?style=flat">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=flat">
  
</p>

<h1 align="center">
    <img src="web/src/assets/logo.svg" />
    <br />
    <br />
    <br />
    <img alt="watermonitor" title="watermonitor" src="https://github.com/ifbaianosi/assets/blob/main/watermonitor/watermonitor-cover-notion.png" />
</h1>


<h4 align="center"> 
	🚧  Aplicação em construção! 🚧
</h4>

## 🏁 Tópicos

<p>
 👉<a href="#-sobre-o-projeto" style="text-decoration: none; "> Sobre</a> <br/>
👉<a href="#-funcionalidades" style="text-decoration: none; "> Funcionalidades</a> <br/>
<!-- 👉<a href="#-melhorias" style="text-decoration: none; "> Melhorias</a> <br/> -->
👉<a href="#-layout" style="text-decoration: none"> Layout</a> <br/>
<!-- 👉<a href="#-demonstracao" style="text-decoration: none"> Demonstração</a> <br/> -->
<!-- 👉<a href="#-como-executar-o-projeto" style="text-decoration: none"> Como executar</a> <br/> -->
👉<a href="#-tecnologias" style="text-decoration: none"> Tecnologias</a> <br/>
👉<a href="#-autor" style="text-decoration: none"> Autor</a> <br/>
👉<a href="#-user-content--licença" style="text-decoration: none"> Licença</a>

</p>

## 💻 Sobre o projeto

Watermonitor tem como objetivo auxiliar no monitoramento do nível da água dos reservatórios do IF Baiano campus Santa Inês. Trata-se de um MVP que inicialmente será utilizado pela equipe de vigilância para registrar diáriamente o controle dos registros, nível da água e leitura do hidrômetro.

O desenvolvimento deste projeto visa primeiramente resolver o problema de gestão dos registros de leitura dos reservatórios, originalmente feito em formulário em papel. Com o desenvolvimento da primeira versão pretende tornar mais eficiente o processo de registro dessas informações, deixando os dados centralizados e disponíveis em um ambiente de rede.

Quando em operação o Watermonitor pretende tornar público e acessível as informações geradas a partir da coleta diária de dados dos reservatórios. Podendo ser capaz de gerar indicadores que auxiliem os gestores a identificar possíveis disníveis no consumo de água no campus.

<!-- Então, confira o resultado no link abaixo:

<a align="center" href="https://jobscalc-glauber.vercel.app/">
    <img alt="app jobscalc" src="https://img.shields.io/static/v1?label=aplicação web&message=jobscalc&color=F1972C&style=flat&logo=vercel">
</a> -->

---

<a name="-funcionalidades"></a>

## ⚙️ Funcionalidades

- ### Leitura diária do hidrômetro
- ### Controle diário do nível da água

<!-- ---
<a name="-melhorias"></a>

## ⚙️ Melhorias
- [ ] Usar fakeAPI para remover dependência do projeto back-end em java disponível **[AQUI](https://github.com/glaubermatos/jobscalc-api)**.
- [ ] Mostrar um load de carregamento nas páginas enquanto o servidor não retorna os dados do backend
- [ ] Otimização de imagens substituindo todas as tags 'img' para o component Image do NextJS -->

---

## 🎨 Layout

Layout do projeto desenvolvido com a ferramenta **[Figma](https://www.figma.comy)**

### Página de controle diário do nível de água dos reservatórios
<img src="https://github.com/ifbaianosi/assets/blob/main/watermonitor/water-monitor-nova-leitura.jpg" width="800px" />

#### Página de leitura diária do hidrêmetro
<img src="https://github.com/ifbaianosi/assets/blob/main/watermonitor/leitura-diaria-hidrometro.jpg" width="800px"/>

<!-- ---

<a name="-demonstracao"></a>

## 🕹️ Demonstração

<a align="center" href="https://www.linkedin.com/posts/glaubermatos_desenvolvimentoweb-springboot-nextjs-activity-6905992105182015488-CfRu">
    <img alt="happy-web" src="https://img.shields.io/static/v1?label=post&message=jobscalc&color=F1972C&style=flat&logo=linkedin">
</a> -->

<!-- ---

## 🚀 Como executar o projeto

💡O Frontend precisa que o Backend esteja sendo executado para funcionar, que pode ser encontrado **[AQUI](https://github.com/glaubermatos/jobscalc-api)**.

💡Para integração com a autenticação é preciso configurar as variáveis de ambiente para o Next-Auth se conectar com a api do Github. 

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/en/docs/install).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/glaubermatos/jobscalc.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd jobscalc

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

# É necessário configurar as variáveis de ambiente

```


#### 🧭 Configure as variáveis de ambiente

Configure o github para permitir autenticação, crie uma OAuth App **[AQUI](https://github.com/settings/developers)**.

```bash

# Copie o arquivo .env.local.example para a raiz do seu projeto renomeando para .env.local (que será ignorado pelo Git):
$ cp .env.local.example .env.local

```

Adicione detalhes para um ou mais provedores (por exemplo, Google, Twitter, GitHub, Email etc.).

Para ver detalhes da implementação do Next-Auth **[AQUI](https://next-auth.js.org/getting-started/example)**.

Saiba mais sobre o [Next-Auth](https://nextjs.org/). -->


---

## 🛠 Tecnologias

O watermonitor está sendo desenvolvido utilizando uma arquitetura flexível em que o frontend e o backend podem ser desenvolvidos separadamente.

### **Font-end**
Web app desenvolvido em ReactJS com Typescript utilizando o conceito de interface declarativa com a biblioteca de componentes Chakra UI.

**Principais tecnologias**
- **[ViteJS](https://vitejs.dev/)**
- **[ReactJS](https://pt-br.reactjs.org/)**
- **[Typescript](https://www.typescriptlang.org/)**
- **[Axios](https://github.com/axios/axios)**
- **[Chakra UI](https://chakra-ui.com/)**

> Veja o arquivo [package.json](https://github.com/ifbaianosi/watermonitor/blob/main/web/package.json)

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Teste de API: **[Insomnia](https://insomnia.rest/)**
- Fontes: **[Poppins](https://fonts.google.com/specimen/Poppins)** | **[Open-Sans](https://fonts.google.com/specimen/Open+Sans)**

<br />

### **Backend**
Api rest desenvolvida em Java utilizando o spring framework

#### **Diagrama de classe**
<br />

<img src="https://github.com/ifbaianosi/assets/blob/main/watermonitor/watermonitor-class-diagram.JPG" width="800px"/>

<br />

**Principais tecnologias**
- **[Spring-boot 2.6.2](https://spring.io/projects/spring-boot)**
- **[Spring Data JPA](https://spring.io/projects/spring-data-jpa)**
- **[Java Persistence API (JPA)](https://www.ibm.com/docs/pt-br/was/8.5.5?topic=SSEQTP_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/cejb_persistence.html)**
- **[Maven](https://maven.apache.org/)**
- **[Bean Validation](https://beanvalidation.org/)**
- **[H2 DataBase](https://www.h2database.com/)** (durante o desenvolvimento)

> Veja o arquivo [pom.xml](https://github.com/glaubermatos/jobscalc-api/blob/main/backend/pom.xml)

<br />

#### **Utilitários**

- Editor: **[Spring Tools Suite 4](https://spring.io/tools)**
- Testes da API: **[Postman](https://www.postman.com/)**


---

<a name="-autor"></a>

## 🦸‍♂️ **Autores**

### Projeto desenvolvido pelo Núcleo de Gestão da Tecnologia da Informação (NGTI) campus Santa Inês

### **Contribuidores**
<p>
 <img src="https://avatars.githubusercontent.com/u/10993285?v=4" width="150px;" alt="glaubermatos"/>
 <br />
 <sub><strong>🌟 Glauber de Oliveira Matos 🌟</strong></sub>
</p>

[![Linkedin Badge](https://img.shields.io/badge/-linkedin-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/glaubermatos/)](https://www.linkedin.com/in/glaubermatos/)

<p>
 <img src="https://avatars.githubusercontent.com/u/10993069?v=4" width="150px;" alt="aijalon"/>
 <br />
 <sub><strong>🌟 Aijalon Brito Junior 🌟</strong></sub>
</p>

[![Linkedin Badge](https://img.shields.io/badge/-linkedin-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/aijalon-junior/)](https://www.linkedin.com/in/aijalon-junior/)

---
<a name="-user-content--licença"></a>

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
