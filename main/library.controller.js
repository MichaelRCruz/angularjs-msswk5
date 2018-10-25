///////////////////////////////////////////////////////////////////////////////////////
//// An attempt here was made to parse JSON from a local directory via             ////
////   $http.get('libraries/applets.json').then(response => {...});                ////
//// However, this does not appear possible according to the issue linked below.   ////
//// https://github.com/stackblitz/core/issues/331                                 ////
//// An alternative http simulation has been implemented.                          ////
///////////////////////////////////////////////////////////////////////////////////////


// data structure provided with coding challenge
const parsedJSON = {
  categories: [
    'Performance', 'Investments', 'Operations'
  ],
  applets: [
    {
      name: 'Performance Snapshot',
      categories: ['Performance']
    },
    {
      name: 'Commitment Widget',
      categories: ['Investments']
    },
    {
      name: 'CMS',
      categories: ['Investments', 'Performance' ]
    }
  ]
};

class LibraryController {
  constructor($scope, $http) {

    this.selectedCategory = '';
    this.defineCategory = (category) => {
      this.selectedCategory = this.selectedCategory == category ? null : category;
    }

    // restructures simulated parsedJSON
    this.categoryObject = {};
    let library = {};
    // sorts category list;
    parsedJSON.categories.sort().forEach(category => {
      library[category] = [];
    });
    parsedJSON.applets.forEach(applet => {
      applet.categories.forEach(category => {
        library[category].push(applet.name);
      });
    });
    this.categoryObject = library;
  }
}

export default LibraryController;