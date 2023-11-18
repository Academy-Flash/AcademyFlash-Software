This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Next.js com Node comandos no ambiente de desenvolvimento
**Configurando ambiente de desenvolvimento pela primeira vez** 
```
$ npm i npx -g             => Caso no npm não reconheça o comando npx  
$ npx create-next-app@latest nextjs-blog  
$ cd nextjs-blog  
$ npm run dev  
```
**Comandos sempre usados**  
```
$ crtl + c        => Encerra o servidor  
$ npm run dev     => Inicia o servidor
``` 

## Comandos git
**Sempre usados e mais essenciais**  
```
$ git init  
$ git status               => Verifica o status dos arquivos  
$ git add .                 => Adiciona todos os arquivos para o commit  
$ git commit -m "commit description"  
$ git push -u origin main      => Envia as alterações do repositório local para o remoto  
$ git pull origin main         => Puxa as alterações do repositório remoto para o local  
```
**- Comandos úteis** 
```
$ git log --oneline            (para ver todos os commits feitos em uma branch com o número de identificação de cada um)
$ git reset                    => (reverte o git add)
```
**Interações com o Github**  
```
$ git clone <link> <pasta-meu-projeto-clone>  
$ git pull link branch
$ git push -u origin main
$ git clone -branch new_feature <repositorio>
```
**Cadastro**    
```
$ git config --global user.name "fulanodetal"
$ git config user.name                                                     (ver o usuário cadastrado)
$ git config --global user.email "fulano1124@gmail.com"
$ git config user.email                                                    (ver o email cadastrado)
```
**Branches**  
```
$ git branch teste            (criar nova branch, neste caso chamado teste)
$ git checkout teste          (mudar para a branch teste)
$ git switch dev
$ git diff                    (diferenças nos arquivos alterados nas diferentes branches)
```
**Pull Request**  
```

```

## Tailwind CSS/Prisma/Utils 
**Tailwind**  
[TailWind Documentation](https://tailwindcss.com/docs/guides/nextjs)
```
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```
**Utils (Libraries downloaded)**  
```
$ npm install react-icons --save
```
**Prisma**  
[Prisma Documentation](https://www.prisma.io/docs/getting-started/quickstart)
```
$ npm install typescript ts-node @types/node --save-dev
$ npm install prisma --save-dev
$ npm i @prisma/client
$ npx prisma init
$ npx prisma migrate dev --name init
$ npx prisma studio
```
