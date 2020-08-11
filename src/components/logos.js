import React from "react"
import Salesforce from '../logos/salesforce.png'
import Adobe from '../logos/adobe.png'
import gensler from '../logos/gensler.gif'
import Grey from '../logos/grey.png'
import Gabi from '../logos/Gabi.png'
import Yoactiv from '../logos/Yoactiv.png'



const Logos = () => {

  
    return (
    <div>
       <p>The awesome people and places, I’ve worked for.</p>
       <a href="https://www.salesforce.com" target="_blank"  style={{textDecoration:"none"}}> <img width="80" src = {Salesforce} alt="salesforce"/></a>
       <a href="https://www.adobe.com/" target="_blank"  style={{textDecoration:"none"}}> <img width="40" src = {Adobe} alt="adobe"/></a>
       <a href="https://www.grey.com/" target="_blank"  style={{textDecoration:"none"}}> <img width="80" src = {Grey} alt="grey"/></a>
       <a href="https://www.gensler.com/" target="_blank"  style={{textDecoration:"none"}}> <img width="80" src = {gensler} alt="gensler"/></a>
       <a href="http://studiostereogram.com/" target="_blank"  style={{textDecoration:"none"}}> <img width="90" src = {Gabi} alt="studio stereogram"/></a>
       <a href="https://www.yoactiv.com/" target="_blank"  style={{textDecoration:"none"}}> <img width="100" src = {Yoactiv} alt="yoactiv"/></a>
    </div>


    )
  }
  
  export default Logos