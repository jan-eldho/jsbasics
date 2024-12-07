//closure property
//inner function can access all variables in outer fun as well as globally declred varbles


let x=10;
function outerFn() {
    let y=20;
    function innerFn() {
        let m=30;
        console.log(x,y,m);
        
    }
    innerFn()
}
outerFn()