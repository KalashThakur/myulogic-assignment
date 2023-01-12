const { Router } = require("express");
const { UserModel } = require("../Models/UserModel");
const userRoute = Router();

userRoute.get("/", async (req, res) => {
  const results = await UserModel.find();
  res.send(results);
});


// **********GET*********
// userRoute.patch("/update", async (req, res) => {
  
// })

//POST
// userRoute.post("/create", async(req, res) => {
//   const {correctAns} = req.body;
//   const newcount = new UserModel({
//     correctAns
//   });
//   await newcount.save();
//   res.send({"message": "Added 1", newcount})
// });


module.exports = userRoute;
