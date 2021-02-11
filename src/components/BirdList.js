import React from "react";
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { selectedBird } from '../actions'

class BirdList extends React.Component {
  renderList = () => {
    return this.props.birds.map(bird => {
      return (
        <Card key={bird.name}>
          <Card.Body className="d-flex justify-content-between">
            <Card.Text>
              {bird.name}
            </Card.Text>
            <Button onClick={() => this.props.selectedBird(bird)} variant="dark">Click to view</Button>{' '}
          </Card.Body>
        </Card>
      )
    })
  }

  render() {
    console.log(this.props);
    return <div>{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
  return { birds: state.birds };
};

export default connect(mapStateToProps, { selectedBird } )(BirdList);
