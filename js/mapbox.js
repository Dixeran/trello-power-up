var Promise = TrelloPowerUp.Promise;
var aarg = 0;
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
                        args: {
                            abarg: aarg
                        },
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
        setTimeout(function () {
            aarg++;
        }, 1000);
        return t.card('name').get('name').then(function (CardName) {
            console.log(CardName);
            return [
                {
                    text: 'test1',
                    color: 'green'
                },
                {
                    text: 'test2',
                    color: 'red'
                }
            ];
        })
    }
});