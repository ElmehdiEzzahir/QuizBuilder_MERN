import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function ExpQuiz() {
    const {id}=useParams()
    const [Qsts, setQsts] = useState([])
    const [IsDeleted, setIsDeleted] = useState(false)
  
    const getQsts = async () => {
      const myData = await axios.get('/allqsts')
      console.log(myData.data.qsts)
      setQsts(myData.data.qsts)
    }

    useEffect(() => {
        getQsts()
    }, [])

    useEffect(() => {
        getQsts()
    }, [IsDeleted])

    


    const [Quizs, setQuizs] = useState([])
    const [etudiant, setEtudiant] = useState([])
  
    const getQuizs = async () => {
      const myData = await axios.get('/allquizs')
      console.log(myData.data.quizs)
      setQuizs(myData.data.quizs)
    }

    useEffect(() => {
        getQuizs()
    }, [])

    useEffect(() => {
        getQuizs()
    }, [IsDeleted])

   
    const getEtudiant = async () => {
        const myData = await axios.get('/getetud')
        console.log(myData.data.etudiant)
        setEtudiant(myData.data.etudiant)
      }

      useEffect(() => {
        getEtudiant()
    }, [])

    async function addqstToquiz  (qst_id)  {
        // e.preventDefault()
        const res = await axios.post('/addQstToQuiz', { 
            quiz_id:id,
            qst_arr: qst_id,
            
        })

        if(res){
            alert("question added successful");
            
        }   
    }
    async function addetudiantToquiz  (etudiant_id)  {
        // e.preventDefault()
        const res = await axios.post('/addEtudiantToQuiz', { 
            quiz_id:id,
            quiz_members: etudiant_id,
            
        })

        if(res){
            alert("etudiant added successful");
            
        }   
    }
    
    
    return (
      <div className="App">

    <div>
    {
          Quizs.map((d) => {
            return (
                <div className='post_container'>
                      <div className='title_cont'>
                            <div className='title_div'>
                          <p className="title">quiz name: {d.NomQuiz}</p>
                          </div>
                      </div>          
                </div>
              
            )
          })
        }
    </div>
        
                <div className='all_cont_qst'>
        {
          Qsts.map((d) => {
            return (
                <div className='quiz'>
                      <div className='title_cont'>
                            <div className='title_div'>
                          <p className="title">Qst: {d.Qsten}</p>
                          </div>
                      </div>  
                      <button id='addqsttoquiz' onClick={() =>addqstToquiz(d._id)} >Add this question to quiz</button>  
                </div> 
            )
          })
        }
        </div>

        <div className='all_cont_etu'>
        {
          etudiant.map((d) => {
            return (
                <div className='etu'>
                      <div className='title_cont'>
                            <div className='title_div'>
                          <p className="title"> full name: {d.fname} {d.lname} </p>
                          </div>
                      </div>  
                      <button id='addetu' onClick={() =>addetudiantToquiz(d._id)} >allow that etudiant to pass the quiz</button>  
                </div> 
            )
          })
        }
        </div>


      </div>
    );
}

export default ExpQuiz
