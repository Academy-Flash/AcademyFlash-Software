#TODO: Decidir se usaremos mesmo o Strapi
#TODO: Decidir se usaremos mesmo o Docker

# AcademyFlash-Software

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
$ git diff                    (diferenças nos arquivos alterados nas diferentes branches)
```

## Docker  
```
$ docker images
$ docker start <container ID>       => Inicia um container
$ docker stop <container ID>        => Para um container
$ docker stop $(docker ps -a -q)    => Para todos os containers
$ docker ps -a                      => Lista todos os containers rodando
$ docker run -i -t ubuntu           => Exemplo de execução Ubuntu
$ docker pause <ID container>       => Pausa a execução
$ docker unpause <ID container>     => Despausa a execução
$ docker image ls                   => Lista as imagens instaladas
$ docker pull postgres

```
**Docker Compose**  
```
$ docker-compose up       => Sobe os containers, deve ser executado dentro da pasta que contém o arquivo .yml
$ docker-compose up -d    => Sobe os containers em background (terminal limpo)
$ docker-compose down     => Para os containers
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
$ npm install @prisma/client
$ npx prisma init
$ npx prisma migrate dev --name init
$ npx prisma studio
```



