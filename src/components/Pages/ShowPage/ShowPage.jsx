import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';

import {
  useAppClient
} from '../../AppContext';
import Episodes from '../../Episodes';
import Layout from '../../Layout';
import './ShowPage.scss';

/**
 * Show page
 * @returns {null|*}
 * @constructor
 */
const ShowPage = () => {
  const [showModel, setShowModel] = useState(undefined);
  const client = useAppClient();
  let {
    id: showId
  } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const showModel = await client.show.fetch(showId);
      setShowModel(showModel);
      console.log(showModel);
    };

    fetch();
  }, [showId]);

  if (!showModel) {
    return null;
  }

  const showImageStyle = {
    backgroundImage: `url(${showModel.getImage()})`
  };

  return (
    <Layout>
      <div className="show-image__wrapper">
        <div className="show-image" style={showImageStyle}/>
      </div>
      <div className="show-detail__wrapper">
        <div className="show-detail">
          <div className="show-cover">
            <img className="show-cover__image" src={showModel.getImage('medium')} alt=""/>
          </div>
          <h1 className="show-name">
            {showModel.getName()}
          </h1>
        </div>
        <div className="show__summary" dangerouslySetInnerHTML={{__html: showModel.getSummary()}}/>
        <div className="show-episodes">
          <h3 className="show__episodes-title">Episodes</h3>
          <div className="show-episodes__list">
            <Episodes idShow={showId}/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShowPage;