const quizModel = require("../../models/quizModel")

const ongoingQuizzes = async function(req,res){
    try {
        let findQuizzes = await quizModel.find({isActive:true}).select({quizName:1,quizType:1,timeLimit:1,topicTags:1,totalScore:1,isActive:1,_id:0})
        if(findQuizzes.length==0) return res.status(404).send({ status: false, msg: "No Active quizzes" })
        return res.status(200).send({ status: true, data: findQuizzes })
    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}

module.exports = {ongoingQuizzes}