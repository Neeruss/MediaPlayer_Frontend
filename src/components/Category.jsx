import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { addCategory, getAllCategory, getVideo, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row,Col } from 'react-bootstrap';
import Videocard from './Videocard';


function Category() {
    const [categoryName,setCategoryName]=useState({})
    const [allCategory,setAllcategory]=useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAddCategory=async()=>{
      console.log(categoryName);
      if(categoryName)
      {
        let body={
        categoryName,
        allVideo: []
        }
        const response=await addCategory(body)
        console.log(response);
        if(response.status>=200 && response.status<300)
        {
          toast.success('Category successfully added')
          setCategoryName("")
          handleClose()
        }
        else
        {
          console.log(response);
          toast.error("something went wrong . Please try again later")
        }
      }
      else
      {
         toast.warning('please fill category name')
      }
    }
    const getCategory=async()=>{
      const {data}=await getAllCategory()
      /*console.log(data);*/
      setAllcategory(data)
    }
    console.log(allCategory);
    useEffect(()=>{
      getCategory()
    },[])
    const dragover=(e)=>{
      e.preventDefault()
      console.log('inside dragover');
    }
    const videoDrop=async(e,categoryId)=>{
      console.log(`droped inside the categoryid ${categoryId}`);
      const videoid=e.dataTransfer.getData("videoID")
      console.log(videoid);
      const {data}=await getVideo(videoid)
      console.log(data);
      let selectedCategory=allCategory?.find(item=>item.id===categoryId)
      console.log(selectedCategory);
      selectedCategory.allVideo.push(data)
      console.log(selectedCategory);
      await updateCategory(categoryId,selectedCategory)
      getCategory()
    }
  return (
    <>
    <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>
    </div>
    { allCategory?.length>0?
    allCategory?.map((item)=>(
      <div className='m-5 border border-secondary rounded p-3'>
      <div className="d-flex justify-content-between align-items-center" droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <h6>{item.categoryName}</h6>
          <Button  className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></Button>
      </div>
      <Row>
        <Col sm={12}>
          {
            item.allVideo?.length>0?
            item.allVideo.map(card=>(<Videocard displayVideo={card}/>))
            :<p>Nothing to display</p>
          }
        </Col>
      </Row>
      </div>)):<p>Nothing to display</p>
    }
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil me-2 text-warning"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary p-3 rounded'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Category ID" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Enter Category Name" />
          </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='dark' autoClose={2000}/>

    </>
  )
}

export default Category