
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import styles from './AtlasPeopleWebpartConnect.module.scss';
import { RichText } from '@pnp/spfx-controls-react/lib/RichText';

export class ReadMore extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = ({
            isReadMore: false
        })
    }
    toggleReadMore = () => {
        this.setState({
            isReadMore: !this.state.isReadMore
        });
    }
    sliceStringWithWords = (inputString, limit) => {
        const newTitle = [];
        if (!inputString || inputString == null || inputString == "" || inputString.length <= 150) {
            return inputString;
        }
        if (inputString.length > limit) {
            inputString.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);
        }
        console.log(newTitle)
        return `${newTitle.join(' ')} ...`
    }
    public render() {
        let text = this.props.children ? this.props.children.toString() : "";
        console.log(text)

        return (
            <div className="text">

                {this.state.isReadMore == false ?
                    // text.slice(0, 150) 
                    <RichText value={this.sliceStringWithWords(text, 150)} isEditMode={false} />

                    :
                    <RichText value={text} isEditMode={false} />


                }
                {text.length > 150 ?
                    <div onClick={this.toggleReadMore} className={styles.readMore}>
                        {!this.state.isReadMore ? "Read more" : "Read less"}
                    </div>
                    : null}
            </div>
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
