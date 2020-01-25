import React from 'react';
import {
  Link
} from 'react-router-dom';
import './Episode.scss';

/**
 * Component for single episode
 * @param {EpisodeModel} episode
 * @param {String} idShow
 * @returns {null|*}
 * @constructor
 */
const Episode = ({
  episode,
  idShow
}) => {
  if (!episode) {
    return null;
  }

  return (
    <div className="episode__wrapper">
      <div className="episode__cover">
        <Link to={`/show/${idShow}/episode/${episode.getId()}`}>
          <img src={episode.getImage('medium')} alt={episode.getName()}/>
        </Link>
      </div>
      <div className="episode__detail">
        <h3 className="episode__name">
          {episode.getName()}
        </h3>
        <div className="episode__summary" dangerouslySetInnerHTML={{__html: episode.getSummary()}}/>
      </div>
    </div>
  );
};

export default Episode;