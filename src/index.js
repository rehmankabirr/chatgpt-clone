const app = require("./app");
const { dbConnect } = require("./db/dbConnect");

const PORT = process.env.PORT || 8000;

dbConnect();

// Creating Web Server
app.listen(PORT, () => {
  console.log(`server is running at localhost:${PORT}`);
});
