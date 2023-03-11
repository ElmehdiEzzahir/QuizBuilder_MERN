const Qst = require('../models/qstModel');
const Quiz = require('../models/quizModel')
const User = require('../models/loginModel');
exports.cre_qst= async (req, res) => {

    // const { Qsten, Bonrps, err_rps, diffeculter } = req.body;
    console.log(req.body)
    const qst = new Qst({
        Qsten: req.body.Qsten,
        Bonrps: req.body.Bonrps,
        err_rps: req.body.err_rps,
        diffeculter: req.body.diffeculter
    })
    await qst.save()
    // console.log(Qsten)

    // await Qst.create({
    //     Qsten,
    //     Bonrps,
    //     err_rps,
    //     diffeculter,
    //   });
    return res.json({ msg: 'Qst added successfuly!!' })
}
exports.getQsts= async(req,res)=>{
    const qsts = await Qst.find()
        return res.json({ qsts: qsts })
}
exports.deleteQst= async (req, res) => {
    const deletedPost = await Qst.findByIdAndDelete({ _id: req.params.id })
    return res.json({ data: deletedPost })
}
exports.getQst= async(req, res) => {
    const qst = await Qst.findOne({ _id: req.params.id })
    return res.json({ data: qst })
}

exports.updateQst= async (req, res) => {
    const updatedPost = await Qst.findByIdAndUpdate({ _id: req.params.id }, {
        Qsten: req.body.Qsten,
        Bonrps: req.body.Bonrps,
        err_rps: req.body.err_rps,
        diffeculter: req.body.diffeculter
    })
    return res.json({ data: updatedPost })
}

exports.cre_quiz= async (req, res) => {

    // const { Qsten, Bonrps, err_rps, diffeculter } = req.body;
    // console.log(req.body)
    const quiz = new Quiz({
        NomQuiz: req.body.NomQuiz,
        dem_date: req.body.dem_date,
        arr_date: req.body.arr_date,
        tentatives_pu: req.body.tentatives_pu
    })
    await quiz.save()
    console.log(quiz)

    // await Qst.create({
    //     Qsten,
    //     Bonrps,
    //     err_rps,
    //     diffeculter,
    //   });
    return res.json({ msg: 'quiz added successfuly!!' })
}

exports.getQuizs= async(req,res)=>{
    const quizs = await Quiz.find()
        return res.json({ quizs: quizs })
}
exports.deleteQuiz= async (req, res) => {
    const deletedQuiz = await Quiz.findByIdAndDelete({ _id: req.params.id })
    return res.json({ data: deletedQuiz })
}
exports.addQstToQuiz= async(req,res)=>{
    console.log(req.body.qst_arr)
    Quiz.findByIdAndUpdate(
        {_id: req.body.quiz_id},
        { $push: {"qst_arr": req.body.qst_arr}},
        {  safe: true, upsert: true},
          function(err, model) {
            if(err){
               console.log(err);
               return res.send(err);
            }
             return res.json(model);
         });
}
exports.getetud= async (req,res)=>{
    const etudiant=await User.find({type:"etudiant"})
    return res.json({etudiant:etudiant})
}
exports.addEtudiantToQuiz=async(req,res)=>{
    Quiz.findByIdAndUpdate(
        {_id: req.body.quiz_id},
        { $push: {"quiz_members": req.body.quiz_members}},
        {  safe: true, upsert: true},
          function(err, model) {
            if(err){
               console.log(err);
               return res.send(err);
            }
             return res.json(model);
         });
}
exports.getEtudiantQuizs =async(req,res)=>{
    console.log( req.params.id +"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
    const etudiantquiz=await Quiz.find({quiz_members: req.params.id })
    return res.json({etudiantquiz:etudiantquiz})

}

exports.getQuiz= async(req,res)=>{
    const quizs = await Quiz.findOne({_id:req.params.id})
        return res.json({ quizs: quizs })
}

exports.getquizqsts= async(req,res)=>{
    const quizs = await Quiz.findOne({_id:req.params.id})
    qst_arr=quizs.qst_arr
    const quizqsts= await Qst.find({qst_arr:qst_arr})
        return res.json({ quizqsts: quizqsts })
}

exports.updateQuiz= async (req, res) => {
    const updatedPost = await Quiz.findByIdAndUpdate({ _id: req.params.id }, {
        NomQuiz: req.body.NomQuiz,
        dem_date: req.body.dem_date,
        arr_date: req.body.arr_date,
        tentatives_pu: req.body.tentatives_pu
    })
    return res.json({ data: updatedPost })
}

