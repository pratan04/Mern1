const Workout=require('../models/workoutModel')


const mongoose=require('mongoose')


const getWorkouts=async(req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)

}


const getWorkout=async(req,res)=>{
    const {id} =req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }

    const Workout = await workout.findById(id)
    if(!Workout){
        res.status(404).json({error: 'no such workout'})
    }
    res.status(200).json(Workout)
}




const createWorkout=async (req,res)=>{
    const {title,load,reps}=req.body

    try {
        const Workout=await workout.create({title,load,reps})
        res.status(200).json(Workout)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}


const deleteWorkout =async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }

    const workout=await findOneAndDelete({_id: id})

    if(!workout){
        return res.status(400).json({error:'no such workout'})
    }
    res.status(200).json(workout)
}


const updateWorkout =async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id:id},{...req.body
    })

    if(!workout){
        return res.status(400).json({error:'no such workout'})
    }
    res.status(200).json(workout)
}

module.exports = {getWorkouts,getWorkout,createWorkout,deleteWorkout,updateWorkout
    
}