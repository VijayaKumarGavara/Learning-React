import express from "express";
import cors from "cors";
import fetch from "node-fetch";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/swiggy", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93629226592993&lng=77.62197833042262&offset=CJhlELQ4KICIr62Ap7P/GDCnEzgE",
      // lat=17.722035268420797, lng=83.29750911811173, CJhlELQ4KICop96p3ZnSODCnEzgD, lat=12.9352403&lng=77.624532
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.722035268420797&lng=83.29750911811173",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.9",
          Referer: "https://www.swiggy.com/",
        },
      }
    );
    // console.log(response);
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

// app.get("/api/menu", async (req, res) => {
//   try {
//     const response = await fetch(
//       // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93629226592993&lng=77.62197833042262&offset=CJhlELQ4KICIr62Ap7P/GDCnEzgE
//       // lat=17.722035268420797, lng=83.29750911811173, CJhlELQ4KICop96p3ZnSODCnEzgD, lat=12.9352403&lng=77.624532
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576",
//       {
//         headers: {
//           "User-Agent":
//             "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
//           Accept: "application/json, text/plain, */*",
//           "Accept-Language": "en-US,en;q=0.9",
//           Referer: "https://www.swiggy.com/",
//         },
//       }
//     );
//     // console.log(response);
//     const text = await response.text(); // get raw response first

//     try {
//       const data = JSON.parse(text);
//       res.json(data);
//     } catch (jsonErr) {
//       console.error("⚠️ Swiggy returned HTML instead of JSON");
//       res.status(502).send("Swiggy API returned invalid response");
//     }
//   } catch (err) {
//     console.error("Error fetching Swiggy API:", err);
//     res.status(500).json({ error: "Failed to fetch Swiggy data" });
//   }
// });


app.get("/api/menu", async (req, res) => {
  try {
    const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=393840&catalog_qa=undefined&submitAction=ENTER"
      // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576";

    // 👉 Trick Swiggy into thinking it’s a normal browser
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        Referer: "https://www.swiggy.com/",
        Origin: "https://www.swiggy.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
      },
    });

    const text = await response.text();

    // 🧠 Check what you got before parsing
    if (text.startsWith("<!DOCTYPE") || text.startsWith("<html")) {
      console.error("❌ HTML response received (blocked by Swiggy).");
      return res
        .status(500)
        .json({ error: "Blocked by Swiggy — HTML response instead of JSON." });
    }

    const json = JSON.parse(text);
    res.json(json);
  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});




app.listen(5000, () =>
  console.log("✅ Server running on http://localhost:5000")
);
