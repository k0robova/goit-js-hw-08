import Player from '@vimeo/player';

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// event - timeupdate

function onTimeUpdate(data) {
  console.log(data);

  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}
const lastVideoData = localStorage.getItem('videoplayer-current-time');
const parsedLastVideoData = JSON.parse(lastVideoData);

player.setCurrentTime(parsedLastVideoData.seconds);

function handleThrottle(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}
const onThrottle = throttle(handleThrottle, 1000);
player.on('timeupdate', onThrottle);
