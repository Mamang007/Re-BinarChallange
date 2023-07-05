//////// About untuk upload file ////////////
// import React, { Component, Fragment } from "react";
// import { Container } from "reactstrap";
// import NavigasiBar from "../components/NavigasiBar";

// class About extends Component {
//   state = { image: null };

//   file = React.createRef();

//   handleSubmit = (e) => {
//     e.preventDefault();
//     // Upload ke Backend pake axios/fetch
//   };

//   handleFileChange = (e) => {
//     const file = this.file.current.files[0];
//     const reader = new FileReader();
//     reader.addEventListener(
//       "load",
//       () => {
//         this.setState({ image: reader.result });
//       },
//       false
//     );
//     if (file.type.includes("image/")) reader.readAsDataURL(file);
//   };

//   render() {
//     const { image } = this.state;
//     return (
//       <Fragment>
//         <NavigasiBar />
//         <Container className="p-4">
//           {!!image && <img src={image} alt="Preview" />}
//           <form onSubmit={this.handleSubmit}>
//             <input type="file" name="photo" ref={this.file} onChange={this.handleFileChange} />
//             <input type="submit" value="submit" />
//           </form>
//         </Container>
//       </Fragment>
//     );
//   }
// }

// export default About;

//////// About untuk upload file ////////////
import { Component, Fragment } from "react";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { Button, Container } from "reactstrap";
import NavigasiBar from "../components/NavigasiBar";

class About extends Component {
  state = { isAuthenticated: false };
  componentWillMount() {
    this.chekUser();
  }

  // Ini nanti harusnya request beneran ke server
  chekUser = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Cek token valid server.
      return this.setState({ isAuthenticated: true });
    }
  };
  handleLogout = () => {
    const { history } = this.props;
    localStorage.removeItem("token");
    history.push("/login");
  };

  render() {
    const { isAuthenticated } = this.state;
    if (!isAuthenticated) return <Redirect to="/login" />;
    return (
      <Fragment>
        <NavigasiBar />
        <Container className="p-4">
          <h1>Ini halaman About</h1> <Button color="danger">Logout</Button>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(About);
