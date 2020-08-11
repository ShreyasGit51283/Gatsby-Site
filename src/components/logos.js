import React from "react"
import Salesforce from '../logos/salesforce.png'
import Adobe from '../logos/adobe.png'
import Gensler from '../logos/gensler.gif'
import Grey from '../logos/grey.png'
import Gabi from '../logos/gabi.png'
import Yoactiv from '../logos/yoactiv.png'



const Logos = () => {

  
    return (
    <div>
       <p>The awesome people and places, I’ve worked for.</p>
       <a href="https://www.salesforce.com" target="_blank"  style={{textDecoration:"none"}}> <img width="80" src = {Salesforce} alt="salesforce"/></a>
       <a href="https://www.adobe.com/" target="_blank"  style={{textDecoration:"none"}}> <img width="40" src = {Adobe} alt="salesforce"/></a>
       <a href="https://www.grey.com/" target="_blank"  style={{textDecoration:"none"}}> <img width="80" src = {Grey} alt="salesforce"/></a>
       <a href="http://studiostereogram.com/" target="_blank"  style={{textDecoration:"none"}}> <img width="90" src = {Gabi} alt="salesforce"/></a>
       <a href="https://www.yoactiv.com/" target="_blank"  style={{textDecoration:"none"}}> <img width="100" src = {Yoactiv} alt="salesforce"/></a>
    </div>


    )
  }
  
  export default Logos