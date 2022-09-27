import createServer from "./lib/app.mjs";
import config from "./lib/config.mjs";
import connect from "./lib/db.mjs";
const port = config.get("port");
console.log(port);

const app = createServer();

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    connect();
});