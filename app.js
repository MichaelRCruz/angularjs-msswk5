import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './main'

// Create and bootstrap application
angular.module('libraryListApp', [
  'libraryList'
]);