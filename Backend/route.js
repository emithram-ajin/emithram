import express from "express";
import { Form, ContactForm,RegisterForm,ImageSchema } from "./schema.js";
const router = express.Router();

import multer from 'multer';

const storage = multer.memoryStorage(); 
const upload = multer({ storage });


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

router.post('/uploads', upload.single('image'), async (req, res) => {
  try {
    const { page, position, title, description } = req.body;

    if (!page || !position || !req.file) {
      return res.status(400).json({ error: 'Page, position, and image are required' });
    }

    const newImage = new ImageSchema({
      page,
      position,
      title,
      description,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      }
    });

    await newImage.save();
    res.status(201).json({ message: 'Image uploaded successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});


router.get('/uploads', async (req, res) => {
  try {
    const { page, position, title } = req.query;

    // Build dynamic query object
    const query = {};
    if (page) query.page = page;
    if (position) query.position = position;
    if (title) query.title = { $regex: title, $options: 'i' }; // optional fuzzy search

    const images = await ImageSchema.find(query);

    const formattedImages = images.map(img => ({
      _id: img._id,
      page: img.page,
      position: img.position,
      title: img.title,
      description: img.description,
      image: `data:${img.image.contentType};base64,${img.image.data.toString('base64')}`
    }));

    res.status(200).json(formattedImages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch filtered images' });
  }
});

export default router;
