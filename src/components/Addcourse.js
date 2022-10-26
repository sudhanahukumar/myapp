import React, { Fragment ,useEffect, useState} from "react";
import { AxiosContext } from "react-axios/lib/components/AxiosProvider";
import { Form, FormGroup } from "reactstrap";
import { Button } from "reactstrap";
import axios  from "axios";
import base_url from "../api/bootapi";
import { toast, ToastContainer } from "react-toastify";
const Addcourse=()=>{
    useEffect(()=>{
        document.title="Add courses || Courses App";
     },[])



     const[course,setCourses]=useState({});


// Form Hnadller Method



  const handleForm=(e)=>{
console.log(course);
postDataToServer(course);
e.preventDefault();
  }
// remember here "course " data is of backend.
// e varible used on handleform(e) method is of frontend form.
//   creating method to post data on server
const postDataToServer=(data)=>{
    axios.post(`${base_url}/courses`,data).then(
        (response)=>{
console.log(response);
console.log("success");
toast.success(" Great!Course has been added succefully");
        },
        (error)=>{
console.log(error);
toast.error("oops! course has not been added ");
console.log("error");
        }
    );
    

}


 return(
        <Fragment>
            <ToastContainer/>
            <h1 className="text-center my-3">Fill the form for course details</h1>
         <Form onSubmit={handleForm} className="text-center">
            <FormGroup  className="my-3">
                <label  style={{width:"75%"}} for="userId"><h6 style={{textAlign:'left'}}>Course Id</h6></label>{' '}
                <input style={{width:"75%"}} type="text" placeholder="Enter Course" name="userId" id="userId" 
                onChange={(e)=>{
                    setCourses({...course, id:e.target.value});
                }}

                // here id varible is on database on server on mysql ,and e.target.value willl fetch data from the form we made on fronend
                
                />
            </FormGroup>
            <FormGroup className="my-3 ">
                <label style={{width:"75%"}} for="title"><h6 style={{textAlign:'left'}}>CourseI Title</h6></label>{' '}
                <input style={{width:"75%"}} type="text" placeholder="Enter Course Name" name="title" id="title"  
                onChange={(e)=>{
                    setCourses({...course,coursename:e.target.value});
                }}
                />
            </FormGroup>
            <FormGroup className="my-3">
                <label  style={{width:"75%"}} for="description"><h6 style={{textAlign:'left'}}>Course Description</h6></label>{' '}
                <input style={{width:"75%" }}  type="textarea" placeholder="Enter Course Description" name="description" id="description" 
                onChange={(e)=>{
                    setCourses({...course,coursedetails:e.target.value});
                }}
                
                />
            </FormGroup>
<FormGroup>

            <Button  type="submit" color="primary" >Submit</Button>{'  '}
            <Button color="danger ml-2"  
          type="reset"
            >Clear</Button>
         
</FormGroup>


            </Form>
        </Fragment>
        
    );

}
export default Addcourse;