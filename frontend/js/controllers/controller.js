var initMap = function () {};
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $rootScope, $location, $state) {
        $scope.template = TemplateService.getHTML("content/home.html");
        // TemplateService.title = "Leading Brand Design Company"; //This is the Title of the Website
      TemplateService.title = "Strategic Brand Design Agency India | Best Branding Company in India -Procreate Design";
        TemplateService.cssMain = "Home"; //This is the Title of the Website    
         TemplateService.description = "Procreate Design is a strategic brand design agency providing effective brand design solutions to the clients in India. Visit our website for more information!";
          TemplateService.keywords = "product packaging design companies india, best branding agencies in india, best branding companies in india, brand design agencyindia, branding companies in india, packaging design agencies"; 
          TemplateService.canonical = "Home";   
        $scope.navigation = NavigationService.getNavigation();
        $scope.refresh = function () {
            $state.reload();
        };
        // setTimeout(function(){ 
        //     new WOW().init(); 
        // }, 3000);
        $scope.inspireImg = [{
                img: 'img/homepage/home3.jpg'
               
            },
               {
                img: 'img/homepage/slide-top3.jpg'
            },
              {
                img: 'img/homepage/top-slide3.jpg'
            },
         
             {
                img: 'img/homepage/slide2.jpg'
            },
            {
                img: 'img/homepage/top-slide5.jpg'
            },
          
            {
                img: 'img/homepage/top-slide6.jpg',

            },
            {
                img: 'img/homepage/top-slide7.jpg',

            }
        ]

        $scope.homeImg = [{
                img: 'img/homepage/32.png'
            },
            {
                img: 'img/homepage/42.png'
            },
            {
                img: 'img/homepage/61.png'
            },
            {
                img: 'img/homepage/82.png'
            },
            {
                img: 'img/homepage/10.png'
            },
            {
                img: 'img/homepage/122.png'

            },
            {
                img: 'img/homepage/43.png'

            },
            {
                img: 'img/homepage/52.png'

            },
            {
                img: 'img/homepage/73.png'

            },
            {
                img: 'img/homepage/92.png'

            },
            {
                img: 'img/homepage/111.png'

            },
            {
                img: 'img/homepage/31.png'

            },
            {
                img: 'img/homepage/nanil2.png'

            },
            {
                img: 'img/homepage/sg2.png'

            },

            // {
            //     img: 'img/homepage/yours.png'

            // },

            {
                img: 'img/homepage/vvf.png'

            },
            {
                img: 'img/homepage/vlcc.png'

            },
            {
                img: 'img/homepage/seths.png'

            },
            {
                img: 'img/homepage/sarda.png'

            },
            {
                img: 'img/homepage/lotus2.png'

            },

            // {
            //     img: 'img/homepage/priyagold.png'

            // },

            {
                img: 'img/homepage/livrite.png'

            },

            // {
            //     img: 'img/homepage/sanank2.png'

            // },

            // {
            //     img: 'img/homepage/vachan2.png'

            // },
        ]



        $scope.homeImg = _.chunk($scope.homeImg, 12);
        for (var i = 0; i < $scope.homeImg.length; i++) {
            $scope.homeImg[i] = _.chunk($scope.homeImg[i], 6);
            console.log($scope.homeImg);
        }
        console.log("this is client");
        console.log($scope.homeImg);



        $scope.homeText = [{
                title1: 'PARLE, SR. PRODUCT MANAGER ',
                title2: '“We take pleasure to testify the fact that Procreate has lived up to our expectation and given us a clutter-breaking and outstanding packaging solution across our range of products. I would like to make a specific mention of fantastic packaging for our newly re-launched range of Snacks – Parle’s Wafers & FullToss. Ever since the re-launch, we have received tremendous response for both the brands.”  '
            },
            {
                title1: 'SG CRICKET, DIRECTOR',
                title2: ' “Procreate has shown incredible creativity in the task which was given to them. We had ideas for a new vision for our company, which we handed over to them. The final product they came up with outperformed our thoughts and ideas. Their hard work and creative thought process is brilliant. We wish them good luck in all their future endeavors.”',

            },
            {
                title1: 'NEROLAC, SR. MANAGER',
                title2: '" Working with the procreate team has been a pleasure. I worked with them on what will soon be the most premium product range of Kansai Nerolac - Wonderwood Gloria -  and the results were outstanding - extremely well received by the top management and the trade."',

            },

        ]


        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };

        initMap = function () {
            var uluru = {
                lat: 19.166411,
                lng: 72.847466
            };
            // Styles a map in night mode.
            var map = new google.maps.Map(document.getElementById('map'), {
                center: uluru,
                scrollwheel: false,
                zoom: 15,
            });

            var marker = new google.maps.Marker({
                position: uluru,
                title: "Procreate",
                // icon: "http://gsourcedata.com/img/landing-logo.png/",
                map: map

            });
        }
        $timeout(function () {
            initMap();
        }, 500);

        $scope.getTab = function (view) {
            var id = "";
            console.log(view);
            switch (view) {
                case 0:
                    id = "/offering/strategy";
                    break;
                case 1:
                    id = "/offering/design";
                    break;
                case 2:
                    id = "/offering/service";
                    break;
                case 3:
                    id = "/offering/branding";
                    break;
                case 4:
                    id = "/offering/management";
                    break;
                default:
                    break;
            }
            console.log(id);
            console.log(id);
            $location.path(id);
        };
    })

    .controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
        $scope.template = TemplateService.getHTML("content/about.html");
        // TemplateService.title = "Strategic Brand Design Firm"; //This is the Title of the Website
          TemplateService.title = "About Procreate Design - Top Branding Agencies in India";
        // TemplateService.header = "views/template/header1.html"; //This is the Title of the Website
      
        TemplateService.cssMain = "About";
         TemplateService.description = "Procreate Design is one of the top strategic brand design firm that creates brand designs that resonate with Humans, not just consumersor shoppers.";
         TemplateService.keywords = "procreate design, top branding agencies in india, top branding companies in india, top packaging design agency india";
          TemplateService.canonical = "About";   
        $scope.navigation = NavigationService.getNavigation();
        $scope.getTab = function (view) {
            var id = "";
            console.log(view);
            switch (view) {
                case 0:
                    id = "/offering/strategy";
                    break;
                case 1:
                    id = "/offering/design";
                    break;
                case 2:
                    id = "/offering/service";
                    break;
                case 3:
                    id = "/offering/branding";
                    break;
                case 4:
                    id = "/offering/management";
                    break;
                default:
                    break;
            }
            console.log(id);
            console.log(id);
            $location.path(id);
        };
    })

    .controller('footerCtrl', function ($scope, TemplateService, apiService, NavigationService, $http, $timeout) {
        //    reCAPTCHA
        // vcRecaptchaService
        $scope.form = {};
        $scope.sendMail = function (data) {
            $scope.message = "";

            console.log("******** inside sendMail *********", data);
            if (data && data.email != null) {
                $scope.url = "Enquirey/mailSends";
                NavigationService.apiCallWithData($scope.url, data, function (data) {
                    if (data) {
                        $scope.message = "Thank you for submitting the form";
                        $scope.form = {};
                        
                    }
                });

            } else {
                console.log("******** inside sendMails *********", data);
                console.log("******** inside sendMail *********", data);
                $scope.message = "Please enter valid email id"
            }
        }

        $scope.gotoTop = function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        };
    })



    //Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });