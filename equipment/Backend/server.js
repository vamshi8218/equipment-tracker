const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const equipmentRoutes = require("./routes/equipmentRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/equipment", equipmentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
