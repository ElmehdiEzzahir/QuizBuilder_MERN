
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function PassQuiz() {
    const {id}=useParams()
      const [quiz, setQuiz] = useState([])
      const [quizqsts, setQuizsqts] = useState([])
      const [answers, setAnswers] = useState({});
const [submitClicked, setSubmitClicked] = useState(false);
let[score,setScore]=useState(0)

  const getQuiz = async () => {
    const myData = await axios.get(`/getquiz/${id}`)
    console.log(myData.data.quizs)
    setQuiz(myData.data.quizs)
  }
  const getQuizqsts = async () => {
    const myData = await axios.get(`/getquizqsts/${id}`)
    console.log(myData.data.quizqsts+"quiz qssts")
    setQuizsqts(myData.data.quizqsts)
  }

  useEffect(() => {
    getQuiz()
}, [])

useEffect(() => {
    getQuizqsts()
}, [])

const handleChange=(e,questionId)=>{
    setAnswers({...answers,[questionId]:e.target.value})
}
const checkAnswers = () => {
    let scor=0
    quizqsts.map((question) => {
    if (answers[question._id] && answers[question._id] === question.Bonrps) {
      scor++
    }
    });
    setSubmitClicked(true)
    console.log(scor)
    setScore(scor)
  }


    return (
<div>
<h1>are you readdy to pass the quiz: {quiz.NomQuiz} </h1>
<h2>you can try {quiz.tentatives_pu} times</h2>
<h3>you have until {quiz.arr_date} to pass that quiz</h3>

<div className='score' >
    <form className='form3'>
        {quizqsts.map((d) => {
          return (
          <div>
              <p >{d.Qsten}</p>
                  <div>   
                          <input type="radio"
                          id={`answer-${d._id}-1`}
                          value={d.Bonrps}
                          checked={answers[d._id]===d.Bonrps} 
                          onChange={(e)=>handleChange(e,d._id)}
                           />
                          <label htmlFor={`answer-${d._id}-1`}> {d.Bonrps}</label>
                  </div>

                  <div>   
                          <input type="radio"
                          id={`answer-${d._id}-2`}
                          value={d.err_rps[0]}
                          checked={answers[d._id]===d.err_rps[0]} 
                          onChange={(e)=>handleChange(e,d._id)} 
                          />
                          <label htmlFor={`answer-${d._id}-1`}> {d.err_rps[0]}</label>
                    
                  </div>

                  <div>   
                          <input  type="radio"
                          id={`answer-${d._id}-1`}
                          name="difficulty"
                          value={d.err_rps[1]}
                          checked={answers[d._id]===d.err_rps[1]} 
                          onChange={(e)=>handleChange(e,d._id)}
                           />
                          <label htmlFor={`answer-${d._id}-1`}>{d.err_rps[1]}</label>
                    
                 </div>
                 <div>   
                          <input type="radio"
                          id={`answer-${d._id}-2`}
                          value={d.err_rps[2]}
                          checked={answers[d._id]===d.err_rps[2]} 
                          onChange={(e)=>handleChange(e,d._id)}
                           />
                          <label htmlFor={`answer-${d._id}-1`}> {d.err_rps[2]}</label>
                  </div>



            </div>   
                           ) })}

<button type='button' onClick={checkAnswers}>Submit your answers</button>
                              {submitClicked && <h3>Your score is: {score}</h3>}
    </form>
  </div>

</div>

        )
    }
    

    export default PassQuiz