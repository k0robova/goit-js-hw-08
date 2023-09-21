import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const lastVideoData = localStorage.getItem(STORAGE_KEY);
// const parsedLastVideoData = JSON.parse(lastVideoData);
const parsedLastVideoData = lastVideoData ? JSON.parse(lastVideoData) : null;

if (parsedLastVideoData && parsedLastVideoData.seconds) {
  player.setCurrentTime(parsedLastVideoData.seconds);
}

// player.setCurrentTime(parsedLastVideoData.seconds);

function handleThrottle(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

player.on('timeupdate', throttle(handleThrottle, 1000));
