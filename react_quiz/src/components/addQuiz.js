import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function AddQuiz() {

    const [quizName, setQuizName] = useState('')
    const [date_debut, setDate_debut] = useState('')
    const [date_Fin, setDate_fin] = useState('')
    const [tentatives_pu, setTentatives_pu] = useState('')


    const createQuiz = async e => {
        e.preventDefault()
        const res = await axios.post('/addquiz', { 
            NomQuiz: quizName,
            dem_date: date_debut,
            arr_date: date_Fin,
            tentatives_pu: tentatives_pu 
        })

        if(res){
            alert("Quiz created successful");
            window.location.pathname = '/addQuiz'
        }   
    }

    return (
       
        <div>
           
            
            <div className="form2div">
            <form className='form'>
            <h3> Nouveau Quiz</h3>
                <label>Quiz name:</label>
                <input type="text" onChange={e => setQuizName(e.target.value)} placeholder='Quiz name...' />
                <label>dem_date :</label>
                <input type="date" onChange={e => setDate_debut(e.target.value)} placeholder='dem_date...' />
                <label>arr_date:</label>
                <input type="date" onChange={e => setDate_fin(e.target.value)} placeholder='arr_date...' />
                <label>tentatives par utilisateur:</label>
                <input type="number" onChange={e => setTentatives_pu(e.target.value)} placeholder='tentatives nombre...' />
               
                <button onClick={createQuiz} >Add Quiz</button>
            </form>
            </div>
        </div>
    )
}

export default AddQuiz