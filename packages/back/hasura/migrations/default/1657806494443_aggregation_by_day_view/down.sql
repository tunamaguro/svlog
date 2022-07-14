
-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE VIEW result_aggregation_by_day AS
--     SELECT
--     DATE_TRUNC('day',created_at) AS created_at,
--     COUNT(*) AS total,
--     COUNT(is_win=TRUE or null) AS win,
--     COUNT(is_win=FALSE or null) AS lose
--
--     FROM battle_results
--     GROUP BY DATE_TRUNC('day',created_at);

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- DROP VIEW "public"."result_aggregation_by_day";
