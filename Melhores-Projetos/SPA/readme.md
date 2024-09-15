# SPA com Requisições AJAX

Este projeto é uma aplicação de página única (SPA - Single Page Application) com requisições AJAX. O desenvolvimento foi feito utilizando HTML, CSS, SCSS, JavaScript e Gulp para automação de tarefas. O projeto foi criado durante o curso **Web Moderno Completo com JavaScript**, ministrado pelo professor **Leonardo Moura Leitão** e oferecido pela **Cod3r**.

## Funcionalidades

- Navegação entre diferentes páginas dentro de uma única aplicação (SPA).
- Requisições AJAX para carregar conteúdo dinamicamente.
- Estrutura de layout com HTML e CSS, utilizando SCSS.
- Automação de tarefas de build e desenvolvimento utilizando Gulp.
- Servidor local com livereload para desenvolvimento ágil.

## Tecnologias Utilizadas

- **HTML**
- **CSS** (pré-processado com SCSS)
- **JavaScript**
- **Gulp**: utilizado para automatizar tarefas como build de arquivos, monitoramento de mudanças e inicialização de um servidor local.

## Estrutura de Arquivos

- `src/`: Diretório de código-fonte do projeto.
  - `assets/`: Contém arquivos estáticos como imagens, CSS e JavaScript.
  - `paginas/`: Contém os arquivos HTML que são carregados dinamicamente via AJAX.
- `build/`: Diretório gerado após a execução do Gulp, contendo os arquivos prontos para produção.
- `gulpTasks/`: Contém as tarefas do Gulp para processamento de CSS, JavaScript, HTML, etc.

## Como Executar o Projeto

1. Clone o repositório:
```bash
   git clone https://github.com/GuilhermeDSD19/Anotacoes-Estudos.git
```

2. Navegue até o diretório do projeto:
```bash
    cd Anotacoes-Estudos/frontend-mentor/SPA
``` 

3. Instale as dependências:
```bash
    npm install
``` 

4. Execute o projeto em ambiente de desenvolvimento:
```bash
    npm start
``` 
Observação: Isso iniciará um servidor local com live-reload na porta 8080.

4. Para gerar os arquivos prontos para produção:
```bash
    npm run build
``` 
## Créditos

Este projeto foi desenvolvido como parte do curso [Web Moderno Completo com JavaScript](https://www.udemy.com/course/curso-web/) da [Cod3r](https://www.udemy.com/user/cod3r-3/), sob a orientação do professor [Leonardo Moura Leitão](https://www.udemy.com/user/leonardomouraleitao/).

---

Desenvolvido com 💙 por [Guilherme Duarte](https://www.linkedin.com/in/guilhermedsd19/).