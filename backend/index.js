const express = require('express')
const {createTodo, updateTodo} = require("./types");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/todo", async (req, res) => {

    const createPayload = req.body;
    const parsePaylod = createTodo.safeParse(createPayload);
    if(!parsePaylod.success){
      res.status(411).json({
        msg: "You sent the wrong input",
      })
      return;
    }
    // put it in mongodb
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed :false
    })

    res.json({
      msg:"Todo Created"
    })
})

app.get("/todos", async (req, res) => {

  const todos = await todo.find({});
  res.json({
    todos
  })


})

app.put("/completed", async(req, res) => {

    const updatePayload = req.body;
    const parsePaylod = updateTodo.safeParse(updatePayload)
    if(!parsePaylod.success){
      res.status(411).json({
        msg: "You sent the wrong input",
      })
      return;
    }
    await todo.update({
      _id:req.body._id
    },{
      completed:true
    })
    res.json({
      msg: "Todo marked as completed"
    })
})




app.listen(port, ()=>{
  console.log(`App Running on ${port}`)
});