import { Url } from "../models/url.js";
import shortid from "shortid";

export const handleShortUrl = async (req, res) => {
  const longurl = req.body.longurl;

  const shortcode = shortid.generate();
  const fullshorturl = `http://localhost:3000/${shortcode}`;

  // Save shortcode and longurl to MongoDB
  const newurl = new Url({ shortcode, longurl });
  await newurl.save();

  console.log("New URL created:", newurl);

  // Pass short URL to frontend
  res.render("index.ejs", { shorturl: fullshorturl });
};


export const getorignal = async (req, res) => {
    const shortcode = req.params.shortcode;
    const ourl= await Url.findOne({shortcode});

     if(ourl){
        res.redirect(ourl.longurl);
     }else{
        res.status(404).send("URL not found");
     }
   
}