import db from "./database.js";

const main = async () => {
  try {
    await db.sync({ force: false });
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
};
main();
