// const { MongoClient } = require ("mongodb");
import { MongoClient } from "mongodb";

class MongoDB {
    static connect = async (uri) => {
        if(this.client) return this.client
        this.client = await MongoClient.connect(uri);
        return this.client;
    };
}

// module.exports = MongoDB;
export default MongoDB;