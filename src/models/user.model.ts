import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

export interface UserInput{
  email: string;
  name: string;
  password: string;
}

export interface UserDocument extends UserInput, mongoose.Document{
  _id: string;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  picture:{
    type: String,
    required: false
  }
}, {
  timestamps: true
});

/**
 * Cette fonction de mongoose permet de hasher automatiquement le mot de passe lors de l'enregistrement
 */
userSchema.pre("save", async function (next){

  let user = this;
  // let user = this as unknown as UserDocument;
  // console.log("Mon user: ", user);
  // console.log("Mon user modified password: ", user.isModified("password"));
  // console.log("Mon user not modified password: ", !user.isModified("password"));

  if(!user.isModified("password")){
    return next()
  }

  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

  const hash = await bcrypt.hash(user.password, salt);
  
  user.password = hash;

  return next();

});

/**
 * Création d'une méthode qui compare le mot de passe hasher dans la db et le mot de passe taper 
 * lors de l'authentification
*/
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean>{

  const user = this;

  return bcrypt.compare(candidatePassword, user.password).catch(error => false)

}

const UserModel = mongoose.model<UserDocument>('Users', userSchema);

export default UserModel;