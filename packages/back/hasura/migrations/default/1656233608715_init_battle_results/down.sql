

alter table "public"."battle_results" rename column "is_win" to "isWin";


alter table "public"."battle_results" drop constraint "battle_results_format_fkey";

alter table "public"."battle_results" drop constraint "battle_results_type_fkey";

alter table "public"."battle_results" drop constraint "battle_results_opponent_leader_fkey";

alter table "public"."battle_results" drop constraint "battle_results_user_leader_fkey";

alter table "public"."battle_results" rename to "results";

DROP TABLE "public"."results";
