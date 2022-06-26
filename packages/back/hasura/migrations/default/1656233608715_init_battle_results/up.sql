


CREATE TABLE "public"."results" ("result_id" uuid NOT NULL DEFAULT gen_random_uuid(), "isWin" boolean NOT NULL, "user_leader" text NOT NULL, "user_deck" text, "opponent_leader" text NOT NULL, "opponent_deck" text, "end_turn" integer, "format" text NOT NULL, "type" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("result_id") );COMMENT ON TABLE "public"."results" IS E'戦績を記録するテーブル';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

alter table "public"."results" rename to "battle_results";

alter table "public"."battle_results"
  add constraint "battle_results_user_leader_fkey"
  foreign key ("user_leader")
  references "public"."leaders"
  ("leader_en") on update restrict on delete restrict;

alter table "public"."battle_results"
  add constraint "battle_results_opponent_leader_fkey"
  foreign key ("opponent_leader")
  references "public"."leaders"
  ("leader_en") on update restrict on delete restrict;

alter table "public"."battle_results"
  add constraint "battle_results_type_fkey"
  foreign key ("type")
  references "public"."battle_types"
  ("type_en") on update restrict on delete restrict;

alter table "public"."battle_results"
  add constraint "battle_results_format_fkey"
  foreign key ("format")
  references "public"."formats"
  ("format_en") on update restrict on delete restrict;

alter table "public"."battle_results" rename column "isWin" to "is_win";
