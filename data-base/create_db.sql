-- Creating database in postgresql

CREATE DATABASE IF NOT EXIST db_name
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

sql

CREATE TABLE IF NOT EXIST users (
    id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
    username character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    hashed_password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT usuario_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXIST folders (
    id integer NOT NULL DEFAULT nextval('folder_id_seq'::regclass),
    folder_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    discription character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT pasta_pkey PRIMARY KEY (id),
);

CREATE TABLE IF NOT EXIST parent_folders (
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

CREATE TABLE IF NOT EXIST decks (
    id integer NOT NULL DEFAULT nextval('decks_id_seq'::regclass),
    deck_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    rating integer NOT NULL,
    category character varying(255) COLLATE pg_catalog."default" NOT NULL, -- Add a table for category in the future
    discription character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT deck_pkey PRIMARY KEY (id),
);

CREATE TABLE IF NOT EXIST cards (
    id integer NOT NULL DEFAULT nextval('cards_id_seq'::regclass),
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

CREATE TABLE IF NOT EXIST folder_deck(
    id_folder integer NOT NULL,
    id_deck integer NOT NULL,
    CONSTRAINT folder_deck_pkey PRIMARY KEY (id_folder, id_deck),
    CONSTRAINT folder_deck_id_deck_fkey FOREIGN KEY (id_deck)
        REFERENCES decks (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT folder_deck_id_folder_fkey FOREIGN KEY (id_folder)
        REFERENCES folders (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE IF NOT EXIST reviews(
    id integer NOT NULL DEFAULT nextval('reviews_id_seq'::regclass),
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


CREATE TABLE IF NOT EXIST user_folders(
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

CREATE TABLE IF NOT EXIST decks_history(
    id_user integer NOT NULL,
    id_deck integer NOT NULL,
    time_date timestamp without time zone NOT NULL,
    position integer NOT NULL,
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

CREATE TABLE IF NOT EXIST cards_history(
    id_user integer NOT NULL,
    id_card integer NOT NULL,
    time_date timestamp without time zone NOT NULL,
    position integer NOT NULL,
    CONSTRAINT card_history_pkey PRIMARY KEY (id_user, id_card),
    CONSTRAINT card_history_id_card_fkey FOREIGN KEY (id_card)
        REFERENCES cards (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT card_history_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE IF NOT EXIST communities(
    id integer NOT NULL DEFAULT nextval('communities_id_seq'::regclass),
    community_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    discription character varying(255) COLLATE pg_catalog."default" NOT NULL,
    date_creation timestamp without time zone NOT NULL,
    user_count integer NOT NULL,
    card_count integer NOT NULL,
    CONSTRAINT community_pkey PRIMARY KEY (id),
);

CREATE TABLE IF NOT EXIST community_users(
    id_user integer NOT NULL,
    id_community integer NOT NULL,
    CONSTRAINT community_user_pkey PRIMARY KEY (id_user, id_community),
    CONSTRAINT community_user_id_community_fkey FOREIGN KEY (id_community)
        REFERENCES communities (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT community_user_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE IF NOT EXIST community_folders(
    id_community integer NOT NULL,
    id_folder integer NOT NULL,
    CONSTRAINT community_folder_pkey PRIMARY KEY (id_community, id_folder),
    CONSTRAINT community_folder_id_community_fkey FOREIGN KEY (id_community)
        REFERENCES communities (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT community_folder_id_folder_fkey FOREIGN KEY (id_folder)
        REFERENCES folders (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE IF NOT EXIST ranks(
    id integer NOT NULL DEFAULT nextval('ranks_id_seq'::regclass),
    id_community integer NOT NULL,
    rank_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT rank_pkey PRIMARY KEY (id),
    CONSTRAINT rank_id_community_fkey FOREIGN KEY (id_community)
        REFERENCES communities (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE IF NOT EXIST user_ranks(
    id_user integer NOT NULL,
    id_rank integer NOT NULL,
    position integer NOT NULL,
    CONSTRAINT user_rank_pkey PRIMARY KEY (id_user, id_rank),
    CONSTRAINT user_rank_id_rank_fkey FOREIGN KEY (id_rank)
        REFERENCES ranks (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_rank_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE IF NOT EXIST user_notifications(
    id integer NOT NULL DEFAULT nextval('notifications_id_seq'::regclass),
    id_user integer NOT NULL,
    notification_text character varying(255) COLLATE pg_catalog."default" NOT NULL,
    time_date timestamp without time zone NOT NULL,
    CONSTRAINT notification_pkey PRIMARY KEY (id),
    CONSTRAINT notification_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE IF NOT EXIST users_acess_logs(
    id integer NOT NULL DEFAULT nextval('users_acess_logs_id_seq'::regclass),
    id_user integer NOT NULL,
    time_date timestamp without time zone NOT NULL,
    CONSTRAINT acess_log_pkey PRIMARY KEY (id),
    CONSTRAINT acess_log_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE IF NOT EXIST communities_acess_logs(
    id integer NOT NULL DEFAULT nextval('communities_acess_logs_id_seq'::regclass),
    id_community integer NOT NULL,
    id_user integer NOT NULL,
    time_date timestamp without time zone NOT NULL,
    CONSTRAINT acess_log_community_pkey PRIMARY KEY (id),
    CONSTRAINT acess_log_community_id_community_fkey FOREIGN KEY (id_community)
        REFERENCES communities (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT acess_log_community_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE IF NOT EXIST edits_logs_communities(
    id integer NOT NULL DEFAULT nextval('edits_logs_communities_id_seq'::regclass),
    id_community integer NOT NULL,
    id_user integer NOT NULL,
    time_date timestamp without time zone NOT NULL,
    CONSTRAINT edit_log_community_pkey PRIMARY KEY (id),
    CONSTRAINT edit_log_community_id_community_fkey FOREIGN KEY (id_community)
        REFERENCES communities (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT edit_log_community_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE IF NOT EXIST edits_logs_decks(
    id integer NOT NULL DEFAULT nextval('edits_logs_decks_id_seq'::regclass),
    id_deck integer NOT NULL,
    id_user integer NOT NULL,
    time_date timestamp without time zone NOT NULL,
    CONSTRAINT edit_log_deck_pkey PRIMARY KEY (id),
    CONSTRAINT edit_log_deck_id_deck_fkey FOREIGN KEY (id_deck)
        REFERENCES decks (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT edit_log_deck_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE IF NOT EXIST edits_logs_cards(
    id integer NOT NULL DEFAULT nextval('edits_logs_cards_id_seq'::regclass),
    id_card integer NOT NULL,
    id_user integer NOT NULL,
    time_date timestamp without time zone NOT NULL,
    CONSTRAINT edit_log_card_pkey PRIMARY KEY (id),
    CONSTRAINT edit_log_card_id_card_fkey FOREIGN KEY (id_card)
        REFERENCES cards (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT edit_log_card_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);


/* 
=================================================================================================

    Tables for future updates

    - user_friends
    - user_settings
    - user_decks?

CREATE TABLE [IF NOT EXIST] user_friends(
    id_user integer NOT NULL,
    id_friend integer NOT NULL,
    CONSTRAINT user_friend_pkey PRIMARY KEY (id_user, id_friend),
    CONSTRAINT user_friend_id_friend_fkey FOREIGN KEY (id_friend)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_friend_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
); 

CREATE TABLE [IF NOT EXIST] user_settings(
    id integer NOT NULL DEFAULT nextval('configuracao_id_seq'::regclass),
    id_user integer NOT NULL,
    language character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_setting_pkey PRIMARY KEY (id),
    CONSTRAINT user_setting_id_user_fkey FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
); 

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