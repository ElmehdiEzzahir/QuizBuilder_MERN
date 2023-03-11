const User = require('../models/loginModel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register_post = async (req, res) => {

    const { fname, lname, email, password,type } = req.body;
    
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    console.log(oldUser+"old")
    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
 
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      type,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }

}


exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log(user.type+"hhhhhhtype")
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
        expiresIn: 1000,
      });
  
      if (res.status(201)) {
        return res.json({ status: "ok", data: token ,type:user.type});
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "InvAlid Password" });
}
exports.userData = async (req, res) => {

    const { token } = req.body;
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
}

