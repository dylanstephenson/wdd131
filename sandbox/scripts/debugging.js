function circleArea(radius) {
    const pi = 3.14;
    let area = radius * radius * pi;
    return area;
  }

let area = circleArea(3);
console.log('Area1: ', area);

area = circleArea(4);
console.log('Area2: ', area);