import * as dotenv from "dotenv";
import app from "./app";
// import * as https from "https";
// import * as path from "path";
// import * as fs from "fs";
const env = dotenv.config();

const PORT = process.env.PORT;

// const httpsOptions = {
//   key: fs.readFileSync(path.resolve("config/server.key")),
//   cert: fs.readFileSync(path.resolve("config/server.crt"))
// };

// https.createServer(httpsOptions, app).listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
