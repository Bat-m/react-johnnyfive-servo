// @flow

//export const LIGHTS_ON = 'LIGHTS_ON';
//export const LIGHTS_OFF = 'LIGHTS_OFF';

export const SERVO_MIN = 'SERVO_MIN';
export const SERVO_MAX = 'SERVO_MAX';

let lightsOn = false;
let pulse = false;
let loop = false;


/**
 *
 * Traffic Light Actions
 *
 * These functions are our actions — each function can be placed into our app's
 * containers. In this case, the buttons on our interface will execute these
 * functions on click and update our store.
 *
 */

//export const lightsToggle = () => {
  //if (lightsOn) {
    //lightsOn = false;
  //} else {
    //lightsOn = true;
  //}

  //return {
    //type: lightsOn ? LIGHTS_ON : LIGHTS_OFF,
    //meta: { remote: true },
    //payload: lightsOn ? 'Lights are on.' : 'Lights are off.',
  //};
//};

export const servoMin = () => ({
  type: SERVO_MIN,
  meta: { remote: true },
  payload: 'Servo en position Min',
});

export const servoMax = () => ({
  type: SERVO_MAX,
  meta: { remote: true },
  payload: 'Servo en position Max',
});
