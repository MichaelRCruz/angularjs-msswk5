export default function filterNames() {
  return function(catObject, selectedCategory) {
    if (!selectedCategory) {
      let applets = [];
      let obj = {};
      let appletSet = [];
      // creates list of all applet names
      Object.keys(catObject).forEach(category => {
        applets = [...applets, ...catObject[category]];
      });
      // removes duplicate applet names
      for (let i = 0; i < applets.length; i++) {
        if (!obj[applets[i]]) {
          obj[applets[i]] = 1;
          appletSet.push(applets[i]);
        }
      }
      return appletSet;
    } else {
      return catObject[selectedCategory];
    }
  };
}