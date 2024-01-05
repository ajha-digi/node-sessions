const http = require("http");
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT;

// parse request bodies (req.body)
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

const users = [
  {
    id: 1,
    name: "test 1",
  },
  {
    id: 2,
    name: "test 2",
  },
  {
    id: 3,
    name: "test 3",
  },
];

app.get("/", function (req, res) {
  res.json(users);
});

app.get("/:id", function (req, res) {
  const { id } = req.params;
  res.json(
    users.filter(function (user) {
      return user.id === +id;
    })
  );
});

app.post("/", function (req, res) {
  users.push({ id: users.length + 1, ...req.body });
  res.json({ code: "200", message: "success", data: users });
});

app.put("/:id", function (req, res) {
  const { id } = req.params;
  const { name } = req.body;
  const index = users.findIndex(function(user){
    return user.id === +id
  })
  if(index > -1) {
    users[index] = {
        ...users[index],
        name
    }
  }
  res.json(users);
});

app.delete("/:id", function (req, res) {
    const { id } = req.params;
    const index = users.findIndex(function(user){
        return user.id === +id
      })
    users.splice(index,1)
  res.json(users);
});

app.listen(PORT, function () {
  console.log(`express server is running at http://localhost:${PORT}`);
});

// http.createServer(function(req,res){
//     console.log("+++++++++++++++");
//     res.write("From Node server!");
//     res.end();
// }).listen(process.env.PORT);
