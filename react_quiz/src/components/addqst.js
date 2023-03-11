import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './addqst.css'

function AddQst() {

    const [qsten, setQsten] = useState('')
    const [bonrps, setBonrps] = useState('')
    const [err_rps1, setErr_rps1] = useState('')
    const [err_rps2, setErr_rps2] = useState('')
    const [err_rps3, setErr_rps3] = useState('')
    const [diffeculter, setDiffeculter] = useState('')

    const createQst = async e => {
        e.preventDefault()
        const res = await axios.post('/addqst', { 
            Qsten: qsten,
            Bonrps: bonrps,
            err_rps: [err_rps1,err_rps2,err_rps3],
            diffeculter: diffeculter  
        })

        if(res){
            alert("Qst created successful");
            window.location.pathname = '/addQst'
        }
        
    }

    return (
       
        <div>
            
            <div className='all'>
            <h1>Add Qst page: </h1>
                 <Link to={`/allQsts`}>allQsts</Link>
                </div>

           
            <div className="form2div">
           
            <form className='form2'>
            <h3> new Qst</h3>
                <label>Qestion ennonce:</label>
                <input type="text" onChange={e => setQsten(e.target.value)} placeholder='Qestion ennonce...' />
                <label>Good answer:</label>
                <input type="text" onChange={e => setBonrps(e.target.value)} placeholder='Good answer...' />
                <label>Bad answer 1:</label>
                <input type="text" onChange={e => setErr_rps1(e.target.value)} placeholder='Bad answer 1...' />
                <label>bad answer 2:</label>
                <input type="text" onChange={e => setErr_rps2(e.target.value)} placeholder='Bad answer 3...' />
                <label>bad answer 3:</label>
                <input type="text" onChange={e => setErr_rps3(e.target.value)} placeholder='Bad answer 3...' />
                <label>difficulty:</label>
                <input type="text" onChange={e => setDiffeculter(e.target.value)} placeholder='difficulty...' />
                <button onClick={createQst} >Add Qst</button>
            </form>
            </div>
        </div>
    )
}

export default AddQst