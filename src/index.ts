import { SERVER_PORT, SERVER_IP } from './config'
import { app } from './app'


app.listen(SERVER_PORT, SERVER_IP, () => {
  console.log(`Server started successfully: ${SERVER_IP}:${SERVER_PORT}`)
})
