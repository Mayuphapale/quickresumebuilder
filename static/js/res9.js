function addNewSkillField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);


    let skillOb = document.getElementById("skill");
    let skillAddButtonOb = document.getElementById("skillAddButton");

    skillOb.insertBefore(newNode, skillAddButtonOb);
}

function addNewlinkfield() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("linkfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);


    let linkOb = document.getElementById("link");
    let linkAddButtonOb = document.getElementById("linkAddButton");

    linkOb.insertBefore(newNode, linkAddButtonOb);
}

function addNewLangField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("langfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);


    let langOb = document.getElementById("lang");
    let langAddButtonOb = document.getElementById("langAddButton");

    langOb.insertBefore(newNode, langAddButtonOb);
}

function addNewHobbyField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hobbyfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);


    let hobbyOb = document.getElementById("hobby");
    let hobbyAddButtonOb = document.getElementById("hobbyAddButton");

    hobbyOb.insertBefore(newNode, hobbyAddButtonOb);
}

function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 4);


    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);


    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewCerField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("cerfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter Here");

    let cerOb = document.getElementById("cer");
    let cerAddButtonOb = document.getElementById("cerAddButton");

    cerOb.insertBefore(newNode, cerAddButtonOb);
}
// generate cv
function generate() {
    console.log("generate cv");


    //contact

    let contactfield = document.getElementById("contactfield").value;

    let contactT = document.getElementById("contactT");

    contactT.innerHTML = contactfield;

    //address

    document.getElementById("addressT").innerHTML =
        document.getElementById("addressfield").value;

    //name

    document.getElementById("nameT1").innerHTML =
        document.getElementById("namefield").value;

    //email
    document.getElementById("emailT").innerHTML =
        document.getElementById("emailfield").value;



    //profession

    document.getElementById("proT").innerHTML =
        document.getElementById("profield").value;



    //objective

    document.getElementById("objT").innerHTML =
        document.getElementById("objfield").value;

    //experience

    let wes = document.getElementsByClassName("wefield");

    let str = "";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;

    //    links

    let links = document.getElementsByClassName("linkfield");

    let str7 = "";

    for (let e of links) {
        str7 = str7 + `<li> ${e.value} </li>`;
    }
    document.getElementById("linkT").innerHTML = str7;



    //skills

    let skills = document.getElementsByClassName("skillfield");

    let str2 = "";

    for (let e of skills) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("skillT").innerHTML = str2;



    //    languages

    let langs = document.getElementsByClassName("langfield");

    let str3 = "";

    for (let e of langs) {
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById("langT").innerHTML = str3;

    //hobbies

    let hobbys = document.getElementsByClassName("hobbyfield");

    let str4 = "";

    for (let e of hobbys) {
        str4 = str4 + `<li> ${e.value} </li>`;
    }
    document.getElementById("hbT").innerHTML = str4;

    //education

    let aqs = document.getElementsByClassName("aqfield");

    let str5 = "";

    for (let e of aqs) {
        str5 = str5 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str5;

    //    certifications

    let cers = document.getElementsByClassName("cerfield");

    let str6 = "";

    for (let e of cers) {
        str6 = str6 + `<li> ${e.value} </li>`;
    }
    document.getElementById("cerT").innerHTML = str6;

    // code for setting image

    let file = document.getElementById("imgfield").files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    //set the image to template

    reader.onloadend = function() {
        document.getElementById("imgtemplate").src = reader.result;
    };


    document.getElementById("cv-form").style.display = "none";
    document.getElementById("resume-tamplate").style.display = "block";


}
//print cv
function printresume() {
    window.print();
}

function handleOnChangeEvent(x) {
    document.getElementById("text13").style.backgroundColor = x;


}

// function handleOnChangeEvent(x){
//     document.getElementsByClassName("col-background").style.backgroundColor=x;
// }

function smallA() {
    document.getElementById('text11').style.fontSize = '1em';
    document.getElementById('text12').style.fontSize = '1em';
}

function mediumA() {
    document.getElementById('text11').style.fontSize = '1.25em';
    document.getElementById('text12').style.fontSize = '1.25em';
}

function bigA() {
    document.getElementById('text11').style.fontSize = '1.55em';
    document.getElementById('text12').style.fontSize = '1.55em';
}


function changeFont() {
    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('text11').style.fontFamily = selectedValue;
}