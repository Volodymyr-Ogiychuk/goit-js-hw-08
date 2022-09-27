// import Player from '@vimeo/playerr';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

if (localStorage.length !== 0) {
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
console.log('playing will start from this moment!', localStorage.getItem('videoplayer-current-time'));

player.on('play', function () {
        
});
};

player.on('timeupdate', throttle(function () {

        player.getCurrentTime().then(function (seconds) {
            localStorage.setItem('videoplayer-current-time', seconds);
            console.log('Что в локале сохранилось', localStorage.getItem('videoplayer-current-time'));
        });
        }, 1000));





