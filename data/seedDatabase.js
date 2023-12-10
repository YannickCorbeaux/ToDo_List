// import { Todo, Tag } from "../src/models/index.js";
// import { sequelize } from "../src/models/sequelize-client.js";

// seedDatabase();

// async function seedDatabase() {
//     console.log("🔄 TODO seeding started...");

//     // Create Tags
//     const urgentTag = await Tag.create({ name: 'Urgent', color: '#00FF00' });
//     const haveTimeTag = await Tag.create({ name: 'Ca va j ai le temps', color: '#F0F0F0' });

//     // Create List and Cards (in one batch !)
//     await Todo.bulkCreate(
//         {
//             title: 'Liste des courses',
//             content: 'kiwee, pommes, rhum'
//         },

//         {
//             title: 'Sport Motivation',
//             content: 'Faire des pompes des tractions comme Gradur'
//         }

//     );

//     // Add Tags to some Cards
//     await addTagToCard("Savon", ecoTag);
//     await addTagToCard("Savon", urgentTag);
//     await addTagToCard("Nourrir le chat", urgentTag);
//     await addTagToCard("Dormir", lateTag);


//     console.log("✅ Okanban seed done with success !");

//     console.log("🧹 Clean up by closing database connexion");
//     await sequelize.close();
// }

// async function addTagToCard(cardContent, tagEntity) {
//     const card = await Card.findOne({ where: { content: cardContent } });
//     await card.addTag(tagEntity);
// }
