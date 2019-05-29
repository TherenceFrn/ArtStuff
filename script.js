// $(document).ready(function(){
//
// var svgNumber = 1;
//
//   for (var i = 0; i < svgNumber; i++) {
//
//     var j = i+1;
//     $('.AllSvg').append('<img src="'+j+'.svg">');
//   }
//
// });

var contenu = [
  ['Illustrator', 4],
  ['Photoshop', 1],
  ['Lightroom', 1],
  ['Animate', 1],
]

// console.log(contenu.length);
for (var i = 0; i < contenu.length; i++) {

  // console.log(contenu[i][0]);

  var logiciel = contenu[i][0];
  var contenuLogiciel = contenu[i][1];
  var contenuPage = '<div class="container"><div class="row">';
  var compteCol = 0;
  var extension = '';
  // console.log(logiciel+' : '+contenuLogiciel);

  for (var j = 0; j < contenuLogiciel; j++) {

    if(compteCol == 3){
      contenuPage = contenuPage +  '</div><br><div class="row">';
      compteCol = 0;
    }

    switch (logiciel) {
      case 'Illustrator':
        var extension = 'svg';
      break;
      case 'Photoshop':
        var extension = 'png';
      break;
      case 'Lightroom':
        var extension = 'jpg';
      break;
      case 'Animate':
        var extension = 'gif';
      break;
    }

    var y = j+1;

    console.log(y+'.'+extension);

    contenuPage = contenuPage + '<div class="col-sm-4"><div class="card" style="width:100%"><img class="image-page" src="'+y+'.'+extension+'"><div class="card-body"><h4 class="card-title">'+logiciel+'</h4><p class="card-text">Réalisé avec '+logiciel+'</p><a target="blank" href="https://therencefrn.github.io/ArtStuff/'+y+'.'+extension+'" class="text-primary">https://therencefrn.github.io/ArtStuff/'+y+'.'+extension+'</a></div></div></div>';
    compteCol++;
  }

  var divCible = "#"+logiciel;
  contenuPage = contenuPage + '</div></div>';
  $(divCible).after(contenuPage);

}



$(document).ready(function () {

    $('.image-page').on('click', function(){

        var varImage = $(this).attr('src');
        console.log(varImage);

        $('.modale-image img').attr('src', varImage);
        $('.modale-image').fadeIn();

        $('.modale-image').on('click', function(){
            $(this).fadeOut();
        })
    });
})
