module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);
console.log(tutorials);
  // Retrieve all Tutorials

  
  router.get("/", tutorials.findAll);
  console.log(tutorials);
  // Retrieve all published Tutorials



  router.get("/published", tutorials.findAllPublished);
  console.log(tutorials);
  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);
  console.log(tutorials);
  // Update 
  router.put("/:id", tutorials.update);
  console.log(tutorials);
  // Delete 
  router.delete("/:id", tutorials.delete);
  console.log(tutorials);
  // Create 
  router.delete("/", tutorials.deleteAll);
  console.log(tutorials);
  app.use("/api/tutorials", router);
};
