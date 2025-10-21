// const express=require('express');
// const cors=require('cors');
// const fetch=require('node-fetch');
// const app=express();

// app.use(cors());
// app.use(express.json());
// app.get('/api/swiggy', async(req, res)=>{
//     try{
//         const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93629226592993&lng=77.62197833042262&offset=CJhlELQ4KICop96p3ZnSODCnEzgD");
//         const data=await response.json();

//         res.json(data);
//     }catch(err){
//         console.error("Error fetching Swiggy API:", err);
//         res.status(500).json({ error: "Failed to fetch Swiggy data" });
//     }
// });

// const PORT=5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/swiggy", async (req, res) => {
  try {
    const response = await fetch( // lat=17.722035268420797, lng=83.29750911811173
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93629226592993&lng=77.62197833042262&offset=CJhlELQ4KICop96p3ZnSODCnEzgD",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.9",
          "Referer": "https://www.swiggy.com/",
        },
      }
    );

    const text = await response.text(); // get raw response first

    try {
      const data = JSON.parse(text);
      res.json(data);
    } catch (jsonErr) {
      console.error("⚠️ Swiggy returned HTML instead of JSON");
      res.status(502).send("Swiggy API returned invalid response");
    }
  } catch (err) {
    console.error("Error fetching Swiggy API:", err);
    res.status(500).json({ error: "Failed to fetch Swiggy data" });
  }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
