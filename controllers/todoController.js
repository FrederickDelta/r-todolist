const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const todoSchema = new mongoose.Schema({
  title: String,
});

let Todo = mongoose.model("Todo", todoSchema);

// You could also use express.Router
module.exports = function (app) {
  app.get("/todo", (req, res) => {
    Todo.find({}, (err, data) => {
      if (err) throw err;
      res.render("todo", { todos: data });
    });
  });
  app.post("/todo", (req, res) => {
    Todo(req.body).save((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });
  app.delete("/todo/:item", (req, res) => {
    Todo.find({ title: req.params.item.replace(/\-/g, " ") }).deleteOne(
      (err, data) => {
        if (err) throw err;
        res.json(data);
      }
    );
  });
};
