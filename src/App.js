import React, { useState } from 'react'; // React와 useState를 가져옴
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container,Col,Row,Button, Nav, Navbar} from 'react-bootstrap';
import { Routes, Route, useNavigate} from 'react-router-dom';
import DetailPage from './pages/Detail.js';

//자바스크립트 파일은 확장자명을 생략
// 다른 자바스크립트에서 export한건 import로 가져와서 씀 (변수처럼 씀)
import data from './data.js'
import {num1,num2,num3} from './data.js' 
//이미지를 쓰려면 import
import mainBG from './main.png';
//import monitor from './monitor.png'
import mouse from './mouse.png'


// 라우터는 창을 새로 불러오는 게 아니라 다시 렌더링 방식을 씀
function App() {




  // css를 주는 사이트 : bootstrap
  // npm install react-bootstrap bootstrap

  let [items,setItems]=useState(data); // data는 변수니까 state로
  let [photo,setPhoto]=useState(['/monitor.png',mouse,'/keyboard.png']);
  let navigate = useNavigate()
  
  return (
    <div className="App">
      <navbar bg='dark' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><img src="/samsung_logo1.png" width={'200px'} height={'100px'}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detailed Pages</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>앞으로 가기</Nav.Link>
          </Nav>
        </Container>
      </navbar>

      <Routes>
        <Route path='/' element={
          <>
<div className={`main-bg`}>
    </div>
    <Container>
      <Row>
        {/* <Col>
          <img src={monitor} width={'300px'} height={'300px'}/>
          <h4>{data[0].title}</h4>
          <h4>{data[0].content}</h4>
          <h4>{data[0].price}</h4>
        </Col> */}
        {/* data 갯수와 이미지가 바뀔수 있으므로 useState 처리*/}
        {/* map으로 useState(data) 만큼 되풀이*/}
        {/* {items.map((item, idx) => (
          <Col key={idx}>
            <ItemCol data={item} img={photo[idx]} />
          </Col>
        ))} */}
        {
          items.map((e,idx)=>{
            return(
              <Col>
                <ItemCol data={e} img={photo[idx]} key={e} />
              </Col>
            )
          })
        }
 
        {/* <ItemCol data={items[0]} img={photo[0]}/>
        <ItemCol data={data[1]} img={photo[1]}/>
        <ItemCol data={data[2]} img={photo[2]}/> */}
        {/* <Col>
          <img src={mouse} width={'300px'} height={'300px'}/>
          <h4>{data[1].title}</h4>
          <h4>{data[1].content}</h4>
          <h4>{data[1].price}</h4>
        </Col> */}
        {/* <Col>
          <img src={'/keyboard.png'} width={'300px'} height={'300px'}/>
          <h4>{data[2].title}</h4>
          <h4>{data[2].content}</h4>
          <h4>{data[2].price}</h4>
        </Col> */}
      </Row>
    </Container>

    {/* <div style={{background:`url()`, height:`300px`,
    backgroundSize:'cover',backgroundPosition:"center"}}>

    </div> */}
    <br/>
    <Button variant='primary'>기본버튼</Button>
          </>
        
        }></Route>

        <Route path='/detail' element={<DetailPage items={items}/>
      }></Route>{/*http://localhost:3000/detail*/}
      </Routes>

       
    </div>
  );
}

export default App;

//컴포넌트는 맨 앞글자는 대문자
//return에 html(jsx)코드
//컴포넌트로 분리를 했으면 props로 받아와야하는 부분을 고침
function ItemCol(props)
{
  // 쓰는 곳에서 결정해줘야하는 부분(그때그때 다른 곳)만 props로 처리
  return(
    <>
      <img src={props.img} width={'300px'} height={'300px'}/>
      <h4>{data[0].title}</h4>
      <p>{props.data.price} Won</p>
    </>
  )
  
}