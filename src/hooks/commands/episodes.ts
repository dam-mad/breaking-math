import { useReducer, useEffect } from 'react';
import { initialState, reducer } from '../../store/reducers/home';
import { allEpisodes } from '../queries/allEpisodes';
import { useStaticQuery } from 'gatsby';

// const [state, dispatch] = useReducer(reducer, initialState);
// console.log('useFetchEpisodes STATE: ', state);
export const useFetchEpisodes = () => {
  console.count('useFetchEpisodes: ');

  const { allAnchorEpisode } = useStaticQuery(allEpisodes);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: 'TEST_ACTION',
      payload: allAnchorEpisode
    });
  }, []);

  // useEffect(() => {
  //   console.log(`running useEffect: `);
  //   fetchAllEpisodes();
  // }, []);

  // const fetchAllEpisodes = () => {
  //   const { allAnchorEpisode } = useStaticQuery(allEpisodes);
  //   dispatch({
  //     type: 'TEST_ACTION',
  //     payload: allAnchorEpisode
  //   });
  // };

  return state;
};
