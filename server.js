import app from "./app.js";
import config from "./app/config/index.js";
import MongoDB from "./app/untils/mongodb.until.js";

async function startServer(){
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Connect to the database!");

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log("Cannot connect to the dahtabase!", error);
        process.exit();
    }
}

startServer();