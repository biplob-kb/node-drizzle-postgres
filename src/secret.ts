import dotenv from "dotenv";
dotenv.config();

const secret = {
  port: process.env.PORT || 4000,
};
export default secret;
