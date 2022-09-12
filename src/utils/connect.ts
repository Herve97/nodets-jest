import mongoose from 'mongoose';
import config from 'config';


async function connect(){
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Connected to database");
  } catch (error: any) {
    console.error("Error connecting to database: ", error.message);
    process.exit(1);
  }

}

export default connect;

// return mongoose.connect(dbUri).then(()=>{
  //   console.log("Connected to database");  
  // }).catch((error)=>{
  //   console.error("Error connecting to database: ", error.message);
  //   process.exit(1);
  // });