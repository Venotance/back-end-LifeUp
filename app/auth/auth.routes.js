import { authUser } from "./auth.controller.js"
import express from "express"

const router = express.Router()

router.route("/login").post(authUser)
// localhost:4200/api/auth/login

export default router
