
DELETE FROM "public"."battle_types" WHERE "type_en" = 'room';

DELETE FROM "public"."battle_types" WHERE "type_en" = 'free';

DELETE FROM "public"."battle_types" WHERE "type_en" = 'ranked';

DROP TABLE "public"."battle_types";
