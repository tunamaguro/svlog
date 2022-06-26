
CREATE TABLE "public"."formats" ("format_en" text NOT NULL, "formatt_ja" text NOT NULL, PRIMARY KEY ("format_en") , UNIQUE ("formatt_ja"));COMMENT ON TABLE "public"."formats" IS E'フォーマット名の英語名、日本語名';

INSERT INTO "public"."formats"("format_en", "formatt_ja") VALUES (E'rotation', E'ローテーション');

INSERT INTO "public"."formats"("format_en", "formatt_ja") VALUES (E'unlimited', E'アンリミテッド');
