const express = require('express');
const app = express();

app.post("/", (req, resp) => {
    resp.send("yes its working");
    console.log("Received GET request at /");
});

app.get("/add", (req, resp) => {
    console.log("Received POST request at /add");
    resp.send("it is also working");
});

app.delete("/delete", (req, resp) => {
    console.log("Received DELETE request at /delete");
    resp.send("this is delete api");
});

app.listen(3003, () => {
    console.log("Server is running on port 3003");
});
