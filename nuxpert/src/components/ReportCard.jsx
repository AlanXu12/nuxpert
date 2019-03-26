import React, { Component } from 'react';
import './ReportCard.css'

class ReportCard extends Component {

  constructor(props) {
    super(props);
    console.log("this.props.image: ", this.props.image);
    const displayImage = (this.props.image != null)? this.props.image : "https://www.eatright.org/-/media/eatrightimages/food/nutrition/nutritionfactsandfoodlabels/nutritionfacts2016.jpg?la=en&hash=CE6F2C9DBF73E50256EA72EABDBDF46E5396FD2E";
    // console.log("image: ", image);
    this.state = {
      title: "Test Title",
      date: "YYYY-MM-DD",
      image: displayImage,
      briefIntro: "Some brief description of report for this certain time of scanning search..."
    };
  }

  render() {
    return (
      <div className="card bg-secondary">
        <div className="show-image">
          <img className="card-img-top" src={this.state.image} alt="Card image top"/>
          <a className="preview" href="#">
            <img src={require('../media/preview-icon.svg')}/>
          </a>
          <a className="delete" href="#">
            <img src={require('../media/delete-icon.svg')}/>
          </a>
        </div>
        <div className="card-body">
          <h3 className="card-title">{this.state.title}</h3>
          <h4 className="card-subtitle">{this.state.date}</h4>
          <p className="card-text">{this.state.briefIntro}</p>
        </div>
      </div>
    );
  }
}
export default ReportCard;
