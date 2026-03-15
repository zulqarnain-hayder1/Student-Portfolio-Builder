import { MongoClient } from 'mongodb'
const url ="mongodb+srv://data_base2:yff2DlUFOyK9JFUu@cluster1.2mlgew0.mongodb.net/?appName=Cluster1"
const db_name="Users"
export const collection  = "Users_data"

const client = new MongoClient(url)
export const connectDB = async()=>{
    const connect = await client.connect()
    console.log("Database connected successfully")
    return await connect.db(db_name)
}

