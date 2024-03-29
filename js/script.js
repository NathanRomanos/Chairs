console.log('working');

var chairs = [
  {
    name : 'Ekedalen Chair',
    legs : 4,
    people : 1,
    material : 'wood and fabric',
    size : 'Small',
    reclinable : false,
    photo : 'images/ekedalen.jpg'
  },
  {
    name : 'Small Patio Chair',
    legs : 4,
    people : 1,
    material : 'fabric, wood, and woven wood',
    size : 'Small',
    reclinable : false,
    photo : 'images/patio.jpg'
  },
  {
    name : 'Accent Chair',
    legs : 4,
    people : 1.5,
    material : 'fabric, leather, and wood',
    size : 'Medium',
    reclinable : false,
    photo : 'images/accent.jpg'
  },
  {
    name : 'Sun Lounger',
    legs : 4,
    people : 1,
    material : 'fabric, metal, and plastic',
    size : 'Medium',
    reclinable : true,
    photo : 'images/sunLounger.jpg'
  },
  {
    name : 'Lazy Boy',
    legs : 4,
    people : 1.5,
    material : 'fabric, leather, and wood',
    size : 'Large',
    reclinable : true,
    photo : 'images/lazyBoy.jpg'
  },
  {
    name : 'Stool',
    legs : 4,
    people : 1,
    material : 'wood',
    size : 'Small',
    reclinable : false,
    photo : 'images/stool.jpg'
  },
  {
    name : 'Office Chair',
    legs : 5,
    people : 1,
    material : 'plastic, metal, and fabric',
    size : 'Small',
    reclinable : true,
    photo : 'images/office.jpg'
  },
  {
    name : 'Throne',
    legs : 4,
    people : 1,
    material : 'metal, fabric, and wood',
    size : 'Medium',
    reclinable : false,
    photo : 'images/throne.jpg'
  },
  {
    name : 'Bar Stool One',
    legs : 1,
    people : 1,
    material : 'metal and fabric',
    size : 'Small',
    reclinable : false,
    photo : 'images/barStool.jpg'
  },
  {
    name : 'Bar Stool Two',
    legs : 4,
    people : 1,
    material : 'wood, fabric, and metal',
    size : 'small',
    reclinable : false,
    photo : 'images/barStool2.jpg'
  },
  {
    name : 'Deck Chair',
    legs : 4,
    people : 1,
    material : 'wood and fabric',
    size : 'Medium',
    reclinable : true,
    photo : 'images/deckChair.jpg'
  },
  {
    name : 'Plastic Outdoor Chair',
    legs : 4,
    people : 1,
    material : 'plastic',
    size : 'small',
    reclinable : false,
    photo : 'images/plastic.jpg'
  },
  {
    name : 'Rocking Chair',
    legs : 4,
    people : 1,
    material : 'wood and leather',
    size : 'Medium',
    reclinable : false,
    photo : 'images/rocking.jpg'
  },
  {
    name : 'Inflatable Pool Chair',
    legs : 0,
    people : 1.5,
    material : 'plastic',
    size : 'large',
    reclinable : true,
    photo : 'images/inflatable.jpg'
  },
  {
    name : 'Circle Chair',
    legs : 4,
    people : 1.5,
    material : 'wood, fabric, rope',
    size : 'Medium',
    reclinable : false,
    photo : 'images/circle.jpg'
  },
]




for (var i=0; i<15; i++){
  if(chairs[i].reclinable === true){
    document.getElementById('cardContainer').innerHTML +=
      '<div class="col">' +
      '<div class="card" style="width: 18rem;">' +
      '<img src="' + chairs[i].photo + '" class="card-img-top" alt="Card image cap">' +
      '<div class="card-body">' +
      '<h2 class="card-text">' + chairs[i].name + '</h2>' +
      '<p class="card-text">' +
      'Made from: ' + chairs[i].material + '<br>' +
      'Size: ' + chairs[i].size  + '<br>' +
      'Seats: ' + chairs[i].people + ' person(s)'  + '<br>' +
      'Amount of legs: ' + chairs[i].legs + '<br>' +
      'This chair is reclinable' +
      '</p>' +
      '</div>' +
      '</div>' +
      '</div>'
  } else {
    document.getElementById('cardContainer').innerHTML +=
      '<div class="col">' +
      '<div class="card" style="width: 18rem;">' +
      '<img src="' + chairs[i].photo + '" class="card-img-top" alt="Card image cap">' +
      '<div class="card-body">' +
      '<p class="card-text">' +
      '<h2>' + chairs[i].name + '</h2>' +
      'Made from: ' + chairs[i].material + '<br>' +
      'Size: ' + chairs[i].size  + '<br>' +
      'Seats: ' + chairs[i].people + ' person(s)'  + '<br>' +
      'Amount of legs: ' + chairs[i].legs + '<br>' +
      '</p>' +
      '</div>' +
      '</div>' +
      '</div>'
  };

}
