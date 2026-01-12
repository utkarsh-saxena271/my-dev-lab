// global-window
console.log(this);
// function-window
function abcd(){
    console.log(this);
}
abcd();
// method-object
var obj = {
    name: function(){
        console.log(this);
    }
}
obj.name();
// func inside method(es5)-window
var obj2 = {
    lname : function(){
        console.log(this);
        function childfunc(){
            console.log(this);
        }
        childfunc();
    }
}
obj2.lname();
// func inside method(es6)-object
var obj3 = {
    dname : function(){
        const child = ()=>{
            console.log(this)
        }
    }
}
// constructor funnction mein this ki value-new blank objct
// event listener mein this ki value-that event jispar event listener laga hai.
