import React from 'react'
import "./styles.css"
import { Select } from '@chakra-ui/react'
import Logo from "../../images/Oau_logo-removebg-preview 2.png"
import E3 from "../../images/Ellipse 3.png"
import { search } from 'react-icons-kit/feather/search'
import { Icon } from "react-icons-kit"
import { regionAvgPerfData } from "../../dummyData"
import { regionGenPerfData } from "../../dummyData"
import Chart from "../../components/chart/Chart"
import {Link} from "react-router-dom"

const Insight = () => {

  return (
    <div className='insight' >
      {/*header*/}
      <div className='insight-header'>
        <img className='insight-logo' src={Logo} alt="" />
        <div className="insight-search">
          <input type="text"
            placeholder="Search..."
            className='insight-input'
          />
          <span className='re-span' ><Icon icon={search} size={15} /></span>
        </div>
        <div className="insight-end">
          <Select variant='unstyled' placeholder="Mike">
            <option value='option1'>Profile</option>
            <option value='option2'>LogOut</option>
          </Select>
          <img className='insight-e3' src={E3} alt="" />
        </div>
      </div>
      {/*navbar*/}
      <div className='insight-nav'>
        <h1 className='insight-nav-h'>INSIGHTS</h1>
        <div className='insight-drop'>
          <div className='drop-1'>
            <Select bg='#35246E'
              borderColor='#35246E'
              color='grey' placeholder='Select format'>
              <option value='option1'>linechart</option>
              <option value='option2'>barchart</option>
              <option value='option3'>piechart</option>
            </Select>
          </div>
          <div className='drop-2'>
            <Select bg='#35246E'
              borderColor='#35246E'
              color='grey' placeholder='Select year'>
              <option value='option1'>2012-2014</option>
              <option value='option2'>2014-2016</option>
              <option value='option3'>2016-2018</option>
              <option value='option1'>2018-2020</option>
              <option value='option2'>2020-2022</option>
              <option value='option3'>2021-2023</option>
            </Select>
          </div>
          <div className='drop-3'>
            <Select bg='#35246E'
              borderColor='#35246E'
              color='grey' placeholder='Select course'>
              <option value='option1'>
                Computer Science with Mathematics
              </option>
              <option value='option2'>
                Computer Science with Economics
              </option>
              <option value='option3'>
                Computer Engineering
              </option>
              <option value='option1'>
                Electronics and Electrical Engineering
              </option>
              <option value='option2'>
                Agriculture
              </option>
              <option value='option3'>
                Health
              </option>
            </Select>
          </div>
        </div>

      </div>

      {/*main component*/}
      <div className='in-main'>
        {/*sidebar*/}
        <div className='in-side'>
          <p className='in-side-p1'>NO OF STUDENTS<br />
            1086636
          </p>
          <p className='in-side-p2'>
            NO OF SUBJECTS<br />85
          </p>
          <p className='in-side-p3'>
            NO OF SPONSORS<br /> 15000
          </p>
          <p className='in-side-p4'>
            NO OF REGION<br /> 6
          </p>
          <p className='in-side-p5'>
            NO OF STATES<br /> 36
          </p>
        </div>
        {/*content*/}
        <div className='in-content'>
          <div className='in-con'>
            <div className='in-con-chart'>
              <Chart data={regionAvgPerfData} title="Average performance by Region" dataKey="fig" />
            </div>
            <div className='in-con-line'>
              <Chart data={regionGenPerfData} title="General Performance by Region" dataKey="lip"/> 
            </div>
          </div>
          <Link to="/payment">
          <p className='in-con-p'>Click here to view dashboard</p>
          </Link>
          <button className='in-con-but'>Print analysis</button>
        </div>
      </div>

    </div>
  )
}

export default Insight