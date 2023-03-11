const router = require('express').Router()
const controller= require ('../controller/quizController')

router.post('/addqst', controller.cre_qst);
router.get('/allqsts', controller.getQsts);
router.delete('/qst/:id', controller.deleteQst)
router.get('/qst/:id', controller.getQst)
router.put('/qst/:id', controller.updateQst)
router.post('/addquiz', controller.cre_quiz);
router.get('/allquizs', controller.getQuizs);
router.delete('/quiz/:id', controller.deleteQuiz)
router.post('/addQstToQuiz', controller.addQstToQuiz);
router.get('/getetud', controller.getetud);
router.post('/addEtudiantToQuiz', controller.addEtudiantToQuiz);
router.get('/getEtudiantQuizs/:id', controller.getEtudiantQuizs);
router.get('/getquiz/:id', controller.getQuiz);
router.get('/getquizqsts/:id', controller.getquizqsts);
router.put('/quiz/:id', controller.updateQuiz)








module.exports = router