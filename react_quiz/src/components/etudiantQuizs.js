import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function EtudiantQuizs() {
    const {id}=useParams()
      const [etudiantquiz, setEtudiantQuiz] = useState([])

  const getEtudiantQuizs = async () => {
    const myData = await axios.get(`/getEtudiantQuizs/${id}`)
    console.log(myData.data.etudiant)
    setEtudiantQuiz(myData.data.etudiantquiz)
  }

  useEffect(() => {
    getEtudiantQuizs()
}, [])

    

    return (
       
        <div>
           
           <div className='all_cont'>
        {
          etudiantquiz.map((d) => {
            return (
                <div className='post_container'>
                      <div className='title_cont'>
                            <div className='title_div'>
                          <p className="title">quiz name:  {d.NomQuiz}</p>
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
                      <Link to={`/passquiz/${d._id}`} key={d._id} >
                      <p>passer ce quiz</p>
                    </Link>
                  
                    
                </div>
              
            )
          })
        }
        </div>


        </div>
    )
}

export default EtudiantQuizs