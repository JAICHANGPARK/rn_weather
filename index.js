/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainApp from './app/ui/MainApp'

AppRegistry.registerComponent(appName, () => MainApp);
