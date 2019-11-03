// @flow
import express from 'express';
import { Server } from 'http';
import socketIO from 'socket.io';

import { webPort, staticPath } from '../shared/config';
import renderApp from './render-app';

const Raspi = require('raspi-io').RaspiIO;
const five = require('johnny-five');
const board = new five.Board({
  io: new Raspi()
});

// Import our Redux actions for the lights
import {
  SERVO_MIN,
  SERVO_MAX,
} from '../shared/actions/traffic-lights';


const app = express();
// flow-disable-next-line
const http = Server(app);
const io = socketIO.listen(http);

// Set `dist` and `static` under the same path
app.use(staticPath, express.static('dist'));
app.use(staticPath, express.static('static'));

// When the page is requested, render our app
app.get('/', (req, res) => {
  res.send(renderApp());
});

http.listen(webPort, () => {
  console.log(`Server running on port ${webPort}`);
});


/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
board.on('ready', function() {
  // Tell the terminal that the robot is working
  console.log('[johnny-five] Robot Online.');

  //const s = new ServoOrder(servs);
  

 var servo = new five.Servo(1);

  this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    on: function() {
      servo.min();
    },
    off: function() {
      servo.max();
    }
  });
  
   io.on('connection', (socket) => {
    console.log('[socket.io] A client connected');
    socket.on('action', (action) => {
      switch (action.type) {
        case SERVO_MIN:
          servo.min();
          break;
        case SERVO_MAX:
          servo.max();
          break;
        
        default:
          servo.center();
          break;
      }
    });
  });
  /**
   *
   * Sockets and Actions for the Robot.
   *
   * If our app is connected, wait for specific actions to happen in our store.
   * When a particular action happens, the robot should execute the specific
   * function within the class.
   *
   */


  /**
   * Should there be an exit on the board instance, turn all the lights off.
   */
  board.on('exit', () => {
    //l.lightsOff();
  });
});
/* eslint-enable prefer-arrow-callback */
/* eslint-enable space-before-function-paren */
