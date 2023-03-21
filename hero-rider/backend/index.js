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
    const learnerCollection = client
      .db("users")
      .collection("learnerCollection");

    //Rider API
    //Registration
    app.post("/register/rider", async (req, res) => {
      const query = { email: req.body.email, fullname: req.body.fullname };
      const availableUser = await ridersCollection.findOne(query);
      if (availableUser) {
        return res.send({ message: "Rider Already Available" });
      }
      const rider = req.body;
      const result = await ridersCollection.insertOne(rider);
      res.send(result);
    });

    app.get("/rider/info/:email", async () => {
      const rider = await ridersCollection.findOne({ email: req.params.email });
      res.send(rider);
    });

    //login
    app.get("/login/rider", async (req, res) => {
      const email = req.body.email;
      const password = req.body.password;
      const riderExist = await ridersCollection.findOne({
        email: email,
        password: password,
      });

      if (riderExist) {
        if (email === riderExist.email && password === riderExist.password) {
          return res.send({ success: true, message: "Login Successful" });
        }
      } else {
        res.send({ success: false, message: "No Rider Exist" });
      }
    });

    //Learner API
    app.post("/register/learner", async (req, res) => {
      const query = { email: req.body.email, fullname: req.body.fullname };
      const availableUser = await learnerCollection.findOne(query);
      if (availableUser) {
        return res.send({ message: "User Already Available" });
      } else {
        const learner = req.body;
        const result = await learnerCollection.insertOne(learner);
        res.send(result);
      }
    });

    app.get("/learner/info/:email", async (req, res) => {
      const learner = await learnerCollection.findOne({
        email: req.params.email,
      });
      res.send(learner);
    });

    //login
    app.get("/login/learner", async (req, res) => {
      const email = req.body.email;
      const password = req.body.password;
      const learnerExist = await learnerCollection.findOne({
        email: email,
        password: password,
      });

      if (learnerExist) {
        if (
          email === learnerExist.email &&
          password === learnerExist.password
        ) {
          return res.send({ success: true, message: "Login Successful" });
        }
      } else {
        res.send({ success: false, message: "No User Exist" });
      }
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
