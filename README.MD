# Curso Angular

**Esté conteúdo é voltado para o meu aprendizado com o Angular em sua versão 16+**

**aqui irei documentar todo o meu progresso dentro do framework, conceitos e praticas aprendidos.**

## 📅 15/05/2025

### O que irei aprender

- Conceitos de componente
- Como criar componentes
- Como declarar componentes em módulos
- Problemas na duplicação de componentes

### Observações

- Instalação do NVM e configuração de versões do NODE.
- Diferença entre o NgModule é o Standalone do Angular
  - A principal diferença é que o arquivo NgModule não existe no angular 19, o que possibilita a facilidade de importar e exportar componentes, pipes, diretivas. O que não era mais difícil anteriormente, pois, para modularizar melhor os componentes em versões anteriores do angular era criado um arquivo modules dentro da pasta componentes e era obrigatório importar e exportar os componentes/pipes/diretivas para que o Module principal da raiz conseguisse entender todos os arquivos necessários, o que deixava verboso e aumentava a curva de aprendizagem.

> Assistir o documentário sobre a origem do NODE.js [(8) Node.js: The Documentary | An origin story - YouTube](https://www.youtube.com/watch?v=LB8KwiiUGy0)

Código para iniciar um novo repositório no formato “NgModule”;

```jsx
ng new NOME_DO_PROJETO --no-standalone
```

- O Bootstrap é a propriedade que diz a aplicação qual componentes são inicializados. Por padrão o bootstrap recebe somente 1 componente que seria o AppComponent, pode ser adicionado mais de um componente no bootstrap, mas por boas praticas e recomendado sempre iniciar somente 1 componente e de preferencia que seja o AppComponent.

## 📅 16/05/2025

- Como criar componentes -Filhos
- Como referenciar componentes de outros módulos (externos)
- Como utilizar a interpolação para acessar as propriedades da classe do componente
- Estratégias de estilização de componente
- Configuração de Inline Template e Inline CSS
  - : ng—deep
  - : host
- View Encapsulation
  - None
  - Emulated
  - ShadowDOM
