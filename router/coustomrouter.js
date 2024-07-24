const express = require("express");
const bcrypt = require("bcryptjs");
const mongoose=require("mongoose");
const Crud = require("../model/crud");

app = express();


app.use(express.json())
User= require('../model/user')
Employee = require('../model/employee')
Prime = require('../model/primemember')
Category = require('../model/category')






app.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all mandatory fields" });
  }

  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(422).json({ error: "Email ID is already used" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Password and confirm password must be the same" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      return res.status(201).json({ success: "Registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
  res.json({ message: req.body });

});




app.post("/employeesave", async (req, res) => {
  const { employee_id, employee_name, employee_age, salary, experience } = req.body;

  if (!employee_id || !employee_name || !employee_age || !salary || !experience) {
    return res.status(422).json({ error: "Please fill all mandatory fields" });
  }

  try {
    const employeeExists = await Employee.findOne({ employee_id: employee_id });
    if (employeeExists) {
      return res.status(422).json({ error: "This employee ID is already registered." });
    }

    else {
      const employee = new Employee({ employee_id, employee_name, employee_age, salary, experience });
      await employee.save();
      //Before password is saved, first encrypt it  encryption

      return res.status(201).json({ success: "Employee registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }

  res.json({ message: req.body });
});





app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.log('checkpoint')
      return res
        .status(422)
        .json({ error: "Please fill all mandatory fields." });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatched = await bcrypt.compare(password, userLogin.password);
      if(isMatched){
        console.log(email)

      // const passmatch=await (password == userLogin.password) 
      // if(passmatch){
        console.log('checkpoint1')
        
        console.log(userLogin);
        return res.status(201).json({ message: "User logged in successfully." });
      } else {
        return res.status(422).json({ message: "Incorrect password incorrect." });
      }
    } 
    else {
      return res.status(422).json({ message: "Invalid credntials entered." });
    }
  }
   catch (err) {
    console.log(err);
  }
});


app.post("/category", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    const category = new Category({ name });
    await category.save();

    return res.status(201).json({ success: "Category added successfully" });

  }

  try {
    const CategoryExists = await Category.findOne({ name: name });
    if (CategoryExists) {
      return res.status(422).json({ error: "This CAtegory is already registered." });
    }


    else {
      const category = new Category({ name });
      await category.save();
      //Before password is saved, first encrypt it  encryption

      return res.status(201).json({ success: "Category added successfully" });
    }
  } catch (err) {
    console.log(err);
  }

  res.json({ message: req.body });
});

app.get("/categories", async (req, res) => {
  res.json(await Category.find({}));
});


app.post("/categoryinsert", async (req, res) => {
  var { name } = req.body;
  console.log(req.body);

  if (!name) {
    return res.status(422).json({ error: "Please fill all mandatory fields" });
  }

  try {
    const categoryExists = await Category.findOne({ name: name });
    if (categoryExists) {
      return res.status(422).json({ error: "Category entry already exists" });
    } else {
      const cat = new Category({
        name,
      });

      await cat.save();

      return res.status(201).json({ success: "Category saved successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/categorydelete", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(422)
      .json({ error: "Please fill category name to delete." });
  }

  try {
    const isCategoryExist = await Category.findOne({ name: name });
    if (isCategoryExist) {
      await Category.findOneAndRemove ({ name: isCategoryExist.name });
      return res.status(201).json({ success: "Category deleted successfully" });
    } else {
      return res.status(422).json({ error: "Category does not exist." });
    }
  } catch (err) {
    console.log(err);
  }
});


app.post('/usersave', async (req,res) =>{
  const{first_name,last_name,address,adhar_no}=req.body;
  if( !first_name || !last_name || !address || !adhar_no){
    return res.status(422).json({error:"please fill all details."})
  }

  try{
    const adharExist = await Crud.findOne({adhar_no:adhar_no})
    if(adharExist){
      return res.status(422).json({error:"adhar no is already entered."})
    }else{
      const crud = new Crud ({first_name,last_name,address,adhar_no})
      await crud.save()
      return res.status(201).json({success:"Entry saved successfully."})
    }
  }catch (err){
    console.log(err)
  };
  

})

app.put("/update/:id", async (req, res) => {
  const crudId = req.params.id;
  const {first_name,last_name,address,adhar_no } = req.body;

  if (!first_name || !last_name || !address || !adhar_no) {
    return res.status(422).json({ error: "Please fill all mandatory fields" });
  }

  try {
    const updatedProduct = await Crud.findByIdAndUpdate(
      crudId,
      { first_name,last_name,address,adhar_no },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json({ success: "Product updated successfully", updatedProduct });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


app.delete("/crud/:id",async(req,res)=>{
  console.log(req.params.id)
  
  if (req.params.id === null) {
    console.log("id not present");
    return res.status(403).json({ error: "id not present" });
  } else {
    const data = await Crud.findByIdAndDelete(req.params.id);
    console.log(data);
    return res.status(201).json({ success: "delete request" });
  }
})

// app.put("/update/:id",async(req,res)=>{
//   console.log(req.params.id)
//   const data = await Crud.findByIdAndUpdate(req.params.id)
//   res.json(data)
//   console.log(data)
//   // res.json(await Crud.find({}))
// })

// app.put("/update/:id", async (req, res) => {
//   console.log(req.params.id);
//   const data = await Crud.findByIdAndUpdate(req.params.id, 
//     data.first_name=req.body.first_name,
//     req.body.last_name=data.last_name=req.body.last_name,
//     data.address=req.body.address,
//     data.adhar_no=req.body.adhar_no, { new: true });
//   res.json(data);
//   console.log(data)
// });


app.post('/updateall/:id', async (req,res) =>{
  console.log(req.params.id)
  const{first_name,last_name,address,adhar_no}=req.body;
  if( !first_name || !last_name || !address || !adhar_no){
    return res.status(422).json({error:"please fill all details."})
  }

  try{
    const data = await Crud.findByIdAndUpdate(req.params.id)
    if(data == null){
      return res.status(422).json({error:"adhar no is already entered."})
    }else{
      const crud = new Crud ({first_name,last_name,address,adhar_no})
      await crud.save()
      return res.status(201).json({success:"Entry saved successfully."})
    }
  }catch (err){
    console.log(err)
  };
  

})

app.put("/updatecrud", async (req, res) => {
  
  const {id,first_name,last_name,address,adhar_no}=req.body;
  
  const data=await Crud.updateOne({_id:id},first_name,last_name,address,adhar_no);
  res.send({success:"data updated successfully", data: data})
});



app.get("/showcrud", async (req, res) => {
  res.json(await Crud.find({}));
});

module.exports = app;




