import express from "express";
import { Form, ContactForm,RegisterForm } from "./schema.js";
const router = express.Router();


router.post('/submit-form',async(req,res)=>{
  try {
    const {name,email,phone,district} = req.body;
    const newForm = new Form({name,email,phone,district});
    await newForm.save()

    res.status(200).json({message:'Form data saved successfully'})
  } catch (error) {
    console.error('Form submission error:',error)
    res.status(500).json({message:'server error'})
  }
})

router.post('/contact-form',async(req,res)=>{
  try {
    const {name,phone,message} = req.body;
    const newcontactForm = new ContactForm({name,phone,message});
    await newcontactForm.save()

    res.status(200).json({message:'ContactForm data saved successfully'})
  } catch (error) {
    console.error('ContactForm submission error:',error)
    res.status(500).json({message:'server error'})
  }
})

router.post('/register-form',async(req,res)=>{
  try {
    const {name,place,localbody,district,mobile,email,center,heardfrom} = req.body
    const newregisterForm = new RegisterForm({name,place,localbody,district,mobile,email,center,heardfrom})
    await newregisterForm.save()
    res.status(200).json({message:'RegisterForm data saved successfully'})

  } catch (error) {
        console.error('RegisterForm submission error:',error)
    res.status(500).json({message:'server error'})
  }
})


export default router;
