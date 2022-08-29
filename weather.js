api = 'https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=63bf258dcc16e0312dcd9aed078a953e&units=metric'

var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('WeatherCtrl', function ($scope, $http) {
    $scope.CurrentDate = new Date();
    $scope.searchWeather = function (){
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${$scope.search}&appid=63bf258dcc16e0312dcd9aed078a953e&units=metric`;
        $scope.getApi(api);
    }

    $scope.getApi = function (api){
        $http.get(api).success(function (data) {
            if (data) {
                $scope.namehn = data.name
                $scope.current = data.main.temp;
                $scope.temp_min = data.main.temp_min;
                $scope.temp_max = data.main.temp_max;
                $scope.wind_speed = data.wind.speed;
                $scope.clouds = data.clouds ? data.clouds.all : undefined;

                //Lay anh thoi tiet
                var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
                if ($scope.clouds < 20) {
                    $scope.img_url = baseUrl + 'sunny.png';
                } else if ($scope.clouds < 90) {
                    $scope.img_url = baseUrl + 'partly_cloudy.png';
                } else {
                    $scope.img_url = baseUrl + 'cloudy.png';
                }
            }
        })
            .error(function (data, status) {
                console.log(data);
            });
    }
    $scope.getApi(api)


});