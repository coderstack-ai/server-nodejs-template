const dotenv = require("dotenv")

dotenv.config()

const { SERVER_PORT, SERVER_IP } = process.env

export { SERVER_PORT, SERVER_IP }

// console.log("This folder stores configuration information, global configuration information of the top-level .env")