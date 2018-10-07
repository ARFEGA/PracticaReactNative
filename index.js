/** @format */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

//import env from 'node-env-file'
//var env = require('node-env-file'); // .env file
//env(__dirname + '/.env');

AppRegistry.registerComponent(appName, () => App);
