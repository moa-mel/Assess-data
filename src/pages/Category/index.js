import React, {useState} from 'react'
import './styles.css'
import G41 from "../../images/Group 41.png"
import G42 from "../../images/Group 42.png"
import G43 from "../../images/Group 43.png"
import G44 from "../../images/Group 44.png"
import { Link } from 'react-router-dom';

const Category = () => {
  const [active, setActive] = useState("")
  
  return (
    <div className='category'>
     <div className='category-contain'>
       <div className='category-container'>
       <div className='categ-contain'>
       <h1 className='category-h2'>Choose Your Category</h1>
       <h4 className="category-h4">This helps us streamline what you see on your dashboard, the selected interests will only show on<br/>
        your dashboard. You can always make changes anytime you want in your profile</h4>
       <div className='category-img'>
        <div className='apl'>
       <img className='cat-img'  src={G41} alt=''/>
       <img className={active==="school"?'cat-imgs-select':"cat-imgs"}
       onClick={(e)=>setActive("school")} src={G42} alt=''/>
       </div>
       <div className='ple'>
       <img className='cat-img'  src={G43} alt=''/>
       <img className='cat-img'  src={G44} alt=''/>
       </div>
       </div>
       <Link to='/create-insight'>
       <button className="category-button" disabled={!active}>proceed</button>
       </Link>
       </div>
       </div>
     </div>
    </div>
  )
}

export default Category