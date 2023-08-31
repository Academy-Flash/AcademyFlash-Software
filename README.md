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


