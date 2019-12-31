import * as dotenv from "dotenv";
import app from "./app";

const env = dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
