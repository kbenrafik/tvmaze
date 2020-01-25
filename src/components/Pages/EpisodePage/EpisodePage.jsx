import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useParams,
  Link
} from 'react-router-dom';
import Layout from '../../Layout';
import ButtonBase from '../../ButtonBase';
import selectors from '../../../redux/selectors';
import { actions } from '../../../redux/actions';
import buttonBack from './images/button-back.svg'
import './EpisodePage.scss';

/**
 * Episode page
 * @returns {*}
 * @constructor
 */
const EpisodePage = () => {
  let {
    id: idEpisode,
    idShow
  } = useParams();
  const dispatch = useDispatch();
  const episode = useSelector(state => selectors.selectEpisode(state, idEpisode));
  const getEpisode = id => dispatch(actions.getEpisode(id));

  useEffect(() => {
    getEpisode(idEpisode)
  }, [idEpisode]);

  if (!episode) {
    return null
  }

  const showImageStyle = {
    backgroundImage: `url(${episode.getImage()})`
  };

  return (
    <Layout>
      <div className="page__episode">
        <div className="page__episode-cover">
          <div className="page__episode-image" style={showImageStyle}></div>
        </div>
        <ButtonBase
          className="page__back"
          to={`/show/${idShow}`}
          icon={buttonBack}
          positionIcon="left"
          component={Link}
        >
          Back
        </ButtonBase>
        <div className="page__episode-details">
          <div>
            <div className="page__episode-name">{episode.getName()}</div>
            <div className="page__episode-summary" dangerouslySetInnerHTML={{__html: episode.getSummary()}}/>
            <div className="page__episode-play">Play</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EpisodePage;