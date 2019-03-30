import React, { Component } from 'react';
import './ReportCard.css'

class ReportCard extends Component {

  constructor(props) {
    super(props);
    console.log("this.props: ", this.props);
    console.log("this.props.image: ", this.props.image);
    console.log("this.props.imageId: ", this.props.imageId);
    const displayImage = (this.props.image != null)? this.props.image : "https://www.eatright.org/-/media/eatrightimages/food/nutrition/nutritionfactsandfoodlabels/nutritionfacts2016.jpg?la=en&hash=CE6F2C9DBF73E50256EA72EABDBDF46E5396FD2E";
    const imageId = this.props.imageId;
    const time = this.props.time;
    console.log("this.props: ", this.props);
    console.log("this.askParentShowReport: ", this.askParentShowReport);
    console.log("this.askParentDeleteReport: ", this.askParentDeleteReport);
    console.log("this.props.deleteReportFromParent: ", this.props.deleteReportFromParent);
    // this.deleteReportFromParent = this.askParentDeleteReport.bind(this);
    this.askParentShowReport = this.askParentShowReport.bind(this);
    // console.log("image: ", image);
    this.state = {
      image: displayImage,
      imageId: imageId,
      time: time,
      // title: "Test Title",
      // date: "YYYY-MM-DD",
      // briefIntro: "Some brief description of report for this certain time of scanning search...",
    };
  }

  askParentShowReport = (e) => {
    e.preventDefault();
    this.props.showReportFromParant(this.state.imageId);
  }

  // askParentDeleteReport = (e) => {
  //   e.preventDefault();
  //   this.props.deleteReportFromParent(this.state.imageId)
  // }

  render() {
    return (
      <div className="card bg-secondary">
        <div className="show-image">
          <img className="card-img-top" src={this.state.image} alt="Card image top"/>
          <a className="preview" href="#">
            <img src={require('../media/preview-icon.svg')} onClick={ this.askParentShowReport }/>
          </a>
          {/* TODO: replace href here to the URL that can delete the corresponding image and its report */}
          {/*
          <a className="delete" href="">
            <img src={require('../media/delete-icon.svg')} onClick={ this.askParentDeleteReport }/>
          </a>
          */}
        </div>
        <div className="card-body">
          {/* <h3 className="card-title">{this.state.title}</h3> */}
          <h4 className="card-subtitle">{this.state.time}</h4>
          {/* <p className="card-text">{this.state.briefIntro}</p> */}
        </div>
      </div>
    );
  }
}
export default ReportCard;