//I pledge my honor that I have abided by the Stevens Honor System.
//Ethan Grzeda


window.onload = function() {
    configureElements();
};

function configureElements(){
    //get values of inputs
    //campus map picture
    var mappicPicture = document.getElementById("mappic").src;
    var mappicWidth = mappicPicture.width;
    var mapDiv = document.createElement("div");
    mapDiv.style.width = mappicWidth;
    mapDiv.style.height =  "20px";
    mapDiv.style.backgroundColor = "gray";
    mapDiv.style.opacity = 0;
    mapDiv.style.color = "white";
    mapDiv.textContent = "Basically, this is generally what campus is going to look like.";
    mapDiv.style.textAlign = "center";
    mapDiv.addEventListener("mouseover", function (e){
        mapDiv.style.transition = "opacity 0.5s";
        mapDiv.style.opacity = 1;
    });
    mapDiv.addEventListener("mouseout", function (e){
        mapDiv.style.transition = "opacity 0.5s";
        mapDiv.style.opacity = 0;
    });
    
    document.getElementById("mapthing").appendChild(mapDiv);
    
    
    //Babbio Center picture
    var babbiopicPicture = document.getElementById("babbiothing");
    var babbiopicWidth = babbiopicPicture.width;
    var babbioDiv = document.createElement("div");
    babbioDiv.style.marginTop = "50px";
    babbioDiv.style.width = babbiopicWidth;
    babbioDiv.style.height =  "20px";
    babbioDiv.style.backgroundColor = "gray";
    babbioDiv.style.opacity = 0;
    babbioDiv.style.color = "white";
    babbioDiv.textContent = "Basically, this building is a great place to have classes in.";
    babbioDiv.style.textAlign = "center";
    babbioDiv.addEventListener("mouseover", function (e){
        babbioDiv.style.transition = "opacity 0.5s";
        babbioDiv.style.opacity = 1;
    });
    babbioDiv.addEventListener("mouseout", function (e){
        babbioDiv.style.transition = "opacity 0.5s";
        babbioDiv.style.opacity = 0;
    });
    
    document.getElementById("babbiothing").appendChild(babbioDiv);
    
    //McLean Hall picture
    var mcleanpicPicture = document.getElementById("mcleanthing");
    var mcleanpicWidth = mcleanpicPicture.width;
    var mcleanDiv = document.createElement("div");
    mcleanDiv.style.marginTop = "50px";
    mcleanDiv.style.width = mcleanpicWidth;
    mcleanDiv.style.height =  "20px";
    mcleanDiv.style.backgroundColor = "gray";
    mcleanDiv.style.opacity = 0;
    mcleanDiv.style.color = "white";
    mcleanDiv.textContent = "Basically, this building is a bunch of science and math stuff.";
    mcleanDiv.style.textAlign = "center";
    mcleanDiv.addEventListener("mouseover", function (e){
        mcleanDiv.style.transition = "opacity 0.5s";
        mcleanDiv.style.opacity = 1;
    });
    mcleanDiv.addEventListener("mouseout", function (e){
        mcleanDiv.style.transition = "opacity 0.5s";
        mcleanDiv.style.opacity = 0;
    });
    
    document.getElementById("mcleanthing").appendChild(mcleanDiv);
    
    
    //Carnegie Laboratory picture
    var carnegiepicPicture = document.getElementById("carnegiething");
    var carnegiepicWidth = carnegiepicPicture.width;
    var carnegieDiv = document.createElement("div");
    carnegieDiv.style.marginTop = "50px";
    carnegieDiv.style.width = carnegiepicWidth;
    carnegieDiv.style.height =  "20px";
    carnegieDiv.style.backgroundColor = "gray";
    carnegieDiv.style.opacity = 0;
    carnegieDiv.style.color = "white";
    carnegieDiv.textContent = "Basically, this building is a lot of science stuff.";
    carnegieDiv.style.textAlign = "center";
    carnegieDiv.addEventListener("mouseover", function (e){
        carnegieDiv.style.transition = "opacity 0.5s";
        carnegieDiv.style.opacity = 1;
    });
    carnegieDiv.addEventListener("mouseout", function (e){
        carnegieDiv.style.transition = "opacity 0.5s";
        carnegieDiv.style.opacity = 0;
    });
    
    document.getElementById("carnegiething").appendChild(carnegieDiv);
    
    //Morton-Peirce-Kidde Complex picture
    var mpkpicPicture = document.getElementById("mpkthing");
    var mpkpicWidth = mpkpicPicture.width;
    var mpkDiv = document.createElement("div");
    mpkDiv.style.marginTop = "50px";
    mpkDiv.style.width = mpkpicWidth;
    mpkDiv.style.height =  "20px";
    mpkDiv.style.backgroundColor = "gray";
    mpkDiv.style.opacity = 0;
    mpkDiv.style.color = "white";
    mpkDiv.textContent = "Basically, this complex is full of tons of different things.";
    mpkDiv.style.textAlign = "center";
    mpkDiv.addEventListener("mouseover", function (e){
        mpkDiv.style.transition = "opacity 0.5s";
        mpkDiv.style.opacity = 1;
    });
    mpkDiv.addEventListener("mouseout", function (e){
        mpkDiv.style.transition = "opacity 0.5s";
        mpkDiv.style.opacity = 0;
    });
    
    document.getElementById("mpkthing").appendChild(mpkDiv);
    
    //Burchard Building picture
    var burchardpicPicture = document.getElementById("burchardthing");
    var burchardpicWidth = burchardpicPicture.width;
    var burchardDiv = document.createElement("div");
    burchardDiv.style.marginTop = "50px";
    burchardDiv.style.width = burchardpicWidth;
    burchardDiv.style.height =  "20px";
    burchardDiv.style.backgroundColor = "gray";
    burchardDiv.style.opacity = 0;
    burchardDiv.style.color = "white";
    burchardDiv.textContent = "Basically, this building has classes but also a new lecture room.";
    burchardDiv.style.textAlign = "center";
    burchardDiv.addEventListener("mouseover", function (e){
        burchardDiv.style.transition = "opacity 0.5s";
        burchardDiv.style.opacity = 1;
    });
    burchardDiv.addEventListener("mouseout", function (e){
        burchardDiv.style.transition = "opacity 0.5s";
        burchardDiv.style.opacity = 0;
    });
    
    document.getElementById("burchardthing").appendChild(burchardDiv);
    
    //EAS Hall picture
    var easpicPicture = document.getElementById("easthing");
    var easpicWidth = easpicPicture.width;
    var easDiv = document.createElement("div");
    easDiv.style.marginTop = "50px";
    easDiv.style.width = easpicWidth;
    easDiv.style.height =  "20px";
    easDiv.style.backgroundColor = "gray";
    easDiv.style.opacity = 0;
    easDiv.style.color = "white";
    easDiv.textContent = "Basically, this building hosts events and stuff.";
    easDiv.style.textAlign = "center";
    easDiv.addEventListener("mouseover", function (e){
        easDiv.style.transition = "opacity 0.5s";
        easDiv.style.opacity = 1;
    });
    easDiv.addEventListener("mouseout", function (e){
        easDiv.style.transition = "opacity 0.5s";
        easDiv.style.opacity = 0;
    });
    
    document.getElementById("easthing").appendChild(easDiv);
    
    //Castle Point Hall picture
    var cphpicPicture = document.getElementById("cphthing");
    var cphpicWidth = cphpicPicture.width;
    var cphDiv = document.createElement("div");
    cphDiv.style.marginTop = "50px";
    cphDiv.style.width = cphpicWidth;
    cphDiv.style.height =  "20px";
    cphDiv.style.backgroundColor = "gray";
    cphDiv.style.opacity = 0;
    cphDiv.style.color = "white";
    cphDiv.textContent = "Basically, this dorm has in-room bathrooms but is far from classes.";
    cphDiv.style.textAlign = "center";
    cphDiv.addEventListener("mouseover", function (e){
        cphDiv.style.transition = "opacity 0.5s";
        cphDiv.style.opacity = 1;
    });
    cphDiv.addEventListener("mouseout", function (e){
        cphDiv.style.transition = "opacity 0.5s";
        cphDiv.style.opacity = 0;
    });
    
    document.getElementById("cphthing").appendChild(cphDiv);
    
    
    //Davis Hall picture
    var davispicPicture = document.getElementById("davisthing");
    var davispicWidth = davispicPicture.width;
    var davisDiv = document.createElement("div");
    davisDiv.style.marginTop = "50px";
    davisDiv.style.width = davispicWidth;
    davisDiv.style.height =  "20px";
    davisDiv.style.backgroundColor = "gray";
    davisDiv.style.opacity = 0;
    davisDiv.style.color = "white";
    davisDiv.textContent = "Basically, this dorm is close to classes and good all-around.";
    davisDiv.style.textAlign = "center";
    davisDiv.addEventListener("mouseover", function (e){
        davisDiv.style.transition = "opacity 0.5s";
        davisDiv.style.opacity = 1;
    });
    davisDiv.addEventListener("mouseout", function (e){
        davisDiv.style.transition = "opacity 0.5s";
        davisDiv.style.opacity = 0;
    });
    
    document.getElementById("davisthing").appendChild(davisDiv);
    
    
    //Humphreys Hall picture
    var humphreyspicPicture = document.getElementById("humphreysthing");
    var humphreyspicWidth = humphreyspicPicture.width;
    var humphreysDiv = document.createElement("div");
    humphreysDiv.style.marginTop = "50px";
    humphreysDiv.style.width = humphreyspicWidth;
    humphreysDiv.style.height =  "20px";
    humphreysDiv.style.backgroundColor = "gray";
    humphreysDiv.style.opacity = 0;
    humphreysDiv.style.color = "white";
    humphreysDiv.textContent = "Basically, this dorm a bit out of the way.";
    humphreysDiv.style.textAlign = "center";
    humphreysDiv.addEventListener("mouseover", function (e){
        humphreysDiv.style.transition = "opacity 0.5s";
        humphreysDiv.style.opacity = 1;
    });
    humphreysDiv.addEventListener("mouseout", function (e){
        humphreysDiv.style.transition = "opacity 0.5s";
        humphreysDiv.style.opacity = 0;
    });
    
    document.getElementById("humphreysthing").appendChild(humphreysDiv);
    
    
    //Jonas Hall picture
    var jonaspicPicture = document.getElementById("jonasthing");
    var jonaspicWidth = jonaspicPicture.width;
    var jonasDiv = document.createElement("div");
    jonasDiv.style.marginTop = "50px";
    jonasDiv.style.width = jonaspicWidth;
    jonasDiv.style.height =  "20px";
    jonasDiv.style.backgroundColor = "gray";
    jonasDiv.style.opacity = 0;
    jonasDiv.style.color = "white";
    jonasDiv.textContent = "Basically, this dorm is a bit out of the way.";
    jonasDiv.style.textAlign = "center";
    jonasDiv.addEventListener("mouseover", function (e){
        jonasDiv.style.transition = "opacity 0.5s";
        jonasDiv.style.opacity = 1;
    });
    jonasDiv.addEventListener("mouseout", function (e){
        jonasDiv.style.transition = "opacity 0.5s";
        jonasDiv.style.opacity = 0;
    });
    
    document.getElementById("jonasthing").appendChild(jonasDiv);
    
    
    //Hayden Hall picture
    var haydenpicPicture = document.getElementById("haydenthing");
    var haydenpicWidth = haydenpicPicture.width;
    var haydenDiv = document.createElement("div");
    haydenDiv.style.marginTop = "50px";
    haydenDiv.style.width = haydenpicWidth;
    haydenDiv.style.height =  "20px";
    haydenDiv.style.backgroundColor = "gray";
    haydenDiv.style.opacity = 0;
    haydenDiv.style.color = "white";
    haydenDiv.textContent = "Basically, this is the worst building on campus.";
    haydenDiv.style.textAlign = "center";
    haydenDiv.addEventListener("mouseover", function (e){
        haydenDiv.style.transition = "opacity 0.5s";
        haydenDiv.style.opacity = 1;
    });
    haydenDiv.addEventListener("mouseout", function (e){
        haydenDiv.style.transition = "opacity 0.5s";
        haydenDiv.style.opacity = 0;
    });
    
    document.getElementById("haydenthing").appendChild(haydenDiv);
    
    
}



















