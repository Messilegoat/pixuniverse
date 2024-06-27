// actions/musicplayer.js

export const TOGGLE_MUSIC_PLAYER = 'TOGGLE_MUSIC_PLAYER';
export const PAUSE_SONG = 'PAUSE_SONG';
export const PLAY_SONG = 'PLAY_SONG';

export const toggleMusicPlayer = () => ({
  type: TOGGLE_MUSIC_PLAYER,
});

export const pauseSong = () => ({
  type: PAUSE_SONG,
});

export const playSong = (songName) => ({
  type: PLAY_SONG,
  payload: {
    songName,
  },
});
