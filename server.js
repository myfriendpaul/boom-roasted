import app from "./app"
import db from "./db/connection"

const PORT = process.env.PORT || 3000

db.on("connected", () => {
  console.log("Connected to MongoDB!")
  app.listen(PORT, () => console.log(`Express server application is running on ${PORT}`))
})
