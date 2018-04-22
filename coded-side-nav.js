


/*-----------Push side nav--------------*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


/*-----------Push side nav--------------*/
function openpushNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closepushNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


/*-----------Push Full side nav--------------*/
function openfullNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closefullNav() {
    document.getElementById("mySidenav").style.width = "0";
}


/*-----------Push side nav with opactiy--------------*/
function openpush2Nav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closepush2Nav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}