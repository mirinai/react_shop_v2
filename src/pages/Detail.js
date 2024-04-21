import {Button, Container, Row, Col} from 'react-bootstrap';
import './Detail.css';

export default function DetailPage(props)
{
  // 컴포넌트는 return으로 스크린을 그린다.
  return (
    <>
      <div className='detail-container'>
        <Container>
          <Row>
            <Col>
              <img src='/monitor.png' width={'400px'} height={'300px'} />
            </Col>
            <Col>
              <h4></h4>
              <p>{props.items[0].title}</p>
              <p>{props.items[0].content}</p>
              <p>{props.items[0].price} 만원</p>
              <p>엄청 큰 모니터</p>

              <Button>주문하기</Button>
            </Col>
            <Col>
              
            </Col>
          </Row>
        </Container>

      </div>
    </>
  )
}
