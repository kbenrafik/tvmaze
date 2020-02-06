TVMAZE was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![Alt text](https://raw.githubusercontent.com/kbenrafik/tvmaze/master/captured.gif "DEMO")

## Table Of Contents

- [Quick start](#quick-start)
- [Application](#application)
- [UI flow](#ui-flow)
- [Data flow](#data-flow)
- [Client API SDK](client-api-SDK)
  + [Show](#show)
  + [Episode](#episode)
  + [Season](#season)
- [Styles](#styles)
- [Test](#test)

## Quick start
`yarn install` and `yarn start` 

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Application

SPA using :
* react: UI library
* redux: state management
* react-thunk: as middleware for async calls
* jest: testing framework
* axios: for making http requests
* sass: for styling

I've used hooks in react and also redux

**Note**: this application is running only in the browser and it's not isomorphic or server side rendering
 
 ## UI flow
 List of pages:
 * Home page: shows a list of shows (currently static list)
 * Show page: detail of the show and list of all seasons, with the list of episodes of the first season  
 * Episode page: detail of episode and button back to show
 
 Routes :
 * Home: /
 * Show: /show/:idShow
 * Episode: /show/:idShow/episode/:idEpisode
 
 ## Data flow
 In page load the application create a new instance of the sdk client, this how we interacte with the thirdparty 'tvmaze',
 and for the react components have access only to actions 'redux' which can get data from tvmaze and store it in the global store.
 
 Store looks like :
 ```
{
  shows: {
    // ID show
    478: {
      // show data
    }
  },
  seasons: {
    // ID show
    478: [
    // list of seasons
    ] 
  },
  episode: {
    // ID episode
    78: {
      //episode details
    }
  }
}
 ```

During calling a new 'record (show, seasons, episode)' I check if it's already in the store 'as cache' if it's the case we prevent the call.
  
 ## Client Api SDK
 the aim of this SDK is to decouple the ui and the api of tvmaze.
 
 Create an instance of sdk
```
import { makeClient } from './client';
const client = makeClient();
```
 ### Show
 ```
// Get a show by ID
const show = await client.show.fetch(idShow);
 ```
 ### Episode
 ```
// get episode by ID
const episode = await client.episode.fetch(idEpisode);
// get episodes by ID season
const episode = await client.episode.listBySeason(isSeason);
// get episodes by ID show
const episode = await client.episode.listByShow(idShow);
 ```
 ### Season
 ```
// get seasons by ID show
const episode = await client.season.list(idShow);
 ```
 ## Styles 
I've inspired a bit by videoland on the css.
I'm using 1 breakpoint in seasons.scss.

**Note**: the css is really just a minimal

## Test
I've done 2 unit test, one for the model (just plain js) and 1 for episode component
files :
* model.test.js
* episode.test.js

You can run tests:
`yarn test`
