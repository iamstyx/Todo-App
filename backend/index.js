const express = require('express')
const {createTodo, updateTodo} = require("./types");
const app = express();
const port = 3000;



app.use(express.json());

app.post("/todo", (req, res) => {

    const createPayload = req.body;
    const parsePaylod = createTodo.safeParse(createPayload);
    if(!parsePaylod.success){
      res.status(411).json({
        msg: "You sent the wrong input",
      })
      return;
    }
    // put it in mongodb
})

app.get("/todos", (req, res) => {

})

app.put("/completed", (req, res) => {

    const updatePayload = req.body;
    const parsePaylod = updateTodo.safeParse(updatePayload)
    if(!parsePaylod.success){
      res.status(411).json({
        msg: "You sent the wrong input",
      })
      return;
    }
})




app.listen(port, ()=>{
  console.log(`App Running on ${port}`)
});