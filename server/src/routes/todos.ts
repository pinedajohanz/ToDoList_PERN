import express from 'express';
import { Todo } from "../db/models/Todo";

const router = express.Router();
// define all the routes that we need

router.get("/", async (req, res) => {
    // select all records then order by created at
    const todos = await Todo.query().select().orderBy("created_at");

    res.send({ todos }); // we get an array of todos
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const todo = await Todo.query().findById(id).first(); // we retrieve only 1st todo

    res.send({ todo });
});

router.post("/", async (req, res) => {
    const todo = req.body.todo;

    const newTodo = await Todo.query()
        .insert({ title: todo.title })
        .returning("*");

        res.send({ todo: newTodo });
});

router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const todo = req.body.todo;
    const updatedTodo = await Todo.query()
        .update({ title: todo.title, done: todo.done})
        .where({ id })
        .returning("*")
        .first();

        res.send({ todo: updatedTodo });
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await Todo.query().deleteById(id);
    res.send("Todo successfully deleted.");
});

export default router;