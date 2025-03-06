import express from 'express'
import { addUser, allUser } from '../Controllers/User.js';
const Router = express.Router()

Router.get("/", allUser);
Router.post('/add', addUser)

export default  Router;