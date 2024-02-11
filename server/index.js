import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import TranslationAPI from "./internal/api.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/healthz",function(req,res) {
    res.send(`Server is Healthy.`)
})

app.post("/translate",async function(req,res) {
    console.log(req.body);

    const text = req.body.text;
    const to_lang = req.body.toLang;
    const translatedString =  await TranslationAPI(text,to_lang);
    res.status(200).json(translatedString);
})

app.listen(PORT,function() {
    console.clear();
    console.log("The Node.js Server For Text Translation Backend,is Live at Port - ",PORT);
})