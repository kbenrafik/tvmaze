import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/actions';
import selectors from '../../redux/selectors';
import Episode from '../Episode';
import './Episodes.scss';

/**
 * Episodes by season
 * @param {String} idShow
 * @returns {*}
 * @constructor
 */
const Episodes = ({
  idSeason,
  idShow
}) => {
  const dispatch = useDispatch();
  const episodes = useSelector(state => selectors.selectEpisodes(state, idShow, idSeason));
  const getEpisodesBySeason = (idShow, idSeason) => dispatch(actions.getEpisodesBySeason(idShow, idSeason));

  useEffect(() => {
    getEpisodesBySeason(idShow, idSeason);
  }, [idShow, idSeason]);

  if (!episodes || !episodes.length) {
    return null;
  }

  return (episodes || [])
    .map(episode => <Episode episode={episode} idShow={idShow} key={episode.getId()}/>);
};

export default Episodes;