// @flow

import { connect } from 'react-redux';

import { servoMin } from '../actions/traffic-lights';
import Button from '../components/button';

/**
 *
 * Min Sequence Button
 *
 * This button put the servo to the min position.
 *
 */

const mapStateToProps = () => ({
  label: 'Min position',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(servoMin()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
