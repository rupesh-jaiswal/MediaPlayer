// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import Ferret from './components/Ferret';
//import Login from './components/Login'
// import TBD from 'grommet/components/TBD';

export let routes = [
  { path: '/', component: Ferret, 
    childRoutes: [
    //  { path: 'login', component: Login },  indexRoute: { component: Status },
    ]
  }
];
