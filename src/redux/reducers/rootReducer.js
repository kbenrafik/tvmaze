import { combineReducers } from 'redux';
import showsReducer from './showsReducer';
import seasonsReducer from './seasonsReducer';
import episodesReducer from './episodesReducer';
import episodeReducer from './episodeReducer';

export default combineReducers({
  shows: showsReducer,
  seasons: seasonsReducer,
  episodes: episodesReducer,
  episode: episodeReducer,
});