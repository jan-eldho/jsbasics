
//nested function
//---------------

function outerFun() {

    console.log("inside outer function");
     function innerFun() {

        console.log("inside Inner function"); 
     }

    innerFun()
}

outerFun()