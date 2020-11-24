import React from "react"
import { Container, Row, Col, Image } from 'react-bootstrap'
import './logos.scss'
import Salesforce from '../logos/salesforce.png'
import Adobe from '../logos/adobe.png'
import gensler from '../logos/gensler.gif'
import Grey from '../logos/grey.png'
import Gabi from '../logos/Gabi.png'
import Yoactiv from '../logos/Yoactiv.png'
import Lacrm from '../logos/Lacrm.png'



const Logos = () => {


   return (
      <div>
         
         <Container className="logos mt-5 mb-5" fluid="xs" > 
            <Row>
               <Col xs ={4}  class="mx-auto">
                  <a href="https://www.salesforce.com" target="_blank" style={{ textDecoration: "none" }}> <Image width="60" src={Salesforce} alt="salesforce" fluid /></a>
               </Col >
               <Col xs ={4} className="mx-auto ">
                  <a href="https://www.adobe.com/" target="_blank" style={{ textDecoration: "none" }}> <Image width="30" src={Adobe} alt="adobe" fluid/></a>
               </Col>
               <Col xs ={4} className="mx-auto">
                  <a href="https://www.grey.com/" target="_blank" style={{ textDecoration: "none" }}> <Image width="60" src={Grey} alt="grey" fluid/></a>
               </Col>
            </Row>

            <Row>
                 <Col xs ={4} className="mx-auto">
                  <a href="https://www.gensler.com/" target="_blank" style={{ textDecoration: "none" }}> <Image width="80" src={gensler} alt="gensler" fluid/></a>
               </Col>
               <Col xs ={4} className="mx-auto" >
                  <a href="http://studiostereogram.com/" target="_blank" style={{ textDecoration: "none" }}> <Image width="80" src={Gabi} alt="studio stereogram" fluid/></a>
               </Col>
               <Col xs ={4} className="mx-auto">
                  <a href="https://www.yoactiv.com/" target="_blank" style={{ textDecoration: "none" }}> <Image width="100" src={Yoactiv} alt="yoactiv" fluid/></a>
               </Col>
            </Row>

            <Row>
            <Col xs ={6} className="mx-auto">  <a href="https://www.lessannoyingcrm.com/" target="_blank" style={{ textDecoration: "none" }}> <Image width="60" src={Lacrm} alt="Lacrm" fluid/></a>
            </Col>
            <Col xs ={6} className="mt-auto">  
            </Col>
            </Row>
         </Container>
      </div>


   )
}

export default Logos