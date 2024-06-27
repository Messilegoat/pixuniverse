// reducers/musicplayer.js

import { TOGGLE_MUSIC_PLAYER, PAUSE_SONG, PLAY_SONG } from '../actions/musicplayer';


const initialState = {
  isPlaying: false,
  selectedSong: null,
};

const musicPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MUSIC_PLAYER:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    case PAUSE_SONG:
      return {
        ...state,
        isPlaying: false,
      };
    case PLAY_SONG:
      return {
        ...state,
        isPlaying: true,
        selectedSong: action.payload.songName,
      };
    default:
      return state;
  }
};

export default musicPlayerReducer;
