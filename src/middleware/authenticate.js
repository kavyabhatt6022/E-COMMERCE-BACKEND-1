const jwtProvider=require("../config/jwtProvider.js");
const userService=require("../services/user.service.js");

const authenticate=async(req,res,next)=>{
    console.log('Authenticate middleware called'); 
    try {
        const token=req.headers.authorization?.split(" ")[1];
        if(!token){
            console.log("Request headers:", req.headers);
            return res.status(404).send({error:"token not found..."})
        }

        const userId= await jwtProvider.getUserIdFromToken(token);
        const user=await userService.findUserById(userId);
        console.log('User found:', user); 
        if (!user) {
            return res.status(404).send({ error: "User not found" });
          }
         req.user=user;
        console.log('req.user:', req.user);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
    next();
}

module.exports={
    authenticate,
};