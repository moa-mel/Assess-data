import React, { useState } from 'react'
import "./styles.css"
import { Select } from '@chakra-ui/react'
import { regionAvgPerfData } from "../../dummyData"
import { regionGenPerfData } from "../../dummyData"
import Chart from "../../components/Chart/Chart"
import { Card, CardBody, Stack, Text, Box } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from "../../components/Navbar"
import html2pdf from 'html2pdf.js';


const Insight = ({ data }) => {
  const [chartType, setChartType] = useState('line');

  const handleChangeChartType = (e) => {
    setChartType(e.target.value);
  };

  const handleDownload = () => {
    const element = document.querySelector('#main-content'); // Target the main content wrapper
    const opt = {
      margin: 20,
      filename: 'main_content.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
    };

    html2pdf().from(element).set(opt).save();
  };

  const modifiedData = regionGenPerfData.map((entry) => ({
    ...entry,
    lipAndPil: entry.lip + entry.pil + entry.vul,
  }));

  const modData = regionAvgPerfData.map((entry) => ({
    ...entry,
    FigAndGif: entry.fig + entry.gif,
  }));

  return (
    <div className='insight' >
      {/*header*/}
      <Navbar />
      {/*navbar*/}
      <div className='insight-nav'>
        <h1 className='insight-nav-h'>INSIGHTS</h1>
        <div className='insight-drop'>
          <div className='drop-1'>
            <Select bg='#35246E'
              borderColor='#35246E'
              value={chartType}
              onChange={handleChangeChartType}
              color='#fff' placeholder='Select chart'>
              <option value='line'>linechart</option>
              <option value='bar'>barchart</option>
              <option value='pie'>piechart</option>
            </Select>
          </div>
          <div className='drop-2'>
            <Select bg='#35246E'
              borderColor='#35246E'
              color='#fff' placeholder='Select year'>
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
              color='#fff' placeholder='Select course'>
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
      <div className='in-main' id="main-content">
        {/*sidebar*/}
        <div className='in-side'>
          <div className='way'>
          <Card align='center' size='sm' width='70%' marginLeft='30px'>
            <CardBody>
              <Stack mt='1' spacing='1'>
                <Text color='#49397C'>
                  NO OF STUDENTS
                </Text>
                <Text color='#49397C'>
                  1086636
                </Text>
              </Stack>
            </CardBody>
          </Card>

          <Card align='center' size='sm' width='70%' marginLeft='30px' marginTop='5px'>
            <CardBody>
              <Stack mt='3' spacing='3'>
                <Text color='#49397C'>
                  NO OF SUBJECTS
                </Text>
                <Text color='#49397C'>
                  85
                </Text>
              </Stack>
            </CardBody>
          </Card>
          </div>

          <div className='work'>
          <Card align='center' size='sm' width='70%' marginLeft='30px' marginTop='5px'>
            <CardBody>
              <Stack mt='3' spacing='3'>
                <Text color='#49397C'>
                  NO OF SPONSORS
                </Text>
                <Text color='#49397C'>
                  15000
                </Text>
              </Stack>
            </CardBody>
          </Card>

          <Card align='center' size='sm' width='70%' marginLeft='30px' marginTop='5px'>
            <CardBody>
              <Stack mt='3' spacing='3'>
                <Text color='#49397C'>
                  NO OF REGION
                </Text>
                <Text color='#49397C'>
                  6
                </Text>
              </Stack>
            </CardBody>
          </Card>
          </div>
          <div className='gulu'>
          <Card align='center' size='sm' width='70%' marginLeft='30px' marginTop='5px'>
            <CardBody>
              <Stack mt='3' spacing='3'>
                <Text color='#49397C'>
                  NO OF STATES
                </Text>
                <Text color='#49397C'>
                  36
                </Text>
              </Stack>
            </CardBody>
          </Card>
          </div>
        </div>
        {/*content*/}
        <div className='in-content'>
          <div className='in-con'>
            <div className='in-con-line'>
              {chartType === 'line' ? (
                <Card  size='lg' width='350px' height='300px' >
                  <CardBody>
                    <Box>
                      <Chart data={regionAvgPerfData} title="Average performance by Region" dataKey="fig" />
                    </Box>
                  </CardBody>
                </Card>
              ) : chartType === 'bar' ? (
                  <Card  size='lg' width='350px' height='300px'  >
                    <CardBody>
                      <Box>
                        <ResponsiveContainer width="100%" aspect={4 / 3}>
                          <BarChart data={regionAvgPerfData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="fig" fill="#EBD579" />
                            <Bar dataKey="gif" fill="#49397C" />
                          </BarChart>
                        </ResponsiveContainer>
                      </Box>
                    </CardBody>
                  </Card>
                ) : (
                  <Card size='lg' width='350px' height='300px' >
                    <CardBody>
                      <Box>
                        <ResponsiveContainer width="100%" aspect={4 / 3}>
                          <PieChart width={400} height={400}>
                            <Pie
                              dataKey="FigAndGif"
                              isAnimationActive={false}
                              data={modData}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              fill="#49397C"
                              label
                            />
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </Box>
                    </CardBody>
                  </Card>
                )}
            </div>
            {/* <div className='in-con-chart'>
              {chartType === 'line' ? (
                <Chart data={regionAvgPerfData} title="Average performance by Region" dataKey="fig" />
              ) : chartType === 'bar' ? (
                <ResponsiveContainer width="100%" aspect={4 / 3}>
                  <BarChart data={regionAvgPerfData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="fig" fill="#EBD579" />
                    <Bar dataKey="gif" fill="#49397C" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <ResponsiveContainer width="100%" aspect={4 / 3}>
                  <PieChart width={400} height={400}>
                    <Pie
                      dataKey="FigAndGif"
                      isAnimationActive={false}
                      data={modData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#49397C"
                      label
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

              )}
              </div> */}
            <div className='in-con-chart'>
              {chartType === 'line' ? (
                <Card size='lg' width='350px' height='300px' >
                  <CardBody>
                    <Box>
                      <Chart data={regionGenPerfData} title="General Performance by Region" dataKey="lip" />
                    </Box>
                  </CardBody>
                </Card>
              ) : chartType === 'bar' ? (
                <Card size='lg' width='350px' height='300px' >
                  <CardBody>
                    <Box>
                      <ResponsiveContainer width="100%" aspect={4 / 3}>
                        <BarChart data={regionGenPerfData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="lip" fill="#EBD579" />
                          <Bar dataKey="pil" fill="#EBD579" />
                          <Bar dataKey="vul" fill="#EBD579" />
                        </BarChart>
                      </ResponsiveContainer>
                    </Box>
                  </CardBody>
                </Card>
              ) : (
                <Card size='lg' width='350px' height='300px' >
                  <CardBody>
                    <Box>
                      <ResponsiveContainer width="100%" aspect={4 / 3}>
                        <PieChart width={800} height={800}>
                          <Pie
                            dataKey="lipAndPil"
                            isAnimationActive={false}
                            data={modifiedData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#49397C"
                            label
                          />
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </Box>
                  </CardBody>
                </Card>
              )}
            </div>

          </div>

        </div>
      </div ><br />
      <div className="sigh-uhh">
        <Link to="/payment">
          <p className='in-con-p'>Click here to view dashboard</p>
        </Link>
        <button className='in-con-but' onClick={handleDownload}>Print analysis</button>
      </div>

    </div >
  )
}

export default Insight