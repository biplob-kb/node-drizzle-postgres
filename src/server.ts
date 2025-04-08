import app from "./app";
import secret from "./secret";

app.listen(secret.port, () => {
  console.log(`Server is running on http://localhost:${secret.port}`);
});
