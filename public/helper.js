var diplom = angular
    .module('diplom', ['ngMaterial', 'ngMessages', 'ngRoute'])
    .controller('DemoCtrl', function($scope) {
        $scope.user = {
            title: 'Developer',
            email: 'ipsum@lorem.com',
            firstName: '',
            lastName: '',
            company: 'Google',
            address: '1600 Amphitheatre Pkwy',
            city: 'Mountain View',
            state: 'CA',
            biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
            postalCode: '94043'
        };
        $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function(state) {
            return {abbrev: state};
        })
    });


diplom.config(['$routeProvider', '$mdThemingProvider',
    function($routeProvider, $mdThemingProvider) {
        $routeProvider.
        when('/menu', {
            templateUrl: 'view1/menu.html',
            controller: 'MenuCtrl'
        }).
        when('/topo', {
            templateUrl: 'view1/topo.html',
            controller: 'TopoCtrl'
        }).
        when('/install', {
            templateUrl: 'view1/install.html',
            controller: 'TopoCtrl'
        }).
        when('/test', {
            templateUrl: 'view1/test.html',
            controller: 'TopoCtrl'
        }).
        otherwise({
            redirectTo: '/menu'
        });
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    }]);


// create the controller and inject Angular's $scope
diplom.controller('TopoCtrl', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});
// create the controller and inject Angular's $scope
diplom.controller('MenuCtrl', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

diplom.controller('TopoCtrl', function($scope, $filter) {
        var self = this;
        self.contacts = [{
            'id': 1,
            'fullName': '2 коммутатора, 6 серверов',
            'lastName': 'Guadalupe',
            'title': "Стенд 1"
        }, {
            'id': 2,
            'fullName': '4 коммутатора, 16 серверов',
            'lastName': 'Marquéz',
            'title': "Стенд 2"
        }, {
            'id': 3,
            'fullName': '1 коммутатор, 5 серверов',
            'lastName': 'Cervantes',
            'title': "Стенд 3"
        }];
        self.tests = [{'name': 'Функциональное', 'test_names': ['Tempest', 'Дополнительные']}, 
            {'name': 'Нагрузочное', 'test_names': ["Коммутаторов", "Управляющих узлов", "Вычислительных узлов"]}];
        self.selectedId = 2;
        self.selectedUser = function() {
            return $filter('filter')(self.contacts, { id: self.selectedId })[0].title;
        }
    });