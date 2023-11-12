import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'
import Button from 'react-bootstrap/Button';



function WatchHistory() {
  const [history,setHistory]=useState([])
  const getHistory=async()=>{
    const {data}=await getAllHistory()
    /*console.log(data);*/
    setHistory(data)
  }
  const removeHistory=async(item)=>{
    await deleteHistory(item)
    getHistory()
  }
  useEffect(()=>{
    getHistory()
  },[])
  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
      <h3>WatchHistory</h3>
      <Link to={'/home'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}><i class="fa-solid fa-arrow-left fa-beat me-2"></i>Back to Home</Link>
    </div>
    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {history.length>0? 
       history.map((item)=>(
       <tr>
          <td>{item.id}</td>
          <td>{item.caption}</td>
          <td><a href={item.embedLink}>{item.embedLink}</a></td>
          <td>{item.timeStamp}</td>
          <td><Button onClick={()=>removeHistory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></Button></td>
        </tr>)):
        <p>Nothing to Display</p>}
      </tbody>
    </table>
    </>
  )
}

export default WatchHistory