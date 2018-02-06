//var Promise = TrelloPowerUp.Promise;

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
        return t.card('name').get('name').then(function (CardName) {
            console.log(CardName);
            return [
                {
                    text: 'test1',
                    icon: './images/icon-gray.svg',
                },
                {
                    text: 'test2',
                    color: "green"
                }
            ];
        });
    }
});