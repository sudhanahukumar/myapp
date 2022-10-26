
import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import {Row,Col} from "reactstrap";


import {BrowserRouter  ,Routes,Route} from "react-router-dom";
import { Container} from "reactstrap";
import Home from "./components/Home";
import Addcourse from "./components/Addcourse";
import Allcourses from "./components/Allcourses"





function App() {
 
  return (
    
    <BrowserRouter>
     <Header/>
     <Container>
      <Row>
        <Col md={4}><Menu/>   </Col>
  <Col md={8}>    
   <Routes>
   
      
     <Route path="/" element={<Home/>}/>
     <Route path="/add-course" element={<Addcourse/>}/>
     <Route path="/view-course" element={<Allcourses/>}/>
     <Route path="/contact" element={<h1>Contact Here</h1>}/>
     <Route path="/about" element={<h1>About Us</h1>}/>

   
   </Routes>
   
    </Col>
      </Row>
     </Container>

      </BrowserRouter>
    

  );
}

export default App;
