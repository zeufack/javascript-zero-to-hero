let element = document.createElement('p');
element.textContent = 'je suis le king';
document.body.appendChild(element);

console.log([1,3,4,7].reduce( function(a, b) {
    return a + b;
}));

var arr = [1, 2, 1, 5, 9, 5];
arr.reduce((prev, number) => {
if(prev.indexOf(number) === -1) {
prev.push(number);
}
console.log(prev)
return prev;
}, []);


