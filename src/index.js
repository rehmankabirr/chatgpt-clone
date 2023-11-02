const app = require("./app");

const PORT = process.env.PORT || 8000;

// Creating Web Server
app.listen(PORT, () => {
  console.log(`server is running at localhost:${PORT}`);
});
