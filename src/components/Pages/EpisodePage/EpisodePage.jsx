import React, { useEffect, useState } from 'react';
import {
  useParams,
  Link
} from 'react-router-dom';

import {
  useAppClient
} from '../../AppContext';
import Layout from '../../Layout';
import ButtonBase from '../../ButtonBase';
import buttonBack from './images/button-back.svg'
import './EpisodePage.scss';

/**
 * Episode page
 * @returns {*}
 * @constructor
 */
const EpisodePage = () => {
  const [episode, setEpisode] = useState(undefined);
  const client = useAppClient();
  let {
    id: idEpisode,
    idShow
  } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const episodeModel = await client.episode.fetch(idEpisode);
      setEpisode(episodeModel);
    };

    fetch();
  }, [idEpisode]);

  if (!episode) {
    return <div>
      loader
    </div>;
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