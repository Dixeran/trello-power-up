var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
    'board-buttons': function (t, options) {
        return [
            {
                icon: './images/icon-white.svg',
                text: 'Mapbox',
                callback: function () {
                    console.log("no return test");
                    return console.log("hahaha");
                }
            }
        ]
    }
});