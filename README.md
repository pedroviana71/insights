# Insight em React

Feito uma aplicativo que consome dados mockados. Foi seguido
o Sketch disponibilizado e criada funções como adicionar novos
insights, filtras os insights existentes por tag ou descrição e
carregar mais insights.

Features implementadas:

- É mostrado 3 insights quando carrega a home
- O usuário pode clicar para carregar mais insights
- Ao deletar a ultima letra no "pesquisar", todos os dados são mostrados novamente.
- O botao fica desativado se nao existir texto no insight a ser criado

Decisões sobre o projeto:

- Como não tinha no Sketch a regra para separar novas categorias quando criando um insight, decidi por não criar uma "div" em volta da palavra com a cor rosa
- Decidi usar css por ser um projeto de tamanho pequeno
- Também decidi não usar Redux por ser um projeto pequeno pois consegui lidar com os estados de forma controlada
- Criei um componente Home para facilitar o controle de estados entre os componentes
- Responsividade para telas de tamanhos diferentes
- Utilizado o ES6

## Instalação

Se voce utilizar npm:

```bash
  npm install
  npm start
```

ou se voce utilizar yarn:

```bash
  yarn
  yarn start
```

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm test
```

ou

```bash
  yarn test
```

## Pacotes utilizados

- Clsx (para usar css condicionalmente)

## Screenshots

- Página principal:
  ![image](https://user-images.githubusercontent.com/86496233/196432103-1cd19431-592c-4bb2-8f34-7137aba3c2ed.png)

- Página de adicionar insight
  ![image](https://user-images.githubusercontent.com/86496233/196432322-fabf40a1-dd2a-4eb6-878d-37061ee92db4.png)
