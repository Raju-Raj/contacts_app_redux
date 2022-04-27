import React, { useState,useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addContact,editContact } from '../redux/actions/contactAction';

const AddEditContact = ({editContacts}) => {


    useEffect(()=>{
        setContact(editContacts)
    },[editContacts])

    const contacts=useSelector((state)=>state.contacts)

    

    const dispatch=useDispatch()

    const [contact,setContact]=useState({
        name:"",
        phoneNumber:"",
        email:""
    });

    const {name,phoneNumber,email}=contact

    const changeHandle=(e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }

    const handleSubmit=()=>{
        if (contact.id !== null && contact.id!==undefined){
            dispatch(editContact(contact,contact.id))
            let oldContact=contact
            oldContact.id=null
            setContact(oldContact)
        }else{
            dispatch(addContact(contact))
        }
        
        setContact({
            name:"",
            phoneNumber:"",
            email:""
        })
        closeRef.current.click();
    }

    const closeRef=useRef();

  return (
         <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Add/Edit Contact</h5>
        <button type="button" ref={closeRef} className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

    <form>
  <div className="form-group">
    <label >Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput1" aria-describedby="emailHelp" placeholder="Name" value={name} name="name" onChange={changeHandle}/>
  </div>
  <div className="form-group">
    <label >Phone Number</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Phone Number" value={phoneNumber} name="phoneNumber" onChange={changeHandle}/>
  </div>
  <div className="form-group">
    <label >Email</label>
    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Email" value={email} name="email" onChange={changeHandle}/>
  </div>
  
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary" onClick={()=>handleSubmit()}>Submit</button>
      </div>
    </div>
  )
}

export default AddEditContact