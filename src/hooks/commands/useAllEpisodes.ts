import { useReducer } from 'react';
import { reducer, initialState } from '../../store/reducers/home';
import { useFetchEpisodes } from './useFetchAllEpisodes';

export const useAllEpisodes = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { allAnchorEpisode } = useFetchEpisodes();
  return allAnchorEpisode;
};

// console.log('allAnchorEpisode: ', allAnchorEpisode);

// const [state, dispatch] = useReducer(reducer, initialState);

// useEffect(() => {
//   console.log(`: `);
//   dispatch({
//     type: 'TEST_ACTION',
//     payload: allAnchorEpisode
//   });
// }, []);

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
