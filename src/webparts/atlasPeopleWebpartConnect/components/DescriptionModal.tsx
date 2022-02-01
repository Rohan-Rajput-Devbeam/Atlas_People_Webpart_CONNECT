import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import styles from './AtlasPeopleWebpartConnect.module.scss';
import { ReadMore } from './ReadMore';
import { SocialMediaIconsReact } from 'social-media-icons-react';

export class DescriptionModal extends React.Component<any, any> {

    closeModal = e => {
        this.setState({ isOpen: false }, () => {
            if (this.props.onClose) {
                this.props.onClose(this.state);
            }
        })
    };

    constructor(props) {
        super(props);
        this.state = ({
            isOpen: true
        })
    }
    componentDidMount() {
        this.setState({
            isOpen: true
        });
        console.log(this.props.dataset)
    }

    public render() {
        return (
            // <h3></h3>
            <>
                <Modal show={this.state.isOpen} onHide={this.closeModal} keyboard={false} size="lg">
                    <Modal.Header className={styles.modalHeader} closeButton>
                        <Modal.Title>{this.props.dataset[0]}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                                <Col lg={4}>
                                    <Card style={{ width: '18rem', border: 'none' }}>
                                        {/* <Card.Body style={{padding: 0, 'padding-left': '8%'}}> */}
                                        <Card.Body style={{ padding: '1%' }}>
                                            {/* <img src={programDetail.programPhoto} className={styles.programPhoto}></img> */}
                                            <img src={this.props.dataset[3] === undefined ? "https://devbeam.sharepoint.com/sites/ModernConnect/SiteAssets/Logo/Icons/people-profile-placeholder.png"
                                                : this.props.dataset[3].fileAbsoluteUrl} className={styles.peoplePhoto}></img>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                    <Row>
                                        <Col xs={3} margin="auto">
                                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="4" borderStyle="groove" icon="twitter" iconColor="#1DA1F2" backgroundColor="rgba(255,255,255,1)" iconSize="3" roundness="30%" url="#" size="30" />
                                        </Col>
                                        <Col xs={3} margin="auto">
                                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="4" borderStyle="groove" icon="linkedin" iconColor="#0077b5" backgroundColor="rgba(255,255,255,1)" iconSize="3" roundness="30%" url="#" size="30" />
                                        </Col>
                                        <Col xs={3} margin="auto">
                                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="4" borderStyle="groove" icon="facebook" iconColor="#4267B2" backgroundColor="rgba(255,255,255,1)" iconSize="3" roundness="30%" url="#" size="30" />
                                        </Col>
                                        <Col xs={3} margin="auto">
                                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="4" borderStyle="groove" icon="youtube-play" iconColor="#FF0000" backgroundColor="rgba(255,255,255,1)" iconSize="3" roundness="30%" url="#" size="30" />
                                        </Col>
                                        <Col>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="48" height="48"
                                                viewBox="0 0 48 48" fill="#000000;"
                                                ><path fill="#1365be" d="M19.216,32.504l10.418,10.347c0.522,0.519,1.373,0.48,1.847-0.083 c1.948-2.314,6.382-8.132,6.382-13.154l-15.989-4.2L19.216,32.504z"></path><path fill="#18a7ed" d="M19.062,15.513L29.705,4.87c0.429-0.429,1.123-0.423,1.537,0.02c1.601,1.712,5.237,6.149,6.66,12.434 L19.524,22.14L19.062,15.513z"></path><path fill="#0a84f0" d="M22.76,20.714l18.68-5.035c0.597-0.161,1.208,0.19,1.361,0.789c0.342,1.347,0.841,3.927,0.841,7.521 c0,3.597-0.516,6.178-0.87,7.524c-0.157,0.598-0.771,0.943-1.367,0.778L19.023,26.07L22.76,20.714z"></path><path fill="#03509a" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M17.824,18.619c-0.475-0.258-1.068-0.082-1.326,0.392l-2.447,4.577l-2.549-4.577 c-0.258-0.475-0.852-0.65-1.326-0.392c-0.475,0.258-0.65,0.852-0.392,1.326l3.074,5.584v2.883c0,0.601,0.488,1.089,1.089,1.089 c0.601,0,1.089-0.488,1.089-1.089v-2.669l3.181-5.798C18.474,19.47,18.299,18.877,17.824,18.619z"></path></svg></Col>
                                            
                                            <Col>
                                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="3" roundness="20%" url="https://some-website.com/my-social-media-url" size="30" />
                                            </Col>
                                    </Row>
                                </Col>

                                <Col lg={8} style={{ padding: '20px' }}>
                                    {/* <span className={styles.title}>{programDetail.title}</span> */}
                                    <h3>{this.props.dataset[0]}</h3>
                                    <p className={styles.subTitle}>{this.props.dataset[1]}</p>
                                    <p>{this.props.dataset[5]}</p>
                                    <p className={styles.description}>
                                        <ReadMore>{this.props.dataset[4]}
                                        </ReadMore></p>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}