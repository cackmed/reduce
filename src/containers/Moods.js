import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import moodsReducer from '../reducers/moodReducer';
import { getFace } from '../selectors/moodSelectors';

const state = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};


const Moods = () =>  {
  const [moods, dispatch] = useReducer(moodsReducer, state);
  const face = getFace(moods);

  return (
    <>
      <Controls dispatch={dispatch} />
      <Face emoji={face} />
    </>
  );
};


export default Moods;
