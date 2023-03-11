import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AllQwizs() {
    const [Quizs, setQuizs] = useState([])
    const [IsDeleted, setIsDeleted] = useState(false)
  
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

    const deleteQuiz = async (myid) => {
        await axios.delete(`/quiz/${myid}`)
        setIsDeleted(!IsDeleted)
    }
    
    return (
      <div className="App">
        <div className='all'>
                 <h1>All Quizs page</h1>
                 <Link to={`/addQuiz`}>add new  Quiz</Link>
                </div>
                <div className='all_cont'>
        {
          Quizs.map((d) => {
            return (
                <div className='Qwiz_container'>
                      <div className='title_cont'>
                            <div className='title_div'>
                          <p className="title">quiz name: {d.NomQuiz}</p>
                          </div>
                          <div className="btn_container">
                            <Link to={`/updateQuiz/${d._id}`}>update</Link>
                            <button onClick={() => deleteQuiz(d._id)} >delete</button>
                        </div>
                      </div>  
                      <div className='spn'>
                      <span>dem_date: {d.dem_date}</span>
                      <div className='resume'>
                      <span>arr_date:</span>
                      <p>{d.arr_date}</p>
                      <span>tentatives_pu:</span>
                      <p>{d.tentatives_pu}</p>
                      </div>
                      </div>
                      <Link id='qzd' to={`/Quizdetails/${d._id}`} key={d._id} >
                      <p>add qsts and allow users to pass that quiz</p>
                    </Link>
                  
                    
                </div>
              
            )
          })
        }
        </div>
      </div>
    );
}

export default AllQwizs
