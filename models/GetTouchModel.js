import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    
    email: {
      type: String,
      required: true,
      unique: true,
    },
  
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Get Touch", userSchema);

export default User;
