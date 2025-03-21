const jwtProvider = require('../config/jwtProvider');
const { findUserByEmail } = require('../services/user.services');
const cartService  = require('../services/cart.services')
const userService = require('../services/user.services')
const bcrypt = require('bcrypt');

const register = async (req,res)=>
{
    try {
        const user = await userService.createUser(req.body);
        const jwt = await jwtProvider.generateToken(user._id);
        await cartService.createCart(user);

        return res.status(200).send({jwt:jwt,message:"register successful"});

    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const login = async(req,res)=>
{
    const {email,password} = req.body;
    try {
        const user = await findUserByEmail(email)

        if(!user)
        {
            return res.status(404).send({message: 'user not found with email',email});
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);

        if(!isPasswordValid)
        {
            return res.status(401).send({message:'Invalid Password...'});
        }
        const jwt = await jwtProvider.generateToken(user._id);
        
        return res.status(200).send({jwt,message:"Login successful"});
    } catch (error) {
        
        return res.status(500).send({error:error.message});
    }
}

module.exports = {register,login};