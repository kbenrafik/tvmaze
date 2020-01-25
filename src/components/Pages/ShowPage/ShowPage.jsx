import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useParams
} from 'react-router-dom';

import { actions } from '../../../redux/actions';
import selectors from '../../../redux/selectors';
import Seasons from '../../Seasons';
import Layout from '../../Layout';
import './ShowPage.scss';

/**
 * Show page
 * @returns {null|*}
 * @constructor
 */
const ShowPage = () => {
  let {
    id
  } = useParams();
  const dispatch = useDispatch();
  const show = useSelector(state => selectors.selectShow(state, id));
  const getShow = id => dispatch(actions.getShow(id));

  useEffect(() => {
    getShow(id);
  }, [id]);

  if (!show) {
    return null;
  }

  const showImageStyle = {
    backgroundImage: `url(${show.getImage()})`
  };

  return (
    <Layout>
      <div className="show-image__wrapper">
        <div className="show-image" style={showImageStyle}/>
      </div>
      <div className="show-detail__wrapper">
        <div className="show-detail">
          <div className="show-cover">
            <img className="show-cover__image" src={show.getImage('medium')} alt=""/>
          </div>
          <h1 className="show-name">
            {show.getName()}
          </h1>
        </div>
        <div className="show__summary" dangerouslySetInnerHTML={{__html: show.getSummary()}}/>
        <div className="show-episodes">
          <h3 className="show__episodes-title">Episodes</h3>
          <div className="show-episodes__list">
            <Seasons idShow={id}/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShowPage;