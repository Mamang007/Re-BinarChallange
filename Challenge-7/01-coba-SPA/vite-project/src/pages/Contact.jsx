import { Component, Fragment } from "react";
import { Container } from "reactstrap";
import NavigasiBar from "../components/NavigasiBar";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <NavigasiBar />
        <Container className="p-4">Ini halaman Contact</Container>
      </Fragment>
    );
  }
}

export default Contact;
