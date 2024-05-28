import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  //1. read the tokken
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send("Unauthorized!");
  }

  //2.verify the tokken
  try {
    const payload = jwt.verify(token, "Praveer");
    // console.log(payload);
    req.userId = payload.userId;
  } catch (err) {
    return res.status(401).send("Unauthorized!");
  }
  next();
};
export default jwtAuth;
