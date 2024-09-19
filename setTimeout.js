//Question: Whats the output?
function a () {
    for (var i = 0; i<3;i++){
        setTimeout (function log() {
            console.log(i)
        }, i*1000)
    }
}
a()
//output is 
//3
//3
//3 after 1 second of interval, this is due to var, var is function scoped but If var is declared outside of any function, it becomes globally scoped
//setTimeout runs only after compelete code has run successfully