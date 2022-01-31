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
                                <Col md={4}>
                                    <Card style={{ width: '18rem', border: 'none' }}>
                                        {/* <Card.Body style={{padding: 0, 'padding-left': '8%'}}> */}
                                        <Card.Body style={{ padding: '1%' }}>
                                            {/* <img src={programDetail.programPhoto} className={styles.programPhoto}></img> */}
                                            <img src={this.props.dataset[2] === undefined ? "https://devbeam.sharepoint.com/sites/ModernConnect/SiteAssets/Logo/Icons/people-profile-placeholder.png"
                                                : this.props.dataset[2].fileAbsoluteUrl} className={styles.peoplePhoto}></img>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                    <Row>
                                        <Col sm={3}>
                                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="4" borderStyle="groove" icon="twitter" iconColor="rgba(0,0,0,1)" backgroundColor="rgba(255,255,255,1)" iconSize="3" roundness="30%" url="#" size="30" />
                                        </Col>
                                        <Col sm={3}>
                                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="4" borderStyle="groove" icon="linkedin" iconColor="rgba(0,0,0,1)" backgroundColor="rgba(255,255,255,1)" iconSize="3" roundness="30%" url="#" size="30" />
                                        </Col>
                                        <Col sm={3}>
                                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="4" borderStyle="groove" icon="facebook" iconColor="rgba(0,0,0,1)" backgroundColor="rgba(255,255,255,1)" iconSize="3" roundness="30%" url="#" size="30" />
                                        </Col>
                                        <Col sm={3}>
                                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="4" borderStyle="groove" icon="youtube-play" iconColor="rgba(0,0,0,1)" backgroundColor="rgba(255,255,255,1)" iconSize="3" roundness="30%" url="#" size="30" />
                                        </Col>
                                    </Row>
                                </Col>

                                <Col md={8} style={{ padding: '20px' }}>
                                    {/* <span className={styles.title}>{programDetail.title}</span> */}
                                    <h3>{this.props.dataset[0]}</h3>
                                    <p className={styles.subTitle}>{this.props.dataset[1]}</p>
                                    <p className={styles.description}>
                                        <ReadMore>{this.props.dataset[3]}
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