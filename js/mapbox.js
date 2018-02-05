var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
    'board-buttons': function (t, options) {
        return [
            {
                icon: './images/icon-white.svg',
                text: 'Mapbox',
                callback: function (t) {
                    console.log("no return test");
                    return t.modal({
                        url: './index.html',
                        accentColor: '#F2D600', // Optional color for the modal header 
                        fullscreen: true
                    });
                }
            }
        ]
    }
});