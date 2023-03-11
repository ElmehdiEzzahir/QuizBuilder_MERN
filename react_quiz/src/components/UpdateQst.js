import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function UpdateQst() {
    const params = useParams()

    const [qsten, setQsten] = useState('')
    const [bonrps, setBonrps] = useState('')
    const [err_rps1, setErr_rps1] = useState('')
    const [err_rps2, setErr_rps2] = useState('')
    const [err_rps3, setErr_rps3] = useState('')
    const [diffeculter, setDiffeculter] = useState('')
    const [Details, setDetails] = useState({})

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
        const DATA = await axios.get(`/qst/${params.id}`)
        setQsten(DATA.data.data.Qsten)
        setBonrps(DATA.data.data.Bonrps)
        setErr_rps1(DATA.data.data.err_rps[0])
        setErr_rps2(DATA.data.data.err_rps[1])
        setErr_rps3(DATA.data.data.err_rps[2])
        setDiffeculter(DATA.data.data.diffeculter)
        // console.log(DATA.data.data.err_rps[0]+"     setdetails");
        // setDetails(DATA.data.data)
        // console.log(Details.err_rps[0]+"     setdetails");
    }
    
    const updatePost = async e => {
        e.preventDefault()
        const res = await axios.put(`/qst/${params.id}`, { 
            Qsten: qsten,
            Bonrps: bonrps,
            err_rps: [err_rps1,err_rps2,err_rps3],
            diffeculter: diffeculter 
        })
        
        if(res) window.location.pathname = '/allQsts'
    }

    return (
        <div >
             <div className='all'>
                 <h1>Update Qst</h1>
                 <Link to={`/allQsts`}>allQsts</Link>
                </div>
                <div className='form2div'>
            <form className='form2'>
            <h3> update post</h3>
            <label>Qst statement:</label>
            <input type="text" onChange={e => setQsten(e.target.value)} placeholder='Qst statement...' value={qsten} />
                <label>God answer :</label>
                <input type="text" onChange={e => setBonrps(e.target.value)} placeholder='God answer ...' value={bonrps} />
                <label>bad answer  1:</label>
                <input type="text" onChange={e => setErr_rps1(e.target.value)} placeholder='bad answer 1...' value={err_rps1}/>
                <label>bad answer 2:</label>
                <input type="text" onChange={e => setErr_rps2(e.target.value)} placeholder='bad answer 2...' value={err_rps2}/>
                <label>bad answer 3:</label>
                <input type="text" onChange={e => setErr_rps3(e.target.value)} placeholder='bad answer 3...' value={err_rps3} />
                <label>diffeculter:</label>
                <input type="text" onChange={e => setDiffeculter(e.target.value)} placeholder='diffeculter...' value={diffeculter} />

                <button onClick={updatePost} >Update Qst</button>
            </form>
            </div>
        </div>
    )
}

export default UpdateQst