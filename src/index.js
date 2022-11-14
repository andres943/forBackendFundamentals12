const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");

// settings
const app = express();
const port = process.env.PORT || 4010;

// se crea un middlewares
app.use(express.json());
app.use('/api', userRoute);

// routes de app principal y recibe una funcion de una peticion el objeto de la respuesta y peticion y un metodo send
app.get('/', (req, res) => {
res.send("application formy");
});

// // mongodb connection istalando variables de ambiante con modulo env
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas formulary"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log('Server listening on port', port));