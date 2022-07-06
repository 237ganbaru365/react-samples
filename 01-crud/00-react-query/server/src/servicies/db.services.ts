import * as mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;
const MongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER}@cluster0.s2s5v.mongodb.net/?retryWrites=true&w=majority`;
