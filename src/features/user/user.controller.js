import UserModal from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController {
  register(req, res) {
    const { name, email, password } = req.body;
    const user = UserModal.get().find((u) => u.email === email);
    if (!user) {
      const result = UserModal.addUser(name, email, password);
      if (result) {
        return res.status(201).send("User Registered!");
      }
    } else {
      return res.status(409).send("Email already exists");
    }
  }

  logIn(req, res) {
    const { email, password } = req.body;
    const user = UserModal.logIn(email, password);
    if (user) {
      const token = jwt.sign({ userId: user.id, email: email }, "Praveer");
      res.send(token);
    } else {
      res.send("Wrong Credentials");
    }
  }

  getAllUser(req, res) {
    const users = UserModal.get();
    res.send(users);
  }
}
