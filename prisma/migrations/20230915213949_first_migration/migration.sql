-- CreateTable
CREATE TABLE "cards" (
    "id" SERIAL NOT NULL,
    "question" VARCHAR(255),
    "answer" VARCHAR(255),
    "rating" INTEGER NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "id_deck" INTEGER NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards_history" (
    "id_user" INTEGER NOT NULL,
    "id_card" INTEGER NOT NULL,
    "time_date" TIMESTAMP(6) NOT NULL,
    "position" INTEGER NOT NULL,

    CONSTRAINT "card_history_pkey" PRIMARY KEY ("id_user","id_card")
);

-- CreateTable
CREATE TABLE "communities" (
    "id" SERIAL NOT NULL,
    "community_name" VARCHAR(255),
    "description" VARCHAR(255),
    "date_creation" TIMESTAMP(6) NOT NULL,
    "user_count" INTEGER NOT NULL,
    "card_count" INTEGER NOT NULL,

    CONSTRAINT "community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "communities_acess_logs" (
    "id" SERIAL NOT NULL,
    "id_community" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "time_date" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "acess_log_community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "community_folders" (
    "id_community" INTEGER NOT NULL,
    "id_folder" INTEGER NOT NULL,

    CONSTRAINT "community_folder_pkey" PRIMARY KEY ("id_community","id_folder")
);

-- CreateTable
CREATE TABLE "community_users" (
    "id_user" INTEGER NOT NULL,
    "id_community" INTEGER NOT NULL,

    CONSTRAINT "community_user_pkey" PRIMARY KEY ("id_user","id_community")
);

-- CreateTable
CREATE TABLE "decks" (
    "id" SERIAL NOT NULL,
    "deck_name" VARCHAR(255),
    "rating" INTEGER NOT NULL,
    "category" VARCHAR(255),
    "description" VARCHAR(255),

    CONSTRAINT "deck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "decks_history" (
    "id_user" INTEGER NOT NULL,
    "id_deck" INTEGER NOT NULL,
    "time_date" TIMESTAMP(6) NOT NULL,
    "position" INTEGER NOT NULL,

    CONSTRAINT "deck_history_pkey" PRIMARY KEY ("id_user","id_deck")
);

-- CreateTable
CREATE TABLE "edits_logs_cards" (
    "id" SERIAL NOT NULL,
    "id_card" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "time_date" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "edit_log_card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "edits_logs_communities" (
    "id" SERIAL NOT NULL,
    "id_community" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "time_date" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "edit_log_community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "edits_logs_decks" (
    "id" SERIAL NOT NULL,
    "id_deck" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "time_date" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "edit_log_deck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "folder_deck" (
    "id_folder" INTEGER NOT NULL,
    "id_deck" INTEGER NOT NULL,

    CONSTRAINT "folder_deck_pkey" PRIMARY KEY ("id_folder","id_deck")
);

-- CreateTable
CREATE TABLE "folders" (
    "id" SERIAL NOT NULL,
    "folder_name" VARCHAR(255),
    "description" VARCHAR(255),

    CONSTRAINT "pasta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parent_folders" (
    "id_folder" INTEGER NOT NULL,
    "id_parent_folder" INTEGER NOT NULL,

    CONSTRAINT "parent_folder_pkey" PRIMARY KEY ("id_folder","id_parent_folder")
);

-- CreateTable
CREATE TABLE "ranks" (
    "id" SERIAL NOT NULL,
    "id_community" INTEGER NOT NULL,
    "rank_name" VARCHAR(255),

    CONSTRAINT "rank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "id_card" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "time_date" TIMESTAMP(6) NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" VARCHAR(255),

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_folders" (
    "id_user" INTEGER NOT NULL,
    "id_folder" INTEGER NOT NULL,

    CONSTRAINT "user_folder_pkey" PRIMARY KEY ("id_user","id_folder")
);

-- CreateTable
CREATE TABLE "user_notifications" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "notification_text" VARCHAR(255) NOT NULL,
    "time_date" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_ranks" (
    "id_user" INTEGER NOT NULL,
    "id_rank" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,

    CONSTRAINT "user_rank_pkey" PRIMARY KEY ("id_user","id_rank")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "email" VARCHAR(255),
    "hashed_password" VARCHAR(255),

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_acess_logs" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "time_date" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "acess_log_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "card_id_deck_fkey" FOREIGN KEY ("id_deck") REFERENCES "decks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cards_history" ADD CONSTRAINT "card_history_id_card_fkey" FOREIGN KEY ("id_card") REFERENCES "cards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cards_history" ADD CONSTRAINT "card_history_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "communities_acess_logs" ADD CONSTRAINT "acess_log_community_id_community_fkey" FOREIGN KEY ("id_community") REFERENCES "communities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "communities_acess_logs" ADD CONSTRAINT "acess_log_community_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "community_folders" ADD CONSTRAINT "community_folder_id_community_fkey" FOREIGN KEY ("id_community") REFERENCES "communities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "community_folders" ADD CONSTRAINT "community_folder_id_folder_fkey" FOREIGN KEY ("id_folder") REFERENCES "folders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "community_users" ADD CONSTRAINT "community_user_id_community_fkey" FOREIGN KEY ("id_community") REFERENCES "communities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "community_users" ADD CONSTRAINT "community_user_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "decks_history" ADD CONSTRAINT "deck_history_id_deck_fkey" FOREIGN KEY ("id_deck") REFERENCES "decks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "decks_history" ADD CONSTRAINT "deck_history_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "edits_logs_cards" ADD CONSTRAINT "edit_log_card_id_card_fkey" FOREIGN KEY ("id_card") REFERENCES "cards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "edits_logs_cards" ADD CONSTRAINT "edit_log_card_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "edits_logs_communities" ADD CONSTRAINT "edit_log_community_id_community_fkey" FOREIGN KEY ("id_community") REFERENCES "communities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "edits_logs_communities" ADD CONSTRAINT "edit_log_community_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "edits_logs_decks" ADD CONSTRAINT "edit_log_deck_id_deck_fkey" FOREIGN KEY ("id_deck") REFERENCES "decks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "edits_logs_decks" ADD CONSTRAINT "edit_log_deck_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "folder_deck" ADD CONSTRAINT "folder_deck_id_deck_fkey" FOREIGN KEY ("id_deck") REFERENCES "decks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "folder_deck" ADD CONSTRAINT "folder_deck_id_folder_fkey" FOREIGN KEY ("id_folder") REFERENCES "folders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "parent_folders" ADD CONSTRAINT "parent_folder_id_folder_fkey" FOREIGN KEY ("id_folder") REFERENCES "folders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "parent_folders" ADD CONSTRAINT "parent_folder_id_parent_folder_fkey" FOREIGN KEY ("id_parent_folder") REFERENCES "folders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ranks" ADD CONSTRAINT "rank_id_community_fkey" FOREIGN KEY ("id_community") REFERENCES "communities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "review_id_card_fkey" FOREIGN KEY ("id_card") REFERENCES "cards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "review_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_folders" ADD CONSTRAINT "user_folder_id_folder_fkey" FOREIGN KEY ("id_folder") REFERENCES "folders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_folders" ADD CONSTRAINT "user_folder_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_notifications" ADD CONSTRAINT "notification_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_ranks" ADD CONSTRAINT "user_rank_id_rank_fkey" FOREIGN KEY ("id_rank") REFERENCES "ranks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_ranks" ADD CONSTRAINT "user_rank_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users_acess_logs" ADD CONSTRAINT "acess_log_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
