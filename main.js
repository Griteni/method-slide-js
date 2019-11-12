
//document.getElementsByClassName(bg).style.color = 'red';
//const items = document.querySelector('li');
//select[0].style.color = "red";


// first way

const items = document.getElementsByTagName('li');
console.log(items);
/* 
for(var i=0; i<=items.length; i+=2){
     items[i].style.color ='red';
} */

// second way

/* for (let i = 0; i<items.length; i++){
    if(i % 2 !== 0)
    items[i].style.backgroundColor = 'purple';
} */


//third way 

const oddItems = document.querySelectorAll('li:nth-of-type(2n+1)');
for(var i=0; i<=oddItems.length; i+=2){
    oddItems[i].style.color ='red';
}


//Map method - it is gave back a new array
let arr = ['Gonzalo', 'Bad Ahmed', 'Hanna', 'Ali'];

let newArr= arr.map(function(name){ //name is just a paramenter; the function need a paramenter
    name = name + ' hi';
    return name;
})

console.log(newArr);

//

document.body.innerHTML = '<main><head id="page-header"><h1>hi</h1></head><figure><img src="http://via.placeholder.com/300" alt=""></figure></main>';
document.body.innerHTML += '<footer><p><small>copyright</small></p></footer>';
document.getElementById('page-header').style.fontFamily = 'sans-serif';