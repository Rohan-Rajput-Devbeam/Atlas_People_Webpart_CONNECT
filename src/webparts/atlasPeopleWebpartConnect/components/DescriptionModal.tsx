import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal } from "react-bootstrap";

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
        this.state=({
            isOpen : true
        })
    }
    componentDidMount() {
        console.log(this.context.isModalOpen);
        this.setState({
            isOpen:true
        });
    }

    public render() {
        return (
            // <h3></h3>
            <>
                <Modal show={this.state.isOpen} onHide={this.closeModal} backdrop="static" keyboard={false} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Add/Update Programs</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container col-md-12">
                            <h4>Centered Modal</h4>
                            <p>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros.
                            </p>
                        </div>
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