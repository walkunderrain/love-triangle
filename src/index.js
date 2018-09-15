/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var triangles = [];
  preferences.unshift(null);
  for (var a = 1; a <= preferences.length; a++){
    var b = preferences[a];
    var c = preferences[b];
    if (preferences[c] === a && a !== b && b !== c && a !== c){
      var triangle = [a, b, c];
      var sortedTriangle = triangle.sort().toString();
      if (!triangles.includes(sortedTriangle)){
        triangles.push(sortedTriangle);
      }

    }
  }
  return triangles.length;
};
