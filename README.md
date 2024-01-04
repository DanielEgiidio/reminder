
# Reminder
<img width="800" height="300" src="https://github.com/Yog9/SnapShot/assets/45204474/f404ec6e-ce2b-4c89-a25f-ce32bf007284"/>
 

------------


### Info
###### Entenda como uma aplicação de lembretes ou meta a se bater, onde você tem a possibilidade de criar quantas coleções quiser e dentro dessas coleções criar suas tasks a suas datas de expiraçã.

###### A aplicação em si é bem simples na usabilidade porém sua construção aborda não só as melhores práticas de clean code, como também as tecnologias mais recentes e usadas no mercado

https://github.com/DanielEgiidio/reminder/assets/45204474/03cd1953-59d5-471c-a465-d58c6ec67684


------------


### Tecnologias Usadas

- [NEXTJS](https://nextjs.org/): Versão 14 com a features mais recentes fazendo uso do novo recurso server components e server actions.
- [PRISMA](https://www.prisma.io/): Fazendo o banco de dados falar a mesma lingua da aplicação (Typescript)
- [SHADCN](https://ui.shadcn.com/): Uma coleção de componentes tailwind editaveis e reutilizáveis.
- [CLERK](https://clerk.com/): A aplicação conta com um controle de usuários por meio do Clerk, um Saas que facilita a implementação da autenticação.
- [REACT HOOK FORM](https://react-hook-form.com/): Foi necessário uma validação de formulários na aplicação e foi utilizado essa Lib, Ela possibilita um bom desempenho, flexíbilidade e validação, e é bem simples o seu uso, na validação em si foi utilizado o zod tanto nos formulários quando no database.
- [TYPESCRIPT](https://www.typescriptlang.org/docs/) 


### Como rodar o projeto

```bash
$ cd reminder
$ npm install 
$ npm run dev
```

######Obs: a aplicação está rodando localmente devido a estarmos utilizando o sqlLite, então sem você quiser reaproveitar os schemas, só modifique para um database na nuvem que utiliza Postegress que funcionará normalmente em deploy.
