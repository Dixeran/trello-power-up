var Promise = TrelloPowerUp.Promise;//调用第三方Promise
var MData = {
    city: '',
    pois: []
}

//高德地图搜索服务
AMap.service('AMap.PlaceSearch',function(){
    PlaceSearch = new AMap.PlaceSearch();
})

TrelloPowerUp.initialize({
    // 看板右上角按钮
    'board-buttons': function (t, options) {
        return [
            {
                icon: './images/icon-white.svg',
                text: 'Mapbox',
                callback: function (t) {
                    return t.modal({
                        url: './modal.html',
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
        return t.card('name').get('name').then(function (CardName) {
            console.log(CardName);
            PlaceSearch.search(CardName, function (status, result) {
                var poi = result.pois[0].name + ";" + result.pois[0].address;
                console.log(poi);
            });
        })
    }
});