angular.module("blog")
    .controller("NavCtrl", [
        "Auth",
        "$scope",
        function(Auth, $scope) {
            var vm = this;

            Auth.currentUser().then(function(user){
                vm.user = user;
            });

            vm.signedIn = Auth.isAuthenticated;
            vm.logout = Auth.logout;

            $scope.$on("devise:new-registration", function(e, user){
                vm.user = user;
            });

            $scope.$on("devise:login", function(e, user){
                vm.user = user;
            });

            $scope.$on("devise:logout", function(e, user){
                vm.user = {};
            });
    }]);