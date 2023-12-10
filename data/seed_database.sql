BEGIN;

INSERT INTO "todo"
  ("title", "content")
VALUES
  ('Liste des courses', 'kiwee, pommes, rhum')
;

INSERT INTO "tag"
  ("name", "color")
VALUES
  ('Urgent', '#00FF00')
;

COMMIT;