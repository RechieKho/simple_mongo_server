import mongoose from "mongoose";
require("dotenv").config();
const { MONGO_URL = "mongodb://127.0.0.1:27017" } = process.env;

type DatabaseName = "subscribers";

const connect = (db_name: DatabaseName) => {
  mongoose.connect(`${MONGO_URL}/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", (err) => console.error(err));
  db.once("open", () => console.log(`Connected to "${db_name}" database`));
};

export default connect;
