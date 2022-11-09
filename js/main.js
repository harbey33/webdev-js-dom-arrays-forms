(function(){
    document.getElementById("myHeading").innerHTML = "Harvey";
    let currentNav = document.querySelector("nav ul li")
    currentNav.setAttribute("class", "currentPage")
    // document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk")
    let eventBtn = document.getElementById("myTestEvent")
    eventBtn.addEventListener("click", myEvent)
    function myEvent(){
        //event handler
        console.info("I was clicked")
    }
    
    //bg colour selector

    let colourBtns = document.querySelectorAll(".colPicker")
    for (let i=0; i<colourBtns.length; i++){
        colourBtns[i].addEventListener("click", chgColour)
    }

    function chgColour(ev){
        console.info(ev.target.classList[0])
        let newBgColour = ev.target.classList[0] + "Back"
        document.querySelector("body").setAttribute("class", newBgColour)
    }
})()
