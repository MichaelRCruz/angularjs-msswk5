import angular from 'angular';

// Create the module where our functionality can attach to
let libraryModule = angular.module('libraryList', []);

import FilterCategories from './library.filterCategories.js';
import FilterNames from './library.filterNames.js';
libraryModule.filter('filterCategories', FilterCategories);
libraryModule.filter('filterNames', FilterNames);

// Controllers
import LibraryController from './library.controller';
libraryModule.controller('LibraryController', LibraryController);

libraryModule.component('libraryList', {
  templateUrl: 'main/library.html',
  controller: 'LibraryController',
});

export default libraryModule;