const express = require("express");
// se importa el modelo de user del exquema de la ruta de modelo de datos de solo usuarios
const userSchema = require("../models/user");

const router = express.Router();

// create user (crear usuario con metodo post(peticion y respuesta)) desde el cuerpo de la peticion "body" 
// y guardarlos con petodo save  y se tiene un tipo de  error se retorno o respuesta con un objeto de mensaje  

router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
   
  // se creo como prueba de inicio res.send("create User");


    //   const user = userSchema(req.body);
//   user
//     .save()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// get all users obtener todos los usuarios y responda con una promesa o 
//si no con un exitoso error con un metodo y/o operacion get encontrar  
router.get("/users", (req, res) => {
  userSchema
  .find()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// get a user encontrar a usuario por id desde la peticion de un parameto (id)
//obtener un usuario especifico
 router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
  .findById(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// delete a user se eliminara un usuario
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
  .remove({ _id: id })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// update a user de actualizacion con un metodo put y actualizar uno (usuario especifico con nuevos datos)
// nombre la edad y el mail y 
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
  .updateOne({ _id: id }, { $set: { name, age, email } })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

module.exports = router;
