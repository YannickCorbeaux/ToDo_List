import { Todo, Tag, TodoHasTag } from "../src/models/index.js";
import { sequelize } from "../src/models/sequelize-client.js";

createTables();

async function createTables() {
    console.log("🔄 TODO tables creation started...");

    console.log("\t- Dropping existing tables first");
    await Todo.drop({ cascade: true });
    await Tag.drop({ cascade: true });
    await TodoHasTag.drop({ cascade: true });

    console.log("\t- Creating new tables");
    await Todo.sync();
    await Tag.sync();
    await TodoHasTag.sync();

    console.log("✅ TODO tables created with success !");

    console.log("🧹 Clean up by closing database connexion\n");
    await sequelize.close();
}