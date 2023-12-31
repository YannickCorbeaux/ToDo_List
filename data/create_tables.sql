BEGIN;

DROP TABLE IF EXISTS "todo", "tag", "todo_has_tag";

CREATE TABLE "todo" (
    "id" INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    "title" VARCHAR(42) NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "tag" (
    "id" INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    "name" TEXT NOT NULL UNIQUE,
    "color" VARCHAR (7),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "todo_has_tag" (
    "id" INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    "todo_id" INTEGER NOT NULL REFERENCES "todo"("id") ON DELETE CASCADE,
    "tag_id" INTEGER NOT NULL REFERENCES "tag"("id") ON DELETE CASCADE,

    UNIQUE ("todo_id", "tag_id"),

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

COMMIT;