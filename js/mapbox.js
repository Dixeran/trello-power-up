//var Promise = TrelloPowerUp.Promise;
var GLITCH_ICON = './images/glitch.svg';
var WHITE_ICON = './images/icon-white.svg';
var GRAY_ICON = './images/icon-gray.svg';
var randomBadgeColor = function() {
    return ['green', 'yellow', 'red', 'none'][Math.floor(Math.random() * 4)];
  };
var getBadges = function(t){
return t.card('name')
.get('name')
.then(function(cardName){
    console.log('We just loaded the card name for fun: ' + cardName);
    
    return [{
    // dynamic badges can have their function rerun after a set number
    // of seconds defined by refresh. Minimum of 10 seconds.
    dynamic: function(){
        // we could also return a Promise that resolves to this as well if we needed to do something async first
        return {
        title: 'Detail Badge', // for detail badges only
        text: 'Dynamic ' + (Math.random() * 100).toFixed(0).toString(),
        icon: GRAY_ICON, // for card front badges only
        color: randomBadgeColor(),
        refresh: 10 // in seconds
        };
    }
    }, {
    // its best to use static badges unless you need your badges to refresh
    // you can mix and match between static and dynamic
    title: 'Detail Badge', // for detail badges only
    text: 'Static',
    icon: GRAY_ICON, // for card front badges only
    color: null
    }, {
    // card detail badges (those that appear on the back of cards)
    // also support callback functions so that you can open for example
    // open a popup on click
    title: 'Popup Detail Badge', // for detail badges only
    text: 'Popup',
    icon: GRAY_ICON, // for card front badges only
    callback: function(context) { // function to run on click
        return context.popup({
        title: 'Card Detail Badge Popup',
        url: './settings.html',
        height: 184 // we can always resize later, but if we know the size in advance, its good to tell Trello
        });
    }
    }, {
    // or for simpler use cases you can also provide a url
    // when the user clicks on the card detail badge they will
    // go to a new tab at that url
    title: 'URL Detail Badge', // for detail badges only
    text: 'URL',
    icon: GRAY_ICON, // for card front badges only
    url: 'https://trello.com/home',
    target: 'Trello Landing Page' // optional target for above url
    }];
});
};

TrelloPowerUp.initialize({
    // 看板右上角按钮
    'board-buttons': function (t, options) {
        return [
            {
                icon: './images/icon-white.svg',
                text: 'Mapbox',
                callback: function (t) {
                    return t.modal({
                        url: './index.html',
                        accentColor: '#F2D600', // Optional color for the modal header 
                        fullscreen: true
                    });
                }
            }
        ]
    },
    // 卡片标签
    'card-badges': function (t, options) {
        console.log('in card-badges');
        return getBadges(t);
    }
});