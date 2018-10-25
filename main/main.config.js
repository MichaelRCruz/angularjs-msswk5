function MainConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('main', {
    url: '',
    controller: 'LibraryController',
    controllerAs: '$ctrl',
    templateUrl: 'main/library.html'
  });

};

export default MainConfig;