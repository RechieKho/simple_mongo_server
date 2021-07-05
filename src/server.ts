import express from "express";
require("dotenv").config();
const { PORT } = process.env;
const app = express();
app.use(express.json());

// subscriber route
app.use("/subscribers", require("./routes/subscribers"));

app.listen(PORT || 3000, () => {
  console.log(`Server started, listen at http://localhost:${PORT}`);
});
