import React, { Component } from 'react';
import axios from 'axios'
import './Home.css'
import '../styles.scss'
import Navigation from '../components/Navigation'
import SearchBar from '../components/Search_bar'
import Intro from '../components/Intro'
// import SearchImage from '../components/Search_image'
class Home extends Component {

    state = {
        image: null,
        result: {},
        redirect: false
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         image: null,
    //         result: {},
    //         redirect: false
    //     }
    // }

    onFileSelect(e) {
        this.setState({
            image: e.target.files[0],
            result: {},
            redirect: false
        })
    }


    // resultRedirect = () => {
    //     console.log("props:", this.props);
    //     if (this.state.redirect) {
    //         const location = {
    //             pathname: '/result',
    //             state: this.state
    //         }
    //         this.props.history.push(location);
    //     }
    // }

    fileUploadHandler = () => {
        let fd = new FormData();
        fd.append('image', this.state.image);
        axios.post("http://localhost:8080/api/search/image/", fd)
            .then(res => {
                console.log(res.data);
                this.setState({
                    image: this.state.image,
                    result: res.data,
                    redirect: true
                });
                console.log("before push props:", this.props);
                console.log("before push, location:", location);
                const location = {
                    pathname: '/result',
                    state: this.state
                }
                this.props.history.push(location);
                // this.props.navigate('Result');
            });
    }

    render() {
        return (
            <div className="container">
                {/* Navigation bar */}
                <Navigation />
                {/* Introduction for nuXpert */}
                <br></br>
                <Intro />
                <br></br>
                {/* search bar */}
                <SearchBar />
                <br></br>
                {/* drag and drop upload */}
                {/* <SearchImage /> */}
                <div onSubmit={this.onFormSubmit}>
                    {/* {this.resultRedirect()} */}
                    <input
                        type="file"
                        name="file"
                        onChange={(e) => this.onFileSelect(e)}
                        encType="multipart/form-data"
                    >
                    </input>
                    <button onClick={this.fileUploadHandler}>See Report</button>
                </div>
            </div>
        );
    }
}

export default Home;

                // credit:
                // react framwork: https://github.com/MyNameIsURL/simple-react-router-demo/tree/master/src
// drag and drop: http://react-dnd.github.io/react-dnd/about
