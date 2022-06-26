
CREATE TABLE "public"."battle_types" ("type_en" text NOT NULL, "type_ja" text NOT NULL, PRIMARY KEY ("type_en") , UNIQUE ("type_ja"));COMMENT ON TABLE "public"."battle_types" IS E'バトルの種類、ランク、フリーなど';

INSERT INTO "public"."battle_types"("type_en", "type_ja") VALUES (E'ranked', E'ランクマッチ');

INSERT INTO "public"."battle_types"("type_en", "type_ja") VALUES (E'free', E'フリーマッチ');

INSERT INTO "public"."battle_types"("type_en", "type_ja") VALUES (E'room', E'ルームマッチ');
