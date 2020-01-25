/* Paths of all end points */
export const routes = {
  showPath: (idShow = '') => `shows/${idShow}`,
  episodePath: (idEpisode = '') => `episodes/${idEpisode}`,
  episodesByShowPath: (idShow = '') => `shows/${idShow}/episodes`,
  seasonsPath: (idShow = '') => `shows/${idShow}/seasons`,
  EpisodesBySeasonPath: (idSeason = '') => `seasons/${idSeason}/episodes`,
};