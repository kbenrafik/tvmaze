import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/actions';
import selectors from '../../redux/selectors';
import Episodes from '../Episodes';
import './Seasons.scss';

/**
 * Episodes grouped by seasons
 * @param {String} idShow
 * @returns {*}
 * @constructor
 */
const Seasons = ({
  idShow
}) => {
  const [currentIdSeason, setCurrentIdSeason] = useState();
  const dispatch = useDispatch();
  const seasons = useSelector(state => selectors.selectSeasons(state, idShow));
  const getSeasons = idShow => dispatch(actions.getSeasons(idShow));

  useEffect(() => {
    getSeasons(idShow)
  }, [idShow]);

  if(!currentIdSeason && seasons && seasons.length) {
    const firstSeason = seasons[0];
    setCurrentIdSeason(firstSeason.getId());
  }

  /**
   * On select a season
   * @param {String} idSeason
   * @returns {Promise<void>}
   */
  const onSelectSeason = (idSeason) => {
    setCurrentIdSeason(idSeason);
  };

  /**
   * Render seasons
   * @param {SeasonModel[]} seasons
   * @returns {null|*}
   */
  const renderSeasons = (seasons) => {
    return (
      <ul className="seasons__list">
        {(seasons || []).map(season => {
          return (
            <li key={season.getId()}>
              <span
                className="seasons__item"
                onClick={() => onSelectSeason(season.getId())}>
                Season {season.getNumber()}
              </span>
            </li>
          );
        })}
      </ul>
    );
  };

  if(!currentIdSeason) {
    return null;
  }

  return (
    <div className="seasons">
      {renderSeasons(seasons)}
      <div className="seasons__episodes">
        <Episodes idSeason={currentIdSeason} idShow={idShow}/>
      </div>
    </div>
  );
};

export default Seasons;