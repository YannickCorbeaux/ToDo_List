BEGIN;

INSERT INTO "todo"
  ("title", "content")
VALUES
  ('Liste des courses', 'kiwee, pommes, rhum'),
  ('Sport Motivation', 'Faire des pompes des tractions comme Gradur')
;

INSERT INTO "tag"
  ("name", "color")
VALUES
  ('Urgent', '#00FF00'),
  ('Ca va j ai le temps', '#F0F0F0')
;

INSERT INTO "todo_has_tag"
  (todo_id, tag_id)
VALUES
  (1, 1),
  (1, 2)
;

COMMIT;