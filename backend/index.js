const { initialisation } = require("./db/db.connect");
initialisation();

const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/tshirtRoutes");

const corsOptions = {
  origin: "*",
  credentials: true,
  openSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => res.send("Server started"));

app.use("/api/v1/tshirts", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Connected to server at PORT", PORT));
