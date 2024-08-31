const ratingService=require("../services/rating.service.js");

const createRating=async(res,req)=>{

    const user=req.user;
    try {
        const rating=await ratingService.createRating(req.body,user);
        return res.status(201).send(rating);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}


const getAllRatings=async(res,req)=>{
    const productId=req.params.id;
    const user=req.user;
    try {
        const rating=await ratingService.getAllRatings(productId);
        return res.status(201).send(rating);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}


module.exports={
    createRating,
    getAllRatings
};