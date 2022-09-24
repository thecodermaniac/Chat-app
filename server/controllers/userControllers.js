const User = require("../models/User");
const bcrypt = require('bcryptjs')
const generateToken = require("../config/generateToken");


const registerUser = async (req, res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ errors: "enter all fields" });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({ errors: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10)
    const secrectPass = await bcrypt.hash(password, salt)
    const user = await User.create({
        name,
        email,
        password: secrectPass,
        pic,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        return res.status(400).json({ errors: "User Not Found" });
    }
};


const authUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        return res.status(400).json({ errors: "Invalid Password or email" });
    }
};

const allUsers = async (req, res) => {  //ekhane logged user chara baki sob user ke anar list debe ar setar query lekha hoche !
    // const keyword = req.query.search
    //     ? {
    //         $or: [
    //             { name: { $regex: req.query.search, $options: "i" } },
    //             { email: { $regex: req.query.search, $options: "i" } },
    //         ],
    //     }
    //     : {};

    const users = await User.find({ _id: { $ne: req.user._id } });
    res.send(users);
};

module.exports = { registerUser, authUser, allUsers };