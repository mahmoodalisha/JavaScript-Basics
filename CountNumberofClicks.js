function numberOfclicks () {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {  //clickMe id name given in html file
        console.log("Button is clicked", ++count)
    })
}
numberOfclicks();