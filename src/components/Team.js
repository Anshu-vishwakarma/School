import React from 'react'
import { Card } from 'react-bootstrap'
import team1 from './team1.jpg'
import team2 from './team2.jpg'
import team3 from './team3.jpg'
import team4 from './team4.jpg'
import team5 from './team5.jpg'
import team6 from './team6.jpg'
import Header from './Header'
import Menu from './Menu'
import Part3 from './Part3'
import Part4 from './Part4'
function Team() {
    return (
        <>
            <Header />
            <Menu />


            <div className="containar" style={{ paddingLeft: "120px", paddingRight: "120px" }}>
                <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12"> <Card>
                        <Card.Img variant="top" src={team1} />
                        <Card.Body>
                            <Card.Title>Mrs. Kusum Saraswat
                            </Card.Title>
                            <p style={{ textAlign: "center" }}> Vice principal</p>
                        </Card.Body>
                    </Card></div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <Card>
                            <Card.Img variant="top" src={team2} />
                            <Card.Body>
                                <Card.Title>Mr. Himanshu Mathuriya
                                </Card.Title>
                                <p style={{ textAlign: "center" }}> Computer Incharge</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <Card >
                            <Card.Img variant="top" src={team3} />
                            <Card.Body>
                                <Card.Title>Mrs. Chandni Raikwar
                                </Card.Title> <p style={{ textAlign: "center" }}> school incharge</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <Card >
                            <Card.Img variant="top" src={team4} />
                            <Card.Body>
                                <Card.Title>Mrs. Rachna Kotiya
                                </Card.Title>
                                <p style={{ textAlign: "center" }}> Accountant</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <Card >
                            <Card.Img variant="top" src={team5} />
                            <Card.Body>
                                <Card.Title>Mrs. Sarita
                                </Card.Title>
                                <p style={{ textAlign: "center" }}>School Incharge</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <Card>
                            <Card.Img variant="top" src={team6} />
                            <Card.Body>
                                <Card.Title>Mrs. Kaushalya Kushwaha
                                </Card.Title> <p>  School Incharge</p>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>


            <Part3 />
            <Part4 />

        </>
    )
}

export default Team
