import express from "express";
import Schema from "./schema.js";

const router = express.Router();

router.post("/sample", async (req, res) => {
  try {
    const { name, age, place } = req.body;

    console.log("➡️ Received Data:", { name, age, place });

    if (!name || !age || !place) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newPerson = new Schema({ name, age, place });
    await newPerson.save(); 

    res.status(201).json(newPerson);
  } catch (error) {
    console.error("🔥 Error saving data:", error); 
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
