import "colors"
import express from "express"
import config from "./config.js"
import authRoutes from "./app/auth/auth.routes.js"

const app = express()

async function main() {
	// if (process.env.NODE_ENV === "development") app.use(morgan("dev"))
	const PORT = config.PORT
	console.log(`${config.NODE_ENV}  `, PORT)

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
