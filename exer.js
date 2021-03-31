
// exo 1
function invers(a,b){
let aux = a;
a = b;
 b = aux ;
 return  a + " " + b 
}
console.log(invers(6, 9));

// exo 2
function affi (){
    let Nom = "toto"
    let age = 30 
    let homme = true
    return 'your name is  ' +Nom+' your age is '+age+ ' ans ' + homme 
}
console.log(affi());

// exo3
function puiss(a) {
    let p = a * a ;
    return p
}
console.log(puiss(9))

// exo3
function som (a, b){
    let so = a+b
    return so
}
console.log(som(9, 100))

// ex4 
function time(M){
    let s = M * 60;
    return s
}
console.log(time(5))

// ex5
function incre (i) {
    let si = i + 1;
    return si 
}
console.log(incre(8))

// ex6
function surf(b, h) {
    s = (b * h)/2
    return s
}
console.log(surf(7,3))

// ex7
function revers(ch, tab) {
    
    return  ch
}
console.log(revers('Hello'))

// ex8 
function maxi(a, b, c){
    
    return max
}
console.log(Math.max(10, 99, 1))

// ex9
function getfirst(tab) {

 return  tab [0]

}
console.log(getfirst([12, 0, 2, 33]))

// ex10


// ex11
function modulo(x, y){
    w = x % y
    return w
}
console.log(modulo (1, 3))

// ex12
function som(a, b){
    let so = a + b 
    
    if (so >100)
    return true
    else 
    return false
}
console.log(som(9, 100))

// exo 13 
function conv(h) {
    s = h * 3600
    return s
}
console.log(conv(5))

// exo 14
function verif(n) {
    if (n<0)
    return false
    else 
    return true
}
console.log(verif(-5))

// exo 15
function equiv (a, b) {
    if (a>b)
    return true
    else
    return false
}
console.log(equiv(12, 98))

// exo 16
function divis(a) {
    if ((a % 5)==0)    
    return true
    else
    return false
}
console.log(divis(5))

// exo 17
function convert(h, m) {
    s = (h * 3600) + (m * 60)
    return s
}
console.log(convert(0, 59))

// exo 18
function reverstab (tab) {
    var tabx = ["", "", "", ""]
    tabx[0] = tab [4]
    tabx[1] = tab [3]
    tabx[2] = tab [2]
    tabx[3] = tab [1]
    tabx[4] = tab [0]
    return tabx
}
console.log(reverstab([0,1,2,3,4]))

// exo 19
function lastele(tab) {
    var tab11 = [1,2,3]
    return tab11.length
}
console.log(lastele[1,2,3,4])

// exo 20
var tab9 = [10, 5,100,99];
var last = tab9[tab9.length - 1]
console.log(tab9.length);
console.log(last)

// exo 21
 function egeau (a, b) {
     var w = Boolean
    if (a = b)
        w = true
    else
        w= false
    return w
  
 }
 console.log(egeau(5, 9))


 




