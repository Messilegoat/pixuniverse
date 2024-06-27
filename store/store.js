import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import musicPlayerReducer from './reducers/musicplayer'; // Your music player reducer
import { TOGGLE_MUSIC_PLAYER } from './actions'; // Import the action type
import { selectSongs } from './selectors/musicplayer'; // Import the selector

import sharedReducers, { CURRENT_VERSION, migrate } from './sharedReducers';

/*
 * reducers
 */
import windows from './reducers/windows';
import alert from './reducers/alert';

/*
 * middleware
 */
import audio from './middleware/audio';
import socketClientHook from './middleware/socketClientHook';
import rendererHook from './middleware/rendererHook';
import array from './middleware/array';
import notifications from './middleware/notifications';
import title from './middleware/title';
import popUps from './middleware/popUps';
import extensions from './middleware/extensions';

const windowsPersist = persistReducer({
  key: 'wind',
  storage,
  version: CURRENT_VERSION,
  migrate,
}, windows);

const reducers = combineReducers({
  ...sharedReducers,
  windows: windowsPersist,
  alert,
  musicPlayer: musicPlayerReducer, // Add the musicPlayerReducer here
});

const store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    array,
    popUps,
    audio,
    notifications,
    title,
    socketClientHook,
    extensions,
    rendererHook,
  ),
);

export default store;
