import { Component, Fragment } from "react";
import { Container } from "reactstrap";
import NavigasiBar from "../components/NavigasiBar";
import PropTypes from "prop-types";

class Post extends Component {
  render() {
    const { title } = this.props;
    return <h5>{title}</h5>;
  }
}

class Home extends Component {
  state = { posts: [] };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ posts: result });
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <NavigasiBar />
        <Container className="p-4">
          {posts.map((i) => (
            <Post key={i.id} title={i.title} />
          ))}
        </Container>
      </Fragment>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string,
};

export default Home;
