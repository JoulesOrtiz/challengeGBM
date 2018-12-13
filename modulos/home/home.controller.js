(function () {
    "use strict";

    angular.module('home.module')

        .controller('homeController',
            ['$scope',
                function ($scope) {


                    var resultObj = [{
                        "Date": "2018-08-10",
                        "Price": 49.4,
                        "Percentage": -1.303088,
                        "Volume": 130848380
                    },
                    {
                        "Date": "2018-08-11",
                        "Price": 48.8,
                        "Percentage": -1.303088,
                        "Volume": 130848380
                    },
                    {
                        "Date": "2018-08-12",
                        "Price": 49.0,
                        "Percentage": -1.303088,
                        "Volume": 130848380
                    },
                    {
                        "Date": "2018-08-13",
                        "Price": 52.6,
                        "Percentage": -1.303088,
                        "Volume": 130848380
                    }
                    ];
                    var xdata = [];
                    var ydata = [{
                        "name": "IPC",
                        "data": []
                    }];
                    // var data = {"xData": ["2018-08-10","2018-08-15"],"yData":[{
                    //     "name": "otro",
                    //     "data": [7.0, 6.9]
                    // }]}
                    angular.forEach(resultObj, function (element) {
                        xdata.push(element.Date);
                        ydata[0].data.push(element.Price);
                    });

                    var data = { "xData": xdata, "yData": ydata };




                    $scope.lineChartYData = data.yData
                    $scope.lineChartXData = data.xData

                }]);

})();