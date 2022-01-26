
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import styles from './AtlasPeopleWebpartConnect.module.scss';

export class ReadMore extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = ({
            isReadMore: true
        })
    }
    toggleReadMore = () => {
        this.setState({
            isReadMore: !this.state.isReadMore
        });
    }
    public render() {
        let text = this.props.children.toString();
        console.log(text)

        return (
            <p className="text">
                {/* abcd */}
                {this.state.isReadMore ? text.slice(0, 150) : text}
                {text.length > 150 ?
                    <div onClick={this.toggleReadMore} className={styles.readMore}>
                        {this.state.isReadMore ? "Read more" : "Read less"}
                    </div>
                    : null}
            </p>
        );
    }

}

// const ReadMore = ({ children }) => {
// const text = children;
// const [isReadMore, setIsReadMore] = React.useState(true);
// const toggleReadMore = () => {
// 	setIsReadMore(!isReadMore);
// };
// return (
// 	<p className="text">
// 	{isReadMore ? text.slice(0, 150) : text}
// 	<span onClick={toggleReadMore} className="read-or-hide">
// 		{isReadMore ? "...read more" : " show less"}
// 	</span>
// 	</p>
// );
// };
