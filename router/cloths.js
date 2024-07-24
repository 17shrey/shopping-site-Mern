const express = require("express");

app=express();
app.use(express.json());

Gender = require("../model/gender");
Cloths = require("../model/cloths");



app.post("/gender",async(req,res)=>{
    const{Name}=req.body;
    if(!Name){
        return res.status(408).json({error:"Please enter all details."})
    }
    console.log("check1")

    try{
        const Nameexist = await Gender.findOne({Name})
        console.log("check2")
        if(Nameexist){
            return res.status(408).json({error:"Category is already exist"})
        }
        
        else{
            
            const gender =  new Gender({Name})
            await gender.save();
            return res.status(202).json({success:"Category added successfully."});
            
        }
    }catch(err){
        console.log(err)

    }
});



app.post("/cloths", async (req,res)=>{
    const{Name,image,Gender,Brand,Size,Price}=req.body;
    if(!Name || !image || !Gender || !Brand || !Size || !Price){
        return res.status(402).json({error:"please fill all the fields"})
    }
    else{
        const cloths = new Cloths({Name,image,Gender,Brand,Size,Price})
        await cloths.save();
        return res.status(202).json({success:"Added successfully."})

    }
})

app.get("/clothsBasedOnName/:category", async (req, res) => {
    const category = req.params.category;
    if (category == "All") {
        res.json(await Cloths.find({}));
    } else {
        res.json(await Cloths.find({ Gender: category }));
    }
});


app.get("/showcloth",async(req,res) => {
    res.json(await Cloths.find({}));
})


app.get("/showgender",async(req,res)=>{
    
    res.json(await Gender.find({}))
})


module.exports=app;