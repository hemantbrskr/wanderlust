 const express =require("express");
 const router = express.Router();

 
 
 //users
 //index users
 router.get("/", (req, res) => {
    res.send("GET for users");
  });

  //show users
  router.get("/:id", (req, res) => {
    res.send("GET for show users");
  });

  //POST users
  router.post("/", (req, res) => {
    res.send("POST for users");
  });

//DELETE users 
router.delete("/:id", (req, res) => {
    res.send("Delete for users");
  });
   
  module.exports = router;