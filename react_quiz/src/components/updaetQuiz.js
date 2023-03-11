import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function UpdateQuiz() {
    const params = useParams()

    const [NomQuiz, setNomQuiz] = useState('')
    const [dem_date, setdem_date] = useState('')
    const [arr_date, setarr_date] = useState('')
    const [tentatives_pu, settentatives_pu] = useState('')
    

    useEffect(() => {
        console.log(params.id);
        getDetails()
    }, [])

    // useEffect(() => {
    //     setQsten(DATA.data.data.Qsten)
    //     setBonrps(DATA.data.data.Bonrps)
    //     setErr_rps1(DATA.data.data.err_rps[0])
    //     setErr_rps2(DATA.data.data.err_rps[1])
    //     setErr_rps3(DATA.data.data.err_rps[2])
    //     setDiffeculter(DATA.data.data.diffeculter)
    // }, [])
    

    const getDetails = async () => {
        const DATA = await axios.get(`/getquiz/${params.id}`)
        setNomQuiz(DATA.data.quizs.NomQuiz)
        setdem_date(DATA.data.quizs.dem_date)
        setarr_date(DATA.data.quizs.arr_date)
        settentatives_pu(DATA.data.quizs.tentatives_pu)
        // console.log(DATA.data.data.err_rps[0]+"     setdetails");
        // setDetails(DATA.data.data)
        // console.log(Details.err_rps[0]+"     setdetails");
    }
    
    const updateQuiz = async e => {
        e.preventDefault()
        const res = await axios.put(`/quiz/${params.id}`, { 
            NomQuiz: NomQuiz,
            dem_date: dem_date,
            arr_date: arr_date,
            tentatives_pu: tentatives_pu 
        })
        
        if(res){ 
            console.log(res)
            alert("quiz updated scssefully")
            window.location.pathname = '/AllQuizs'
    }
    }

    return (
        <div >
             <div className='all'>
                 <h1>Update Quiz</h1>
                 <Link to={`/AllQuizs`}>allQuizs</Link>
                </div>
                <div className='form2div'>
            <form className='form2'>
            <h3> update QUiz</h3>

            <label>Quiz Name:</label>
            <input type="text" onChange={e => setNomQuiz(e.target.value)}  value={NomQuiz} />
                <label>dep date :</label>
                <input type="date" onChange={e => setdem_date(e.target.value)}  value={dem_date} />
                <label>arr date  1:</label>
                <input type="date" onChange={e => setarr_date(e.target.value)} value={arr_date}/>
                <label>tentetive number:</label>
                <input type="number" onChange={e => settentatives_pu(e.target.value)}  value={tentatives_pu}/>

                <button onClick={updateQuiz} >Update Quiz</button>
            </form>
            </div>
        </div>
    )
}

export default UpdateQuiz