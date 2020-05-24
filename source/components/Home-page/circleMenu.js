import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'

export class CircleMenu extends React.Component {
	render() {
        const styleImg = {
            border: "1px solid black",
            marginLeft: "2.5vw",
            marginRight: "2.5vw",
        }
        const styleCont = {
            marginTop: "4vw",
            marginBottom: "4vw",
        }

		return (
            <Container style={styleCont} fluid>
            <hr style={{width: "50%"}}/>
            <Row className="justify-content-md-center">
                <Col>
                    <div>
                        <Image style={styleImg} src="./img/Gra-stickad-troja.jpg" roundedCircle />
                        <h6 style={{textAlign: "center"}}>Dam</h6>
                    </div>
                </Col>
                <Col>
                    <div>
                        <Image style={styleImg} src="./img/vast.jpg" roundedCircle />
                        <h6 style={{textAlign: "center"}}>Herr</h6>
                    </div>
                </Col>

                <Col>
                    <div>
                        <Image style={styleImg} src="./img/Jeansskjorta-flicka.jpg" roundedCircle />
                        <h6 style={{textAlign: "center"}}>Barn</h6>
                    </div>
                </Col>

                <Col>
                    <div>
                        <Image style={styleImg} src="./img/tra-klocka.jpg" roundedCircle />
                        <h6 style={{textAlign: "center"}}>Accessoarer</h6>
                    </div>
                </Col>

                <Col>
                    <div>
                        <Image style={styleImg} src="./img/Bla-vas.jpg" roundedCircle />
                        <h6 style={{textAlign: "center"}}>Inredning</h6>
                    </div>
                </Col>
            </Row>
            <hr style={{width: "50%"}}/>
            </Container>
		);
	}
}