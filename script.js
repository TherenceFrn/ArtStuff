$(document).ready(function(){

var svgNumber = 1;

  for (var i = 0; i < svgNumber; i++) {

    var j = i+1;
    $('.AllSvg').append('<img src="'+j+'.svg">');
  }

});
