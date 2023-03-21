const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 4000;
const { MongoClient, ServerApiVersion } = require("mongodb");

//Middleware
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ivshnpx.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect((err) => {
      console.log(err);
    });
    const ridersCollection = client.db("users").collection("ridersCollection");

    //post rider
    app.post("/register/rider", async (req, res) => {
      const query = { email: req.body.email, fullname: req.body.fullname };
      const availableUser = ridersCollection.findOne(query);
      if (availableUser) {
        return res.send({ message: "Rider Already Available" });
      }
      const rider = req.body;
      const result = await ridersCollection.insertOne(rider);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
