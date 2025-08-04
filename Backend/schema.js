import mongoose from "mongoose";

//  form
const formSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  district: { type: String },
  createdAt: { type: Date, default: Date.now },
});
export const Form = mongoose.model("Form", formSchema);

// Contact form
const contactFormSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});
export const ContactForm = mongoose.model("ContactForm", contactFormSchema);

// Franchise reister form

const registerFormSchema = new mongoose.Schema({
  name:{type:String},
  place:{type:String},
  localbody:{type:String},
  district:{type:String},
  mobile:{type:Number},
  email:{type:String},
  center:{type:String},
  heardfrom:{type:String},
})

export const RegisterForm = mongoose.model('RegisterForm',registerFormSchema)