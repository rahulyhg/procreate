// Link all the JS Docs here
var myApp = angular.module('myApplication', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    // 'ngAnimate',
    // 'ngSanitize',
    'angular-flexslider',
    'ui.swiper',
    'duScroll',
    'toastr'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        })

        .state('about', {
            url: "/about",
            templateUrl: tempateURL,
            controller: 'AboutCtrl'
        })
  .state('thankyou', {
            url: "/thankyou",
            templateUrl: tempateURL,
            controller: 'ThankYouCtrl'
        })
        // .state('offering', {
        //     url: "/offering",
        //     templateUrl: tempateURL,
        //     controller: 'OfferingCtrl'
        // })

        // .state('offeringid', {
        //     url: "/offering/:id",
        //      templateUrl: tempateURL,
        //     controller: 'OfferingCtrl'
        // })

        // .state('approach', {
        //     url: "/approach",
        //     templateUrl: tempateURL,
        //     controller: 'ApproachCtrl'
        // })


        .state('portfolio', {
            url: "/portfolio",
            templateUrl: tempateURL,
            controller: 'PortfolioCtrl'
        })

        .state('good', {
            url: "/good",
            templateUrl: tempateURL,
            controller: 'GoodCtrl'
        })

        .state('arch', {
            url: "/arch",
            templateUrl: tempateURL,
            controller: 'ArchCtrl'
        })
        .state('doycare', {
            url: "/doycare",
            templateUrl: tempateURL,
            controller: 'DoycareCtrl'
        })
        .state('contact', {
            url: "/contact",
            templateUrl: tempateURL,
            controller: 'ContactCtrl'
        })
        .state('vachan', {
            url: "/vachan",
            templateUrl: tempateURL,
            controller: 'VachanCtrl'
        })

        .state('sgsports', {
            url: "/sgsports",
            templateUrl: tempateURL,
            controller: 'SgsportsCtrl'
        })
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});



// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
myApp.directive('loadingText', function ($compile, $parse, $document, $timeout) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            $timeout(function () {
            var $element = $(element);
            dem = $element;
            dem.typed({
                strings: ["We are Procreate!"],
                typeSpeed: 30, // typing speed
                backDelay: 750, // pause before backspacing
            });
            }, 0)
        }
    }
});
myApp.directive('loadingText1', function ($compile, $parse, $document, $timeout) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            $timeout(function () {
            var $element = $(element);
            dem = $element;
            dem.typed({
                strings: ["Design for Growth +"],
                typeSpeed: 30, // typing speed
                backDelay: 750, // pause before backspacing
            });
            }, 1300)

        }
    }
});
myApp.directive('loadingText2', function ($compile, $parse, $document, $timeout) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            $timeout(function () {
            var $element = $(element);
            dem = $element;
            dem.typed({
                strings: ["Transformation"],
                typeSpeed: 30, // typing speed
                backDelay: 750, // pause before backspacing
            });
            }, 2500)
        }
    }
});
myApp.directive('loadingText3', function ($compile, $parse, $document, $timeout) {
    return {
        restrict: 'EA',
        replace: false,

        link: function ($scope, element, attrs) {
            $timeout(function () {
                var $element = $(element);
                dem = $element;
                dem.typed({
                    strings: ["with a Humanised approach."],
                    typeSpeed: 30, // typing speed
                    backDelay: 750, // pause before backspacing
                });
            }, 3500)
        }
    }
});
myApp.directive('fancyboxBox', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function (scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});

myApp.directive('fancyboxThumb', function ($document) {

    return {
        restrict: 'EA',
        replace: false,
        link: function (scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                nextEffect: 'none',
                prevEffect: 'none',
                padding: 0,
                helpers: {
                    title: {
                        type: 'over'
                    },
                    thumbs: {
                        width: 50,
                        height: 50
                    }
                }
            });
        }
    };
})