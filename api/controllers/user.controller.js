const UserModel= require('../models/user');

class UserController {
    static async getAll(req, res) {
      try {
        const user = await UserModel.find();
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json(error);
      }
    }

    static async create(req, res) {
      try {
        const { email } = req.body;
        const checkUser = await UserModel.findOne({email});
        if (!checkUser){
          const newUser = req.body;
          const user = await UserModel.create(newUser);
          res.status(200).json({ id: user._id,email:user.email,firstname:user.firstname,lastname:user.lastname });
        } else {
          return res.status(400).json({Message : "Email already taken"})
        }
      } catch (error) {
        res.status(500).json({Message : error.message});
      }
    }

    static async authen(req,res){
      try{
        const {email, password} = req.body;
        const checkUser = await UserModel.findOne({email});
        if (!checkUser){
          return res.status(400).json({Message : "Wrong username or password"})
        } else {
          const checkUserPass = await UserModel.findOne({email, password});
          if (checkUserPass){
            return res.status(200).json({
              Message: "Login successful",
              id:checkUserPass._id,
              email:checkUserPass.email,
              firstname:checkUserPass.firstname,
              lastname:checkUserPass.lastname
            })
          } else{
            return res.status(400).json({Message: "Fault account"})
          }
        }

      } catch (error){
        res.status(500).json(error)
      }
    }

      static async update(req, res) {
        try {
          const { email } = req.body;
          const checkUser = await UserModel.findOne({email});
          if (!checkUser){
            return res.status(400).json({Message : "Fail to update!!!"})
          }else {
          const userId = req.params.userId;
          const newUser = req.body;
          const user = await UserModel.findOneAndUpdate({ _id: userId }, newUser);
          res.status(200).json({ id: user._id });
          }
        } catch (error) {
          res.status(500).json(error);
        }
      }

      static async delete(req, res) {
        try {
          const userId = req.params.userId;
          const user = await UserModel.findOneAndDelete({_id: userId});
          res.status(200).json({ id: user._id });
        } catch (error) {
          res.status(500).json(error);
          Console.log(error);
        }
      }
}
  
  module.exports = UserController;