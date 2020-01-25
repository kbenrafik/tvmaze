import React, { useEffect, useState } from 'react';
import {
  useAppClient
} from '../AppContext';
import Episode from '../Episode';
import './Episodes.scss';

/**
 * Episodes grouped by seasons
 * @param {String} idShow
 * @returns {*}
 * @constructor
 */
const Episodes = ({
  idShow
}) => {
  const [episodes, setEpisodes] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState();
  const client = useAppClient();

  useEffect(() => {
    const fetch = async () => {
      const seasons = await client.season.list(idShow);
      setSeasons(seasons);
      const firstSeason = seasons[0];
      await onSelectSeason(firstSeason.getId());
    };

    fetch();
  }, [idShow]);

  /**
   * On select a season should sow fetch the list of episodes
   * @param {String} idSeason
   * @returns {Promise<void>}
   */
  const onSelectSeason = async (idSeason) => {
    setSelectedSeason(idSeason);
    const episodes = await client.episode.listBySeason(idSeason);
    setEpisodes(episodes);
  };

  /**
   * Render seasons list as numbers
   * @param {SeasonModel[]} seasons
   * @returns {null|*}
   */
  const renderSeasons = (seasons) => {
    if (!seasons || !seasons.length) {
      return null;
    }
    return (
      <ul>
        {seasons.map(season => {
          return (
            <li>
              <span
                className="episodes__season"
                onClick={() => onSelectSeason(season.getId())}>
                Season {season.getNumber()}
              </span>
            </li>
          );
        })}
      </ul>
    );
  };

  /**
   * Render episodes
   * @param {EpisodeModel[]} episodes
   * @returns {null|*}
   */
  const renderEpisodes = (episodes) => {
    if (!seasons || !seasons.length) {
      return null;
    }
    return episodes
      .map(episode => <Episode episode={episode} idShow={idShow}/>);
  };


  return (
    <div className="episodes">
      <div className="episodes__seasons">
        {renderSeasons(seasons)}
      </div>
      <div className="episodes__list">
        {renderEpisodes(episodes)}
      </div>
    </div>
  );
};

export default Episodes;