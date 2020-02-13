import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';
import {
  drinkCoffee,
  eatSnack,
  takeNap,
  study
} from '../../actions/moodActions';

const Controls = ({ dispatch }) => (
  <section className={styles.Controls}>
    <button onClick={() => dispatch(drinkCoffee())}>Drink Coffee</button>
    <button onClick={() => dispatch(eatSnack())}>Eat Snack</button>
    <button onClick={() => dispatch(takeNap())}>Take Nap</button>
    <button onClick={() => dispatch(study())}>Study</button>
  </section>
);

Controls.propTypes = {
  dispatch: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
  })).isRequired,
};

export default Controls;
