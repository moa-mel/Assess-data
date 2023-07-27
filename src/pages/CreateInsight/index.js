import React, {useState} from 'react'
import "./styles.css"
import { Link } from 'react-router-dom';
import mono from "../../images/mono-icons_filter.png"

const CreateInsight = () => {
  const [active, setActive] = useState("")
  return (
    <div className="create-insight">
      <div className="ci-contain">
        <div className="ci-container">
          <h2 className="ci-h2">CREATE INSIGHTS</h2>
          <div className="ci-sort" >
            <p className="ci-p">Sort insights by</p>
            <img className="ci-img" src={mono} alt="" />
          </div>
          <br />
          <br />
          <div className="ci-1but">
            <button className='ci-butt'>Courses</button>
            <button className='ci-butt'>Results</button>
            <button className='ci-butt'>Personalities</button>
            <button className='ci-butt'>disabilities</button>
          </div>
          <br />
          <div className="ci-2but">
            <button className='ci-butt'>School to school</button>
            <button className='ci-butt'>Locality</button>
            <button className='ci-butt'>Success</button>
            <button className='ci-butt'>Age</button>
          </div>
          <br />
          <div className="ci-3but">
            <button className='ci-butt'>Failure rate</button>
            <button className='ci-butt'>Region</button>
            <button className='ci-butt'>Region</button>
            <button className='ci-butt'>Disabilities</button>
          </div>
          <br />
          <div className="ci-4but">
            <button className='ci-butt'>Disabilities</button>
            <button className={active==="region"?'ci-butts-select':"ci-butts"}
            onClick={(e)=>setActive("region")}>Region</button>
            <button className='ci-butt'>Region</button>
            <button className='ci-butt'>Disabilities</button>
          </div>
          <br />
          <br />
          <br />
          <Link to='/insight'>
            <button className="ci-button">proceed</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreateInsight