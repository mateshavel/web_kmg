
'use strict';

var regions = [
    {country: 'Česká republika', zoom: 7, lat: 49.885566, lng: 15.584106},
    {country: 'Jihočeský kraj', zoom: 9, lat: 49.0860746, lng: 14.0098258},
    {country: 'Jihomoravský kraj', zoom: 9, lat: 49.115007, lng: 16.693726},
    {country: 'Karlovarský kraj', zoom: 9, lat: 50.153806, lng: 12.716675},
    {country: 'Královéhradecký kraj', zoom: 9, lat: 50.413550, lng: 15.814819},
    {country: 'Liberecký kraj', zoom: 9, lat: 50.741452, lng: 14.913940},
    {country: 'Moravskoslezský kraj', zoom: 9, lat: 49.8598178, lng: 17.4423615},
    {country: 'Olomoucký kraj', zoom: 9, lat: 49.672738, lng: 17.133179},
    {country: 'Pardubický kraj', zoom: 9, lat: 49.885566, lng: 16.089478},
    {country: 'Kraj Praha', zoom: 11, lat: 50.062208, lng: 14.474487},
    {country: 'Plzeňský kraj', zoom: 9, lat: 49.622944, lng: 13.134155},
    {country: 'Středočeský kraj', zoom: 8, lat: 50.005753, lng: 14.551392},
    {country: 'Ústecký kraj', zoom: 9, lat: 50.490498, lng: 13.760376},
    {country: 'Kraj Vysočina', zoom: 9, lat: 49.430403, lng: 15.584106},
    {country: 'Zlínský kraj', zoom: 9, lat: 49.215579, lng: 17.803345}
];

var clubs = [
    {lat:50.060965, lng:14.437323, zoom:16, title: 'Nazev1', subtitle: 'město', text: 'krátký popis klubu. Lorem ipsum dolores kamikaze lopat noise. Black lorem dolores pixel.', url: '/KMGlobal/clubs-detail.html'},
    {lat:50.075289, lng:14.423246, zoom:16, title: 'Nazev2', subtitle: 'město', text: 'krátký popis klubu. Lorem ipsum dolores kamikaze lopat noise. Black lorem dolores pixel.', url: '/KMGlobal/clubs-detail.html'},
    {lat:49.734133, lng:18.113708, zoom:16, title: 'Nazev3', subtitle: 'město', text: 'krátký popis klubu. Lorem ipsum dolores kamikaze lopat noise. Black lorem dolores pixel.', url: '/KMGlobal/clubs-detail.html'},
    {lat:48.917874, lng:16.410828, zoom:16, title: 'Nazev4', subtitle: 'město', text: 'krátký popis klubu. Lorem ipsum dolores kamikaze lopat noise. Black lorem dolores pixel.', url: '/KMGlobal/clubs-detail.html'},
    {lat:50.137195, lng:12.988586, zoom:16, title: 'Nazev5', subtitle: 'město', text: 'krátký popis klubu. Lorem ipsum dolores kamikaze lopat noise. Black lorem dolores pixel.', url: '/KMGlobal/clubs-detail.html'},
    {lat:50.072094, lng:14.502554, zoom:16, title: 'Nazev6', subtitle: 'město', text: 'krátký popis klubu. Lorem ipsum dolores kamikaze lopat noise. Black lorem dolores pixel.', url: '/KMGlobal/clubs-detail.html'}
];



function initMapCluster() {
    var regionId = 0;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: regions[regionId].zoom,
        center: {lat: regions[regionId].lat, lng: regions[regionId].lng},
        styles: [{
            stylers: [{
                saturation: -100
            }]
        }]

    });

    // přidá hodnoty z "clubs" do mapy
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // vytvoří pole značek založené na daném poli "locations"
    // map() zde nemá nic společného s Google Maps API.
    var markers = clubs.map(function (location, i) {
        var marker = new google.maps.Marker({
            position: location,
            icon: 'KravMaga/media/KravMaga/Images/pin-map.png',
            club: clubs[i]
        });
        // na klik vyvolá popap
        google.maps.event.addListener(marker, 'click', function () {
            var infowindow = new google.maps.InfoWindow({
                // funkce pro render content
                content: 'Text' + marker.club.title
            });
            infowindow.open(map, marker);
        });
        return marker;
    });
    var mcOptions = {
        gridSize: 50,
        styles: clusterStyles,
        maxZoom: 15
    };
    // přidá markeru clusterer, který lze stylovat
    var mc = new MarkerClusterer(map, markers, mcOptions);

}

var clusterStyles = [
    {
        textColor: '#fd8000',
        textSize:15,
        url: 'KravMaga/media/KravMaga/Images/pin-map.png',
        height: 112,
        width: 114
    },
    {
        textColor: '#fd8000',
        textSize:15,
        url: 'KravMaga/media/KravMaga/Images/pin-map.png',
        height: 112,
        width: 114
    },
    {
        textColor: '#fd8000',
        textSize:15,
        url: 'KravMaga/media/KravMaga/Images/pin-map.png',
        height: 112,
        width: 114
    }
];