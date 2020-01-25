import _ from 'lodash';

const selectShow = (state, idShow) => _.get(state, `shows.${idShow}`);
const selectSeasons = (state, idShow) => _.get(state, `seasons.${idShow}`);
const selectEpisodes = (state, idShow, idSeason) => _.get(state, `episodes.${idShow}.${idSeason}`);
const selectEpisode = (state, idEpisode) => _.get(state, `episode.${idEpisode}`);

export default {
  selectShow,
  selectSeasons,
  selectEpisodes,
  selectEpisode
}