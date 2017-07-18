// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import MediaPlayer from './components/MediaPlayer';
//import Login from './components/Login'
// import TBD from 'grommet/components/TBD';

export let routes = [
  { path: '/', component: MediaPlayer, 
    childRoutes: [
    //  { path: 'login', component: Login },  indexRoute: { component: Status },
    ]
  }
];
