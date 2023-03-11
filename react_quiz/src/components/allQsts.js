import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AllQsts() {
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

    const deletePost = async (myid) => {
        await axios.delete(`/qst/${myid}`)
        setIsDeleted(!IsDeleted)
    }
    
    return (
      <div className="App">
        <div className='all'>
                 <h1>All Qsts page</h1>
                 <Link to={`/addQst`}>add new Qst</Link>
                </div>
                <div className='all_cont'>
        {
          Qsts.map((d) => {
            return (
                <div className='Qst_container'>
                      <div className='title_cont'>
                            <div className='title_div'>
                          <p className="title">Qst statement: {d.Qsten}</p>
                          </div>
                        
                      </div>  
                      <div className='spn'>
                      <span>Bonrps: {d.Bonrps}</span>
                      <div className='resume'>
                      <p>Bad answer1: {d.err_rps[0]}</p>
                      
                      <p>Bad answer2: {d.err_rps[1]}</p>
                     
                      <p>Bad answer3: {d.err_rps[3]}</p>
                      
                      <span>diffeculter:</span>
                      <p>{d.diffeculter}</p>
                      </div>
                      </div>
                      <div className="btn_container">
                            <Link to={`/updateQst/${d._id}`}>update</Link>
                            <button onClick={() => deletePost(d._id)} >delete</button>
                        </div>
                    
                </div>
              
            )
          })
        }
        </div>
      </div>
    );
}

export default AllQsts
