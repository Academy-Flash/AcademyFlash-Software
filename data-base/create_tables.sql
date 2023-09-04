
CREATE TABLE IF NOT EXISTS users (
    id serial NOT NULL 
    username character varying(255),
    email character varying(255),
    hashed_password character varying(255),
    CONSTRAINT usuario_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS folders (
    id serial NOT NULL 
    folder_name character varying(255),
    description character varying(255),
    CONSTRAINT pasta_pkey PRIMARY KEY (id),
);

CREATE TABLE IF NOT EXISTS parent_folders (
    id_folder integer NOT NULL,
    id_parent_folder integer NOT NULL,
    CONSTRAINT parent_folder_pkey PRIMARY KEY (id_folder, id_parent_folder),
    CONSTRAINT parent_folder_id_folder_fkey FOREIGN KEY (id_folder)
        REFERENCES folders (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT parent_folder_id_parent_folder_fkey FOREIGN KEY (id_parent_folder)
        REFERENCES folders (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS decks (
    id serial NOT NULL,
    deck_name character varying(255),
    rating integer NOT NULL,
    category character varying(255), -- Add a table for category in the future
    description character varying(255),
    CONSTRAINT deck_pkey PRIMARY KEY (id),
);

CREATE TABLE IF NOT EXISTS cards (
    id serial NOT NULL,
    question character varying(255),
    answer character varying(255),
    rating integer NOT NULL,
    difficulty integer NOT NULL,
    id_deck integer NOT NULL,
    CONSTRAINT card_pkey PRIMARY KEY (id),
    CONSTRAINT card_id_deck_fkey FOREIGN KEY (id_deck)
        REFERENCES decks (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE IF NOT EXISTS folder_deck(
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

CREATE TABLE IF NOT EXISTS reviews(
    id serial NOT NULL,
    id_card integer NOT NULL,
    id_user integer NOT NULL,
    time_date timestamp without time zone NOT NULL,
    rating integer NOT NULL,
    comment character varying(255),
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


CREATE TABLE IF NOT EXISTS user_folders(
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

CREATE TABLE IF NOT EXISTS decks_history(
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

CREATE TABLE IF NOT EXISTS cards_history(
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

CREATE TABLE IF NOT EXISTS communities(
    id serial NOT NULL,
    community_name character varying(255),
    description character varying(255),
    date_creation timestamp without time zone NOT NULL,
    user_count integer NOT NULL,
    card_count integer NOT NULL,
    CONSTRAINT community_pkey PRIMARY KEY (id),
);

CREATE TABLE IF NOT EXISTS community_users(
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

CREATE TABLE IF NOT EXISTS community_folders(
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

CREATE TABLE IF NOT EXISTS ranks(
    id serial NOT NULL,
    id_community integer NOT NULL,
    rank_name character varying(255),
    CONSTRAINT rank_pkey PRIMARY KEY (id),
    CONSTRAINT rank_id_community_fkey FOREIGN KEY (id_community)
        REFERENCES communities (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
);

CREATE TABLE IF NOT EXISTS user_ranks(
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

    CREATE TABLE IF NOT EXISTS user_notifications(
        id serial NOT NULL,
        id_user integer NOT NULL,
        notification_text character varying(255) NOT NULL,
        time_date timestamp without time zone NOT NULL,
        CONSTRAINT notification_pkey PRIMARY KEY (id),
        CONSTRAINT notification_id_user_fkey FOREIGN KEY (id_user)
            REFERENCES users (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION,
    );

    CREATE TABLE IF NOT EXISTS users_acess_logs(
        id serial NOT NULL,
        id_user integer NOT NULL,
        time_date timestamp without time zone NOT NULL,
        CONSTRAINT acess_log_pkey PRIMARY KEY (id),
        CONSTRAINT acess_log_id_user_fkey FOREIGN KEY (id_user)
            REFERENCES users (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION,
    );

    CREATE TABLE IF NOT EXISTS communities_acess_logs(
        id serial NOT NULL,
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

    CREATE TABLE IF NOT EXISTS edits_logs_communities(
        id serial NOT NULL,
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

    CREATE TABLE IF NOT EXISTS edits_logs_decks(
        id serial NOT NULL,
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

    CREATE TABLE IF NOT EXISTS edits_logs_cards(
        id serial NOT NULL,
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
        id integer NOT NULL DEFAULT nextval('configuracao_id_seq'),
        id_user integer NOT NULL,
        language character varying(255) NOT NULL,
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

