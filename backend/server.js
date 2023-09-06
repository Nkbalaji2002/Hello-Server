const Express = require("express");
const app = Express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const messageData = require("./data/message.json");

app.use(cors());
app.use(Express.json());

app.get("/api", (req, res) => {
  res.json(messageData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
