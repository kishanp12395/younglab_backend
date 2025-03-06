import { User } from "../Models/User.js";

export const allUser = async (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.status(400).json({ error: "Name is required." });
    }
    
    try {
        const user = await User.findOne({ name });
        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }
        res.json({ message: `Hello, ${user.name}! Welcome to Younglabs.`, user });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}



export const addUser = async (req,res) =>{
   
        const { name, age, email } = req.body;
        if (!name || !age || !email) {
            return res.status(400).json({ error: "All fields are required." });
        }
        
        try {
            const newUser = new User({ name, age, email });
            await newUser.save();
            res.status(201).json({ message: "User created successfully", user: newUser });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
}
