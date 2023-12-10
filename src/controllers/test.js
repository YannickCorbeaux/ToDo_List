import { Todo, Tag, TodoHasTag } from "../models/index.js";
// import { sequelize } from "../src/models/sequelize-client.js";

// export async function getAllTodos(req, res) {
//     const todos = await Todo.findAll();
//     res.json(todos);
//     console.log(todos);
// }
// async function getAllTodos() {

//     const allTodos = await Todo.findAll();
//     console.log(allTodos);
// }
// getAllTodos();

const todosWithTags = await Todo.findAll({
    include: "tags"
});
console.log(todosWithTags);