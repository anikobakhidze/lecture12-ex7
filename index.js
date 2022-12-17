let array = [1, 2, 5, 9, -4, -1, 4, -10];
for (let i = 0; i < array.length; i++) {
  switch (array[i]) {
    case 1:
      console.log(array[i] / 3);
      break;
    case -10:
      console.log(array[i] / 2);
      break;
    default:
      console.log(array[i] / 5);
  }
}
