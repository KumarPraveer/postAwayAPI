let users = [];
export default class UserModal {
  constructor(name, email, password) {
    this.id = users.length + 1;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static addUser(name, email, password) {
    const newUser = new UserModal(name, email, password);
    users.push(newUser);
    return newUser;
  }

  static get() {
    return users;
  }

  static logIn(email, password) {
    const user = users.find((u) => u.email == email && u.password == password);
    return user;
  }
}

users = [new UserModal("Praveer", "kumarpraveer3@gmail.com", "Praveer@123")];
