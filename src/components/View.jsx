import React, { useEffect, useState } from 'react'
import Videocard from '../components/Videocard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllVideos } from '../services/allAPI';

function View({uploadVideoStatus}) {
  const [allVideo,setAllVideo]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  const getAllUploadedVideos=async()=>{
      const response=await getAllVideos()
      const {data}=response
      /*console.log(data);*/
      setAllVideo(data)
  }
  console.log(allVideo);
  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus,deleteVideoStatus])
  return (
    <>
    <Row>
      {allVideo.length>0?
        allVideo?.map((video)=>(<Col sm={12} md={6} lg={4} xl={3}>
        <Videocard displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
        </Col>))
        :
        <p>Nothing to dispaly</p>
      }
    </Row>
    </>
  )
}

export default View