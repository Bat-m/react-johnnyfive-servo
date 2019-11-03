// @flow

import { connect } from 'react-redux';

import { servoMax } from '../actions/traffic-lights';
import Button from '../components/button';

/**
 *
 * Max Sequence Button
 *
 * This button put the servo to the max position.
 *
 */

const mapStateToProps = () => ({
  label: 'Max position',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(servoMax()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
