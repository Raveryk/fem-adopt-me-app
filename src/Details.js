import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  constructor() {
    super();

    this.state = { loading: true };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState({
      loading: false,
      name: json.pets[0].name,
    });
  }
  //class components always have this
  render() {
    return <h2>hi</h2>;
  }
}

export default Details;
