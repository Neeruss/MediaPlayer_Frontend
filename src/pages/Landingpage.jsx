import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigateByUrl=useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
      <Col></Col>
      <Col lg={5}>
        <h3 className='mb-5'>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat justo id sollicitudin bibendum. Vivamus fringilla sit amet velit eget imperdiet. Suspendisse blandit lorem id ante placerat euismod. Sed vitae volutpat elit. Sed sagittis tellus eget purus eleifend egestas a non dolor. Sed vitae felis massa. Aliquam erat volutpat. Nulla facilisi. Proin quis dui ligula.</p>
        <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-5'>Get Started<i class="fa-solid fa-arrow-right ms-3"></i></button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
      </Col>
    </Row>
    <div className='container mt-5 mb-5 d-flex align-items-center  justify-content-center flex-column'>
      <h3>Features</h3>
      <div className="cards d-flex align-items-center  justify-content-evenly w-100 mt-5 mb-5">
      <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      </div>
    </div>
    <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5 d-flex align-items-center justify-content-between w-100'>
      <div className='col-lg-5'>
        <h3 className='mb-5 fs-4 text-warning'>Simple fast and Powerful</h3>
        <p><span className='fs-5 fw-bolder'>Play Everything:</span>Once the statement of your main idea is out there, you will be explaining or providing validation points.This way, your main idea isn’t hanging loose.</p>
        <p><span className='fs-5 fw-bolder'>Play Everything:</span>Once the statement of your main idea is out there, you will be explaining or providing validation points. This way, your main idea isn’t hanging loose. </p>
        <p><span className='fs-5 fw-bolder'>Play Everything:</span>Once the statement of your main idea is out there, you will be explaining or providing validation points. This way, your main idea isn’t hanging loose.</p>
      </div>
      <div className='col-lg-5'>
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/WWr9086eWtY" title="LEO - Ordinary Person Lyric | Thalapathy Vijay, Anirudh Ravichander, Lokesh Kanagaraj, NikhitaGandhi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    </>
  )
}

export default Landingpage