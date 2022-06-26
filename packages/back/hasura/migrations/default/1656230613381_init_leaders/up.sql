


CREATE TABLE "public"."leaders" ("leader_en" text NOT NULL, "leader_ja" text NOT NULL, PRIMARY KEY ("leader_en") , UNIQUE ("leader_ja"));COMMENT ON TABLE "public"."leaders" IS E'リーダーの英語名、日本語名';

INSERT INTO "public"."leaders"("leader_en", "leader_ja") VALUES (E'forestcraft', E'エルフ');

INSERT INTO "public"."leaders"("leader_en", "leader_ja") VALUES (E'swordcraft', E'ロイヤル');

INSERT INTO "public"."leaders"("leader_en", "leader_ja") VALUES (E'runecraft', E'ウィッチ');

INSERT INTO "public"."leaders"("leader_en", "leader_ja") VALUES (E'dragoncraft', E'ドラゴン');

INSERT INTO "public"."leaders"("leader_en", "leader_ja") VALUES (E'shadowcraft', E'ネクロマンサー');

INSERT INTO "public"."leaders"("leader_en", "leader_ja") VALUES (E'bloodcraft', E'ヴァンパイア');

INSERT INTO "public"."leaders"("leader_en", "leader_ja") VALUES (E'havencraft', E'ビショップ');

INSERT INTO "public"."leaders"("leader_en", "leader_ja") VALUES (E'portalcraft', E'ネメシス');
