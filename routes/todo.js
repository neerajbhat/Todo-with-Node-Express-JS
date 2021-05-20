const router = require("express").Router();

const Todo = require("../models/Todo");

//routes

router
    .post("/add/todo", (req, res) => {
        const todo = req.body.todo;
        const newTodo = new Todo({todo: todo});
        newTodo.save()
        .then(() => {
            console.log("Successfully added todo!");
            res.redirect("/");
        })
        .catch(() => {
            console.log("Failed!");
            res.redirect("/");
        });
    })
    .get("/delete/todo/:_id", (req, res) => {
        const {_id} = req.params;
        Todo.deleteOne({_id})
        .then(() => {
            console.log("Successfully deleted todo!");
            res.redirect("/");
        })
        .catch((err) => {
            // console.log("Unable to delete!");
            console.log(err);
            res.redirect("/");
        })
    }).get("/delete/deleteAllTodo", (req, res) => {
        Todo.deleteMany()
        .then(() => {
            console.log("Successfully deleted todo!");
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
            res.redirect("/");
        })
    })

module.exports = router;