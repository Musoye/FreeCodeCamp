// A closure function in javaScript
function closure(){
    let a = 2;
    this.getH = function(){
        return a;
    }
}
let p = new closure();
console.log(p.getH());