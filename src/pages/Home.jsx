import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function Home() {
  return (

    <container>
      <div>
        <Carousel fade>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img src="https://www.asus.com/WebsitesBanner/IN/banners/yowzoyjll5lduhzq/yowzoyjll5lduhzq-0_0_mobile_0_1X.jpg?webp" alt="" width={'100%'} height={'700px'} />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img src="https://www.asus.com/WebsitesBanner/IN/banners/lbbcatwtodtpnmp7/lbbcatwtodtpnmp7-0_0_mobile_0_1X.jpg?webp" alt="" width={'100%'} height={'600px'} />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img src="https://www.asus.com/WebsitesBanner/IN/banners/cqtwnwdbc6qz1tuv/cqtwnwdbc6qz1tuv-0_0_mobile_0_1X.jpg?webp" alt="" width={'100%'} height={'700px'} />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='mt-3'>
        <img src="https://www.asus.com/WebsitesBanner/IN/banners/lywrhakq921x9qpn/lywrhakq921x9qpn-0_0_tablet_0_1X.jpg?webp" alt="" width={'100%'} height={'700px'} />
      </div>

      <div>
        <Row>
          <Col className=' m-auto' sm={6}><img src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-0_0_mobile_5_1X.jpg?webp" alt="" width={'100%'} /></Col>
          <Col className=' m-auto' sm={6}><img src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-1_0_tablet_4_1X.jpg?webp" alt="" width={'100%'} /></Col>
        </Row>
      </div>


      <Row>
        <Col className=' m-auto mt-1' sm={6}><img src="https://www.asus.com/us/site/gaming/assets/images/logos/social-preview.jpg" alt="" width={'100%'} height={'450px'} /> </Col>
        <Col className=' m-auto mt-1' sm={6}><img src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-2_0_desktop_2_1X.jpg?webp" alt="" width={'100%'} height={'450px'} /></Col>
      </Row>

      <div>
        <Row>
          <Col xs={6} md={4} sm={12}>

          </Col>

          <Col xs={6} md={4} sm={12}>
            <h1 style={{ overflowY: 'hidden' }} className='mt-5 ms-5'>Campaigns and Events</h1>
          </Col>
          <Col xs={6} md={4} sm={12}>

          </Col>

        </Row>
      </div>


      <div className='w-75 mx-auto'>
        <Carousel slide={true} fade={true}>
          <Carousel.Item>
            <Row className="d-flex justify-content-around">
              <Col sm={12} lg={4} >
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://www.asus.com/media/Odin/Websites/in/SiteSetting/20231012075934.jpg?webp"
                  />
                  <Card.Body>
                    <Card.Title style={{ overflowY: 'hidden' }}>Buy Select Asus GeForce RTX 40 Series*, Get Alan Wake 2</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} lg={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://www.asus.com/media/Odin/Websites/in/SiteSetting/20230812025556.jpg?webp"
                  />
                  <Card.Body>
                    <Card.Title style={{ overflowY: 'hidden' }}>GEFORCE OVERWATCH 2 INVASION ULTIMATE BUNDLE </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} lg={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://www.asus.com/media/Odin/Websites/in/SiteSetting/20210312090611.jpg?webp"
                  />
                  <Card.Body>
                    <Card.Title style={{ overflowY: 'hidden' }}>GEFORCE OVERWATCH 2 INVASION ULTIMATE BUNDLE</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="d-flex justify-content-between">
              <Col sm={12} lg={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://www.asus.com/media/Odin/Websites/in/SiteSetting/20230522035458.jpg?webp"
                  />
                  <Card.Body>
                    <Card.Title style={{ overflowY: 'hidden' }}>ASUS X INTEL GAME BUNDLE- CALL OF DUTY MASTER KEY PROMOTION</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} lg={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://www.asus.com/media/Odin/Websites/in/SiteSetting/20231012075934.jpg?webp"
                  />
                  <Card.Body>
                    <Card.Title style={{ overflowY: 'hidden' }}>ASUS X INTEL GAME BUNDLE- CALL OF DUTY MASTER KEY PROMOTION</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} lg={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://www.asus.com/media/Odin/Websites/in/SiteSetting/20210312090636.jpg?webp"
                  />
                  <Card.Body>
                    <Card.Title style={{ overflowY: 'hidden' }}>ASUS X INTEL GAME BUNDLE- CALL OF DUTY MASTER KEY PROMOTION</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

        </Carousel>
      </div>

      <div>
        <h1 style={{ overflowY: "hidden" }} className='text-center mt-5'>Hot Deals</h1>
      </div>

      <div className='mb-5'>
        <Row>
          <Col sm={12} md={4}>

          </Col>
          <Col className='border' sm={12} md={4}>
            <div className='d-flex justify-content-between mx-auto'>
              <img src="https://www.asus.com/media/Odin/Websites/global/DealsPage/20210521081726.svg" alt="" width={'90px'} />
              <img src="https://www.asus.com/media/Odin/Websites/global/DealsPage/20210521081514.svg" alt="" width={'90px'} />
              <img src="https://www.asus.com/media/Odin/Websites/global/DealsPage/20210521081749.svg" alt="" width={'80px'} />
              <img src="https://www.asus.com/media/Odin/Images/DealsPage/all-deals.svg" alt="" width={'80px'} /> <br></br>

            </div>
          </Col>
          <Col sm={12} md={4}>

          </Col>
        </Row>
      </div>


      <Row className='mx-auto justify-content-around '>
          <Col sm={12} lg={4} className='mt-3'>
            <container-fluid className='mb-3'>
              <Card className='mx-auto' style={{ width: '20rem' }}>
                <Card.Img className='m-auto' style={{ width: '120px' }} variant="top" src="https://dlcdnwebimgs.asus.com/gain/1db55cf3-81ab-4552-b126-d881aa5b42a5/w185/fwebp" />
                <Card.Body>
                  <Card.Title style={{ overflowY: 'hidden' }}>VivoBook S 15 OLED (S3502,12th Gen Intel)</Card.Title>
                  <hr />
                  <Card.Text>
                    ₹ 69,990.00 <br />
                    ₹ 92,990.00
                    SAVE ₹ 23,000.00
                    This price may not refer to the specifications below. <hr />
  
                    <ul style={{listStyleType:''}} class="a">
                      <li>Windows 11 Home -</li>
                      <li>120 Hz refresh rate</li>
                      <li>ASUS Antibacterial Guard</li>
                    </ul>
  
  
                  </Card.Text>
                </Card.Body>
  
                <Card.Body>
                  <button className='btn btn-primary w-100 text-center'>BUY</button>
                  <button className='bg-light w-75 mt-3 py-1'>learn more</button><i class="fa-solid fa-location-dot fa-2x  ms-4 mt-2"></i>
                </Card.Body>
              </Card>
            </container-fluid>
          </Col>
         <Col sm={12} lg={4} className='mt-3'>
            <container-fluid className='mb-3'>
              <Card className='mx-auto' style={{ width: '20rem' }}>
                <Card.Img className='m-auto' style={{ width: '120px' }} variant="top" src="https://dlcdnwebimgs.asus.com/gain/8bd3228d-3efe-401b-bf45-c1e077a2d09f/w185/fwebp" />
                <Card.Body>
                  <Card.Title style={{ overflowY: 'hidden' }}>VivoBook S 15 OLED (S3502,12th Gen Intel)</Card.Title>
                  <hr />
                  <Card.Text>
                    ₹ 69,990.00 <br />
                    ₹ 92,990.00
                    SAVE ₹ 23,000.00
                    This price may not refer to the specifications below. <hr />
  
                    <ul class="a">
                      <li>Windows 11 Home</li>
                      <li>Up to GeForce RTX</li>
                      <li>Up to Intel</li>
                    </ul>
  
  
                  </Card.Text>
                </Card.Body>
  
                <Card.Body>
                  <button className='btn btn-primary w-100 text-center'>BUY</button>
                  <button className='bg-light w-75 mt-3 py-1'>learn more</button><i class="fa-solid fa-location-dot fa-2x  ms-4 mt-2"></i>
                </Card.Body>
              </Card>
            </container-fluid>
         </Col>
          
         <Col sm={12} lg={4} className='mt-3'>
            <container-fluid className='mb-3'>
              <Card className='mx-auto' style={{ width: '20rem' }}>
                <Card.Img className='m-auto' style={{ width: '120px' }} variant="top" src="https://dlcdnwebimgs.asus.com/gain/6c49e355-de25-403c-b8c2-eb0ad4cc8a78/w185/fwebp" />
                <Card.Body>
                  <Card.Title style={{ overflowY: 'hidden' }}>VivoBook S 15 OLED (S3502,12th Gen Intel)</Card.Title>
                  <hr />
                  <Card.Text>
                    ₹ 69,990.00 <br />
                    ₹ 92,990.00
                    SAVE ₹ 23,000.00
                    This price may not refer to the specifications below. <hr />
  
                   <div>
                      <ul class="a">
                        <li>Windows 11 Home - ASUS </li>
                        <li>Up to 12th Intel</li>
                        <li> Core™ i7 processor</li>
                      </ul>
                   </div>
  
  
                  </Card.Text>
                </Card.Body>
  
                <Card.Body>
                  <button className='btn btn-primary w-100 text-center'>BUY</button>
                  <button className='bg-light w-75 mt-3 py-1'>learn more</button><i class="fa-solid fa-location-dot fa-2x  ms-4 mt-2"></i>
                </Card.Body>
              </Card>
            </container-fluid>
         </Col>
        
      </Row>

      <Row className='mt-5 d-flex justify-content-around mx-auto ps-5'>

        <Col sm={12} md={4} lg={3}>
          <h5 style={{overflowY:'hidden'}}><i class="fa-solid fa-truck-fast"></i> Free Shipping</h5>
        </Col>
        <Col sm={12} md={4} lg={3}>
          <h5><img src="https://www.asus.com/media/Odin/Websites/in/Menu/20220412113757.svg" alt="" /> Easy Returm</h5>
        </Col>
        <Col sm={12} md={4} lg={3}>
          <h5><i class="fa-solid fa-money-check"></i> Safe and Secure Payments</h5>
        </Col>
        <Col sm={12} md={4} lg={3}>
          <h5 ><img src="https://www.asus.com/media/Odin/Websites/in/Menu/20220412113816.svg" alt="" /> Customer Support</h5>
        </Col>

      </Row>

      <hr />



    </container>

  )
}

export default Home