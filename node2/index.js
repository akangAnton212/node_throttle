const express = require('express')
const port = process.env.PORT || 5000
const rateLimitMiddleware = require("./middleware/rateLimiter");
const app = express()

app.use(rateLimitMiddleware());

app.get("/api/blog", (req, res) => {
    res.send({
      success: true,
      message: "Welcome to our Blog API Rate Limiter Project 🎉",
    });
  });
  
  app.get("/api/blog/post", (req, res) => {
    res.send({
      success: true,
      author: "Mike Abdul",
      "title": "Creating NodeJs Rate Limiter",
      "post": "..."
    });
  });

  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });