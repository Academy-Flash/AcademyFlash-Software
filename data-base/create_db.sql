-- Criação de um database em postgresql

CREATE DATABASE db_name
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
```

### 2.2. Criando tabelas

```sql
-- Path: data-base/create_tables.sql
-- Criação de tabelas em postgresql

CREATE TABLE [IF NOT EXIST] usuario (
    id integer NOT NULL DEFAULT nextval('usuario_id_seq'::regclass),
    username character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT usuario_pkey PRIMARY KEY (id)
);

CREATE TABLE [IF NOT EXIST] folder (
    id integer NOT NULL DEFAULT nextval('pasta_id_seq'::regclass),
    nome character varying(255) COLLATE pg_catalog."default" NOT NULL,
    descricao character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT pasta_pkey PRIMARY KEY (id),
);

CREATE TABLE [IF NOT EXIST]  (
    id_pasta integer NOT NULL,
    id_pasta_pai integer NOT NULL,
    CONSTRAINT parent_folder_pkey PRIMARY KEY (id_pasta, id_pasta_pai),
    CONSTRAINT parent_folder_id_pasta_fkey FOREIGN KEY (id_pasta)
        REFERENCES pasta (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT parent_folder_id_pasta_pai_fkey FOREIGN KEY (id_pasta_pai)
        REFERENCES pasta (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);


CREATE TABLE BARALHO (
    id integer NOT NULL DEFAULT nextval('baralho_id_seq'::regclass),
    nome character varying(255) COLLATE pg_catalog."default" NOT NULL,
    descricao character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT baralho_pkey PRIMARY KEY (id),
);
