// @flow

import React from 'react';
import MessageModal from './containers/message-modal';
import MinButton from './containers/min-button';
import MaxButton from './containers/max-button';

/**
 *
 * App Container
 *
 * This places all the necessary components in one single Component wrapper.
 *
 */
const App = () => (
  <div className="traffic-lights-app">
    <MessageModal />
    <ul className="light-buttons">
      
      <li>
        <MinButton />
      </li>
      <li>
        <MaxButton />
      </li>
    </ul>
  </div>
);

export default App;
