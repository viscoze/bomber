import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import bomberActions from './redux/bomberActions.js';
import bomberStore from './redux/store.js';
import Bomber from './Bomber.js';

const mapStateToProps = (state) => ({
  canvasState: state,
});

const mapDispatchToProps = (dispatch) => ({
  createPlayer: (startX, startY, color) => dispatch(bomberActions.createPlayer(startX, startY, color)),
  movePlayer: (playerId, direction) => dispatch(bomberActions.movePlayer(playerId, direction)),
});

const BomberContainer = connect(mapStateToProps, mapDispatchToProps)(Bomber);

export default () => (
  <Provider store={bomberStore}>
    <BomberContainer />
  </Provider>
);
