const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../model/userSchema')
const authenticate = require('../middleware/authenticate')
require('../db/conn')


router.post('/register', async (req, res) => {
    console.log(req.body)
    const { name, email, password, cpassword } = req.body

    if (!name || !email || !password || !cpassword) {
        return res.status(400).json({ error: "! plz filled all field" })
    }

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(400).json({ error: "! email already exist" })
        } else if (password !== cpassword) {
            return res.status(400).json({ error: "! password mismatch" })
        } else {
            const user = new User({ name, email, password, cpassword })
            await user.save()
            return res.status(200).json({ msg: "you are in", noerror:"success"})
        }

    } catch (e) {
        console.log(e);
    }

})

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({ error: "! fields are mandatory" })
        }

        const userLogin = await User.findOne({ email })
        if (!userLogin) {
            res.status(400).json({ error: "! Invalid email / password" })
        } else {
            const isMatch = await bcrypt.compare(password,userLogin.password)

            let token = await userLogin.generateAuthToken();
            res.cookie('jwtoken',token ,{
                expires : new Date(Date.now() + 8640000000),
                httpOnly:true
            })

            if(isMatch){
                res.json({ message: "signed in successfuly" });
            }
            else{
                res.status(400).json({ error: "! Invalid email / password" })
            }
        }

    } catch (err) {
        console.log(err);
    }
})

router.get('/favourite', authenticate ,(req, res) => {
    res.send(req.rootUser.favourites);
})

router.post('/addToFavourite',authenticate,async(req,res) => {

    const user = await User.findOne({ _id:req.userID })
    const data = JSON.stringify(req.body.props);
    user.favourites = user.favourites.concat(data)
    await user.save()

})


module.exports = router;