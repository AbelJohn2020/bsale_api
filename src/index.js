const express = require("express");
const app = express();

// SETTINGS

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

// routes

app.use(require("./routes/books"));

app.listen(app.get("port"), () => {
    console.log("Server on port 3000", app.get("port"))
})