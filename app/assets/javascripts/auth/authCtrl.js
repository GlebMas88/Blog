angular.module('blog')
    .controller('AuthCtrl', [
        '$state',
        'Auth',
        function($state, Auth){

            var vm = this;

            vm.login = function() {
                Auth.login(vm.user).then(function(){
                    $state.go('home');
                });
            };

            vm.register = function() {
                Auth.register(vm.user).then(function(){
                    $state.go('home');
                });
            };
    }]);