import * as React from 'react';
import styles from './AtlasPeopleWebpartConnect.module.scss';
import { IAtlasPeopleWebpartConnectProps } from './IAtlasPeopleWebpartConnectProps';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import autobind from 'autobind-decorator';
import { DescriptionModal } from './DescriptionModal';



/*
export interface IAtlasPeopleWebpartConnectWebPartProps {
  description1: any;
  description2: any;
  description3: any;
  description4: any;
  description5: any;

  filePickerResult1: any;
  filePickerResult2: any;
  filePickerResult3: any;
  filePickerResult4: any;
  filePickerResult5: any;

  profileDesignation1: any;
  profileDesignation2: any;
  profileDesignation3: any;
  profileDesignation4: any;
  profileDesignation5: any;

  profileName1: any;
  profileName2: any;
  profileName3: any;
  profileName4: any;
  profileName5: any;
}
*/
export interface IAtlasPeopleWebpartConnectState {
  showDescriptionModal: boolean;
  currentDataset: any;
}


export default class AtlasPeopleWebpartConnect extends React.Component<IAtlasPeopleWebpartConnectProps, IAtlasPeopleWebpartConnectState> {

  public constructor(props: IAtlasPeopleWebpartConnectProps) {
    super(props);
    this.state = ({
      showDescriptionModal: false,
      currentDataset: []

    })
  }

  @autobind
  async openModal(id: number) {
    console.log(id)
    let dataset = [];
    // this.setState({ showDescriptionModal: true });
    switch (id) {
      case 1:
        dataset.push(this.props.profileName1, this.props.profileDesignation1, this.props.filePickerResult1, this.props.description1);
        await this.setState({
          currentDataset: dataset,
          showDescriptionModal: true
        })
        break;

      case 2:
        dataset.push(this.props.profileName2, this.props.profileDesignation2, this.props.filePickerResult2, this.props.description2);
        await this.setState({
          currentDataset: dataset,
          showDescriptionModal: true
        })
        break;
      case 3:
        dataset.push(this.props.profileName3, this.props.profileDesignation3, this.props.filePickerResult3, this.props.description3);
        await this.setState({
          currentDataset: dataset,
          showDescriptionModal: true
        })
        break;
      case 4:
        dataset.push(this.props.profileName4, this.props.profileDesignation4, this.props.filePickerResult4, this.props.description4);
        await this.setState({
          currentDataset: dataset,
          showDescriptionModal: true
        })
        break;
      case 5:
        dataset.push(this.props.profileName5, this.props.profileDesignation5, this.props.filePickerResult5, this.props.description5);
        await this.setState({
          currentDataset: dataset,
          showDescriptionModal: true
        })
        break;
      default:
        break;
    }
    console.log(this.state.currentDataset)
  }

  @autobind
  closeModal() { this.setState({ showDescriptionModal: false }); }

