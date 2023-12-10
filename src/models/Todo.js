import { sequelize } from "./sequelize-client.js";
import { Model, DataTypes } from "sequelize";

export class Todo extends Model { }

Todo.init({
    title: {
        type: DataTypes.STRING(42),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "todo"
});