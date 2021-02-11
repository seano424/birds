import React from 'react';
import { connect } from 'react-redux';
import Image from 'react-bootstrap/Image';

const BirdImage = (props) => {
  console.log(props);
  return (
    <Image key={props.bird.name} src={props.bird.imgUrl} rounded fluid />
  )
}

const mapStateToProps = state => {
  return { bird: state.bird }
}

export default connect(mapStateToProps)(BirdImage);