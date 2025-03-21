const jwtProvider =  require('../config/jwtProvider');
const userService = require('../services/user.services');

const authenticate = async (req,res,next)=>
{
    try {
        const token = req.headers.authorization;
        if(!token)
        {
            return res.status(404).send({error:"Token is not found..."});
        }
        const userId = await jwtProvider.getUserIdFromToken(token);
        const user = await userService.findById(userId);
        req.user = user;
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
    next()
}

module.exports = authenticate;