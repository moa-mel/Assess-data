import React from 'react'
import './styles.css'
import G41 from "../../images/Group 41.png"
import G42 from "../../images/Group 42.png"
import G43 from "../../images/Group 43.png"
import G44 from "../../images/Group 44.png"
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className='category'>
     <div className='category-contain'>
       <div className='category-container'>
       <div className='categ-contain'>
       <h1 className='category-h2'>Choose Your Category</h1>
       <h4 className="category-h4">This helps us streamline what you see on your dashboard, the selected interests will only show on<br/>
        your dashboard. You can always make changes anytime you want in your profile</h4>
       <div className='category-img'>
       <img className='cat-img' src={G41} alt=''/>
       <img className='cat-img' src={G42} alt=''/>
       <img className='cat-img' src={G43} alt=''/>
       <img className='cat-img' src={G44} alt=''/>
       </div>
       <br/>
       <br/>
       <Link to='/insight'>
       <button className="category-button">proceed</button>
       </Link>
       </div>
       </div>
     </div>
    </div>
  )
}

export default Category