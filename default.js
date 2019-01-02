let box2Children = document.querySelector('.boxA').children;
let box2Count = document.querySelector('.boxA').childElementCount;
console.log(box2Children.length);

function widthSelector(box2Count) {
    let width = 100 / box2Count;
    console.log(width + '%');
    return width + '%';
}

for (let i = 0; i < box2Count; i++) {
   box2Children[i].style.width = widthSelector(box2Count);
   box2Children[i].style.float = 'left';
}

