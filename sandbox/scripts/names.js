let names = ['Nancy','Blessing','Jorge','Svetlana', 'Bob'];
let namesB = names.filter((word) => word.charAt(0) ==='B');

let namesLength = names.map((name) => name.length);

names.reduce((total, name) => total + name.length, 0) / names.length; 