import "colors"
import express from "express"
import env from "dotenv"
import authRoutes from "./app/auth/auth.routes.js"

const app = express()
env.config()

async function main() {
	// if (process.env.NODE_ENV === "development") app.use(morgan("dev"))

	const PORT = process.env.PORT

	app.use(express.json())
	app.use("/api/auth", authRoutes)

	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on
            port ${PORT}`.green.bold
		)
	)
}

main()
