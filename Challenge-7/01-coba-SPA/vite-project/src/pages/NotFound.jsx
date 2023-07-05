import { Component, Fragment } from "react";
import { Container } from "reactstrap";
import NavigasiBar from "../components/NavigasiBar";

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <NavigasiBar />
        <Container className="p-4">Ini halaman NotFound</Container>
      </Fragment>
    );
  }
}

export default NotFound;
