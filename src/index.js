
exports.min = function min (array) {
  return ( array && array.length > 0) ? Math.min.apply(null, array) : 0 ;
    }
 
   


exports.max = function max (array) {
  return (array && array.length > 0) ?Math.max.apply(null, array) : 0 ;
    
    }

exports.avg = function avg (array) {
  return (array && array.length > 0) ? array.reduce((a, b) => a + b) / array.length : 0;
}

