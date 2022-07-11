import * as mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;
const MongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.s2s5v.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

let _db: mongodb.MongoClient;

export const initDb = (
  callback: (err: Error | null, db?: mongodb.MongoClient) => void
) => {
  if (_db) {
    console.log("Database is already initialized");
    return callback(null, _db);
  }
  MongoClient.connect(MongoUrl)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

export const getDb = () => {
  if (!_db) {
    throw new Error("Database is not initialized");
  }
  return _db;
};
