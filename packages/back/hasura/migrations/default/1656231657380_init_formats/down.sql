
DELETE FROM "public"."formats" WHERE "format_en" = 'unlimited';

DELETE FROM "public"."formats" WHERE "format_en" = 'rotation';

DROP TABLE "public"."formats";
