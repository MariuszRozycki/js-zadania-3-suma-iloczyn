function addAndMultiply() {

  let sumAdd = 0;
  let sumMultiply = 1;

  // Petla for:

  // for ( let i = 0; i < array.length; i++) {
  // sumAdd += array[i];
  // sumMultiply *= array[i];  
  // }
  
  // console.log('Suma wszystkich elementow tablicy wynosi: ' + sumAdd);
  // console.log('Iloczyn wszystkich elementow tablicy wynosi: ' + sumMultiply);
  // ----------------------------------------------

  // Petla for...of:
  // for (let number of array) {
  //   sumAdd += number;
  //   sumMultiply *= number;
  // }
  // console.log('Suma wszystkich elementow tablicy wynosi: ' + sumAdd);
  // console.log('Iloczyn wszystkich elementow tablicy wynosi: ' + sumMultiply);
  // ----------------------------------------------

  // Petla forEach:
  array.forEach(function(element){
    sumAdd += element;
    sumMultiply *= element;
  });
  console.log('Suma elementow tablicy wynosi: ' + sumAdd);
  console.log('Iloczyn wszystkich elementow tablicy wynosi: ' + sumMultiply);
  // ----------------------------------------------
}

addAndMultiply(array = [1, 2, 3, 4, 5, 6]);