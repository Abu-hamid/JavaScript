
// Immediately Invoked Function Expressions (IIFE)
//  Also it helps to prevents the global variable polution


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');


( ()=>{
    console.log("Hey how are you")
} )()