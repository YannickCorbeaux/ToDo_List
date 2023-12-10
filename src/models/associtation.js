import { sequelize } from "./sequelize-client.js";

import { Todo } from "./Todo.js"
import { Tag } from "./Tag.js"

const TodoHasTag = sequelize.define("todo_has_tag", {}, { tableName: "todo_has_tag" });

Todo.belongsToMany(Tag, {
    as: "tags",
    through: TodoHasTag,
    foreignKey: "todo_id",
    otherKey: "tag_id"
});

Tag.belongsToMany(Todo, {
    as: "todos",
    through: TodoHasTag,
    foreignKey: "tag_id",
    otherKey: "todo_id"
});

export { Todo, Tag, TodoHasTag };