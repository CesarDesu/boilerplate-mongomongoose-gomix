const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      autoIndex: false,
    });
    console.log("database connection successful");
    // const data = {
    //   name: "false Name",
    //   age: 24,
    //   favoriteFoods: ["Te"],
    // };

    // const account = new Person(data);
    // await account.save();
    // console.log(account);
  } catch (error) {
    console.log(error);
    throw new Error("database connection error");
  }
};

// export default dbConnection;
module.exports = {
  dbConnection,
};
