import 'dotenv/config'
import { connect } from 'mongoose'

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI || ''

    const DB_name = <string>process.env.DB_NAME || 'test'
    await connect(DB_URI, {
        dbName: DB_name
      })
}

export default dbConnect