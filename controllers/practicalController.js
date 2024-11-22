// import practicalModel from '../models/Practical.js';  
// import Subject from '../models/Subject.js';   
// export const createPractical = async (req, res) => {  
//   try {  
//     const {subjectId, title, description} = req.body;  

//     const subjectinfo= await Subject.findOne({name:subjectId});

//     const practicalObj = new practicalModel({  
//       subjectId:subjectinfo.id,  
//       title,
//       description ,
//       createdBy,
//       enrolledStudents
//     });  
   
    
//     const savedPracticals = await practicalObj.save();  
   
//     const updatedSubject =await Subject.findByIdAndUpdate( subjectinfo.id,  { $push: { practicals: savedPracticals._id } },  { new: true }  
//     )  .populate("practicals")  .exec();  
   
//     res.json({subjectId: updatedSubject });  
//   } catch (error) {  
//     res.status(500).json({ message: "Error while adding Practical" });  
//   }  
// };  
   
// export const getAllPracticals=async(req,res)=>{  
//   try{  
//     const practicals=await practicalModel.find()  
//     res.json({  
//         practicals 
// })  
// }  
// catch(error)  
// {  
// return res.status(400).json({ 
// error:"error while fetching post",  
// })  
// }  
// } 

import practicalModel from '../models/Practical.js';  
import Subject from '../models/Subject.js'
   
export const createPractical = async (req, res) => {

    try {

        const {subjectId, title, description,createdBy } = req.body;
        const subjectinfo = await Subject.findOne({ name: subjectId });

        const practicalobj = new practicalModel({
            subjectId:subjectinfo.id,
            title,
            description,
            createdBy
        });

        const savedpracticalObj = await practicalobj.save();

        res.json({

            savedpracticalObj,
            message: "Practical created successfully"
        });

    } catch (error) {

        console.log(error);

        res.json({

            error: "Error occured",
        });

    }
}
export const getAllPracticals=async(req,res)=>{  
  try{  
    const practicals=await practicalModel.find()  
    res.json({  
        practicals 
})  
}  
catch(error)  
{  
return res.status(400).json({ 
error:"error while fetching post",  
})  
}  
} 