  public render(): React.ReactElement<IAtlasPeopleWebpartConnectProps> {
    // console.log(this.props.profileName1);



    try {
      // Set Image URL received from the file picker component--->
      const myObj1 = (this.props.filePickerResult1);
      var image1 = myObj1.fileAbsoluteUrl;
      const myObj2 = (this.props.filePickerResult2);
      var image2 = myObj2.fileAbsoluteUrl;
      const myObj3 = (this.props.filePickerResult3);
      var image3 = myObj3.fileAbsoluteUrl;
      const myObj4 = (this.props.filePickerResult4);
      var image4 = myObj4.fileAbsoluteUrl;
      const myObj5 = (this.props.filePickerResult5);
      var image5 = myObj5.fileAbsoluteUrl;
    }
    catch (err) {
      // console.error(err);

    }
    return (
      <div className={styles.atlasPeopleWebpartConnect}>
        {/* <div className="container-fluid"> */}
        {/* <div onClick={this.openModal}>abcd</div> */}
        <Container fluid>
          {/* <div className={styles.container}> */}
          <div className={styles.box}>
            {/* <div className={styles['box-row']}> */}

            <Row className={styles.myRow}>
              {this.props.profileName1 != null && this.props.profileName1 != "" ?
                <Col className={styles.myColl} lg>
                  {/* <di v className={styles['box-cell']}> */}
                  <div className={styles.wrapper}>
                    <div className={styles.card} onClick={() => this.openModal(1)}>
                      <div className={styles.aboutpeople}  >
                        <h2>{this.props.profileName1}</h2>
                        <h3 >{this.props.profileDesignation1}</h3>
                        <h3 >{this.props.description1}</h3>

                        {/* <button className={styles.buynow}>Buy Now</button> */}
                      </div>
                      <div className={styles.image}> <img src={image1 != null && image1 != "" ? image1 : "https://devbeam.sharepoint.com/sites/ModernConnect/SiteAssets/Logo/Icons/people-profile-placeholder.png"} width="300" /> </div>

                    </div>

                  </div>

                  {/* </div> */}
                </Col>
                :
                <Col className={styles.myColl} lg>
                  {/* <di v className={styles['box-cell']}> */}
                  <div className={styles.wrapper}>
                    <div className={styles.card2}>

                      <div className={styles.image}>  </div>

                    </div>

                  </div>

                  {/* </div> */}
                </Col>

              }


              {this.props.profileName2 != null && this.props.profileName2 != "" ?
                // <div className={styles['box-cell']} >
                <Col className={styles.myColl} lg>
                  <div className={styles.wrapper}>
                    <div className={styles.card} onClick={() => this.openModal(2)}>
                      <div className={styles.aboutpeople} >
                        <h2>{this.props.profileName2}</h2>
                        <h3>{this.props.profileDesignation2}</h3>
                        <h3>{this.props.description2}</h3>

                        {/* <button className={styles.buynow}>Buy Now</button> */}
                      </div>
                      <div className={styles.image}> <img src={image2 != null && image2 != "" ? image2 : "https://devbeam.sharepoint.com/sites/ModernConnect/SiteAssets/Logo/Icons/people-profile-placeholder.png"} width="300" /> </div>

                    </div>

                  </div>


                  {/* </div> */}
                </Col >
                :
                <Col className={styles.myColl} lg>
                  {/* <di v className={styles['box-cell']}> */}
                  <div className={styles.wrapper}>
                    <div className={styles.card2}>

                      <div className={styles.image}>  </div>

                    </div>

                  </div>

                  {/* </div> */}
                </Col>
              }


              {this.props.profileName3 != null && this.props.profileName3 != "" ?
                // <div className={styles['box-cell']} >
                <Col className={styles.myColl} lg>
                  <div className={styles.wrapper}>
                    <div className={styles.card} onClick={() => this.openModal(3)}>
                      <div className={styles.aboutpeople} >
                        <h2>{this.props.profileName3}</h2>
                        <h3>{this.props.profileDesignation3}</h3>
                        <h3>{this.props.description3}</h3>

                        {/* <button className={styles.buynow}>Buy Now</button> */}
                      </div>
                      <div className={styles.image}> <img src={image3 != null && image3 != "" ? image3 : "https://devbeam.sharepoint.com/sites/ModernConnect/SiteAssets/Logo/Icons/people-profile-placeholder.png"} width="300" /> </div>
                    </div>
                  </div>
                  {/* </div> */}
                </Col>
                :
                <Col className={styles.myColl} lg>
                  {/* <di v className={styles['box-cell']}> */}
                  <div className={styles.wrapper}>
                    <div className={styles.card2}>

                      <div className={styles.image}>  </div>

                    </div>

                  </div>

                  {/* </div> */}
                </Col>
              }

              {this.props.profileName4 != null && this.props.profileName4 != "" ?
                // <div className={styles['box-cell']} >
                <Col className={styles.myColl} lg>
                  <div className={styles.wrapper}>
                    <div className={styles.card} onClick={() => this.openModal(4)}>
                      <div className={styles.aboutpeople} >
                        <h2>{this.props.profileName4}</h2>
                        <h3>{this.props.profileDesignation4}</h3>
                        <h3>{this.props.description4}</h3>

                        {/* <button className={styles.buynow}>Buy Now</button> */}
                      </div>
                      <div className={styles.image}> <img src={image4 != null && image4 != "" ? image4 : "https://devbeam.sharepoint.com/sites/ModernConnect/SiteAssets/Logo/Icons/people-profile-placeholder.png"} width="300" /> </div>

                    </div>
                  </div>
                  {/* </div> */}
                </Col>
                :
                <Col className={styles.myColl} lg>
                  {/* <di v className={styles['box-cell']}> */}
                  <div className={styles.wrapper}>
                    <div className={styles.card2}>

                      <div className={styles.image}>  </div>

                    </div>

                  </div>

                  {/* </div> */}
                </Col>
              }

              {this.props.profileName5 != null && this.props.profileName5 != "" ?
                // <div className={styles['box-cell']} >
                <Col className={styles.myColl} lg>

                  <div className={styles.wrapper}>
                    <div className={styles.card} onClick={() => this.openModal(5)}>
                      <div className={styles.aboutpeople} >
                        <h2>{this.props.profileName5}</h2>
                        <h3>{this.props.profileDesignation5}</h3>
                        <h3>{this.props.description5}</h3>

                        {/* <button className={styles.buynow}>Buy Now</button> */}
                      </div>
                      <div className={styles.image}> <img src={image5 != null && image5 != "" ? image5 : "https://devbeam.sharepoint.com/sites/ModernConnect/SiteAssets/Logo/Icons/people-profile-placeholder.png"} width="300" /> </div>

                    </div>
                  </div>
                  {/* </div> */}
                </Col>
                :
                <Col className={styles.myColl} lg>
                  {/* <di v className={styles['box-cell']}> */}
                  <div className={styles.wrapper}>
                    <div className={styles.card2}>

                      <div className={styles.image}>  </div>

                    </div>

                  </div>

                  {/* </div> */}
                </Col>
              }


            </Row>

            {/* </div> */}


          </div>
          {this.state.showDescriptionModal == true ?
            <DescriptionModal onClose={this.closeModal} dataset={this.state.currentDataset} ></DescriptionModal>
            :
            null
          }


        </Container>

      </div>





      // <div className={styles.wrapper}>
      //   <div className={styles.card}>
      //   <div className={styles.aboutpeople} >
      //       <h2>Jonathan Armstrong</h2>
      //       <h3>Brand Ambassador</h3> 
      //       <h3>House of Suntory</h3> 

      //       {/* <button className={styles.buynow}>Buy Now</button> */}
      //     </div>
      //     <div className={styles.image}> <img src="https://thumbs.dreamstime.com/b/sommelier-tasting-alcohol-bearded-man-suspenders-drink-red-wine-brutal-guy-bartender-bow-tie-elegant-male-barman-handsome-203135565.jpg" width="300" /> </div>

      //   </div>
      // </div>

      // <div className={styles.wrapper}>
      //   <div className={styles.card}>
      //   <div className={styles.aboutpeople} >
      //       <h2>Jonathan Armstrong</h2>
      //       <h3>Brand Ambassador</h3> 
      //       <h3>House of Suntory</h3> 

      //       {/* <button className={styles.buynow}>Buy Now</button> */}
      //     </div>
      //     <div className={styles.image}> <img src="https://thumbs.dreamstime.com/b/sommelier-tasting-alcohol-bearded-man-suspenders-drink-red-wine-brutal-guy-bartender-bow-tie-elegant-male-barman-handsome-203135565.jpg" width="300" /> </div>

      //   </div>

      // </div>


      // </div> 


    );
  }
}
