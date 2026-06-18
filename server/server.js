// server.js
import express from "express";
import cors from "cors";
import "./db.js";
import Contact from "./models/Contact.js";  

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("Received data:", { name, email, message }); 

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        message: "All fields are required." 
      });
    }

    if (!email.includes("@") || !email.includes(".")) {
      return res.status(400).json({ 
        success: false,
        message: "Invalid email address." 
      });
    }

    const contact = new Contact({
      name,
      email,
      message
    });
    
    console.log("Contact object:", contact); 
    
    await contact.save();
    
    res.status(201).json({ 
      success: true,
      message: "Message sent successfully!" 
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ 
      success: false,
      message: error.message || "Server error. Please try again." 
    });
  }
});

app.listen(5000, () => {
  console.log("Server Running on port 5000");
});