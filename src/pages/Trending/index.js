import { Component } from "react";
import axios from "axios";

class Trending extends Component {

  constructor(props){
    super(props);
    this.state = {
      imageSrc: null,
    };
  }

  componentDidMount(){
    axios.get(`${process.env.REACT_APP_API_GIFY_URL}/gifs/trending`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY_GIPHY_API,
        limit: 1,
      }
    }).then((result) => {
      this.setState({
        imageSrc: result.data.data[0].images.original.url,
      });
    });
  }

  render(){
    const { imageSrc } = this.state;
    return(
      <>
        <h2>Trending</h2>
        <img src={imageSrc} />
      </>
    )
  }
}

export default Trending;