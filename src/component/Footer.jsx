import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return (
<div style={{backgroundColor:'rgba(242,242,242,255)'}}> 
        
        <Row className='pt-5'>
           <Col lg={6}>
               <Row>
                 <Col sm={12} lg={4}>
                 <ul style={{ listStyle:'none'}}>
                  <li>Mobile / Handhelds</li>
                  <li> Phone    </li>
                  <li>Games</li>
                  <li> For Home</li>
                  <li> Surface Laptop 5</li>
                  <li> Surface Laptop Go 2</li>
                   <li>Windows 11 apps</li>
                 </ul>
                 </Col>
                 <Col sm={12} lg={4}>
                   <ul style={{ listStyle:'none'}}>
                     <li>Microsoft Store</li>
                     <li>For Students</li>
                     <li>Download Center</li>
                     <li>Workstations</li>
                     <li>AIoT & Industrial Solution
</li>
                     <li>Order tracking</li>
                   </ul>
                 </Col>
                 <Col sm={12} lg={4}>
                     <ul style={{ listStyle:'none'}}>
                       <li>Education</li>
                       <li>Microsoft in education</li>
                       <li>Devices for education</li>
                       <li>Microsoft Teams for Education</li>
                       <li>Microsoft 365 Education</li>
                       <li>Office Education</li>
                       <li>Educator training and development</li>
                       <li>Deals for students and parents</li>
                       <li>Azure for students</li>
                     </ul>
                 </Col>
               </Row>
           </Col>
   
   
           <Col lg={6}>
                <Row>
                  <Col sm={12} lg={4}>
                     <ul style={{ listStyle:'none'}}>
                       <li>Business</li>
                       <li>Microsoft Cloud</li>
                       <li>Microsoft Security</li>
                       <li>Azure</li>
                       <li>Dynamics 365</li>
                       <li>Microsoft Advertising</li>
                       <li>Microsoft Industry</li>
                       <li>Microsoft Teams</li>
                     </ul>
                  </Col>
                  <Col sm={12} lg={4}>
                     <ul style={{ listStyle:'none'}}>
                        <li>Developer & IT</li>
                        <li>Developer Center</li>
                        <li>Documentation</li>
                        <li>Microsoft Learn</li>
                        <li>Microsoft Tech Community</li>
                        <li>Azure Marketplace</li>
                        <li>AppSource</li>
                        <li>Visual Studio</li>
                     </ul>
                  </Col>
                  <Col sm={12} lg={4}>
                       <ul style={{ listStyle:'none'}}>
                         <li>Company</li>
                         <li>Careers</li>
                         <li>About Microsoft</li>
                         <li>Company news</li>
                         <li>Privacy at Microsoft</li>
                         <li>Security</li>
                         <li>Sustainability</li>
                       </ul>
                  </Col>
                </Row>
           </Col>
         </Row>  
   
       </div>
  )
}

export default Footer