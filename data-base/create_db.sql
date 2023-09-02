-- Creating database in postgresql

CREATE DATABASE db_name
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

sql

CREATE TABLE [IF NOT EXIST] users (
    id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
    username character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    hashed_password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT usuario_pkey PRIMARY KEY (id)
);

CREATE TABLE [IF NOT EXIST] folders (
    id integer NOT NULL DEFAULT nextval('folder_id_seq'::regclass),
    folder_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    discription character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT pasta_pkey PRIMARY KEY (id),
);

CREATE TABLE [IF NOT EXIST] parent_folders (
    id_folder integer NOT NULL,
    id_parent_folder integer NOT NULL,
    CONSTRAINT parent_folder_pkey PRIMARY KEY (id_folder, id_parent_folder),
    CONSTRAINT parent_folder_id_folder_fkey FOREIGN KEY (id_folder)
        REFERENCES pasta (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT parent_folder_id_parent_folder_fkey FOREIGN KEY (id_parent_folder)
        REFERENCES pasta (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE [IF NOT EXIST] decks (
    id integer NOT NULL DEFAULT nextval('baralho_id_seq'::regclass),
    deck_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    rating integer NOT NULL,
    category character varying(255) COLLATE pg_catalog."default" NOT NULL, -- Add a table for category in the future
    discription character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT deck_pkey PRIMARY KEY (id),
);

CREATE TABLE [IF NOT EXIST] cards (
    id integer NOT NULL DEFAULT nextval('carta_id_seq'::regclass),
    question character varying(255) COLLATE pg_catalog."default" NOT NULL,
    answer character varying(255) COLLATE pg_catalog."default" NOT NULL,
    rating integer NOT NULL,
    dificulty integer NOT NULL,
    id_deck integer NOT NULL,
    CONSTRAINT card_pkey PRIMARY KEY (id),
    CONSTRAINT card_id_deck_fkey FOREIGN KEY (id_deck)
        REFERENCES decks (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE [IF NOT EXIST] reviews(
    id integer NOT NULL DEFAULT nextval('revisao_id_seq'::regclass),
    id_card integer NOT NULL,
    id_user integer NOT NULL,
    time_date timestamp without time zone NOT NULL,
    rating integer NOT NULL,
    comment character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT review_pkey PRIMARY KEY (id),
    CONSTRAINT review_id_card_fkey FOREIGN KEY (id_card)
        REFERENCES cards (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT review_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

/*
CREATE TABLE [IF NOT EXIST] user_decks(
    id_user integer NOT NULL,
    id_deck integer NOT NULL,
    CONSTRAINT user_deck_pkey PRIMARY KEY (id_user, id_deck),
    CONSTRAINT user_deck_id_deck_fkey FOREIGN KEY (id_deck)
        REFERENCES decks (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_deck_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);
*/

CREATE TABLE [IF NOT EXIST] user_folders(
    id_user integer NOT NULL,
    id_folder integer NOT NULL,
    CONSTRAINT user_folder_pkey PRIMARY KEY (id_user, id_folder),
    CONSTRAINT user_folder_id_folder_fkey FOREIGN KEY (id_folder)
        REFERENCES folders (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_folder_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE [IF NOT EXIST] decks_history(
    id_user integer NOT NULL,
    id_deck integer NOT NULL,
    time_date timestamp without time zone NOT NULL,

    CONSTRAINT deck_history_pkey PRIMARY KEY (id_user, id_deck),
    CONSTRAINT deck_history_id_deck_fkey FOREIGN KEY (id_deck)
        REFERENCES decks (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT deck_history_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);
