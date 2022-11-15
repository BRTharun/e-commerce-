const app = require("./app");
const dotenv = require("dotenv");

const connectDataBase = require("./config/database");

//handel uncaught expection
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  console.log(`Error, ${err.message}`);
  process.exit(1); //1 stands for uncaught exception
});
//config
dotenv.config({ path: "backend/config/config.env" });

//connect to database
connectDataBase();

app.listen(process.env.PORT, () => {
  console.log(`server is started at port https://localhost:${process.env.PORT}`)
})

//unhandeled Promise Rejection
//process is an instance of EventEmitter and will handle all unhandled promises in NodeJS
//this is used for asynchronous code; Promises
process.on('unhandledRejection', (err) => {
  console.log(`Error, ${err.message}`);
  console.log('UNHANDLED REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1); //1 stands for uncaught exception
  });
});