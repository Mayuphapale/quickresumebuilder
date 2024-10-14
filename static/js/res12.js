//alert("loading")
//work ex
function addnewwefield() {
    // console.log("Adding new field");

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weaddbuttonOb = document.getElementById("weaddbutton");

    weOb.insertBefore(newNode, weaddbuttonOb);
}

//eduaction
function addnewaqfield() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqfield');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqaddbuttonOb = document.getElementById("aqaddbutton");

    aqOb.insertBefore(newNode, aqaddbuttonOb);
}

//experiance
function addnewskfield() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skfield');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let skOb = document.getElementById("sk");
    let skaddbuttonOb = document.getElementById("skaddbutton");

    skOb.insertBefore(newNode, skaddbuttonOb);
}

//skill
function addnewlskfield() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('lskfield');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let lskOb = document.getElementById("lsk");
    let lskaddbuttonOb = document.getElementById("lskaddbutton");

    lskOb.insertBefore(newNode, lskaddbuttonOb);
}

//hobbie
function addnewhbfield() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('hbfield');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let hbOb = document.getElementById("hb");
    let hbaddbuttonOb = document.getElementById("hbaddbutton");

    hbOb.insertBefore(newNode, hbaddbuttonOb);
}



//generating resume
function generateresume() {
    // console.log("hey diksha");

    let namefield = document.getElementById('namefield').value;

    let nameT1 = document.getElementById('nameT1')

    nameT1.innerHTML = namefield;

    //direct
    // document.getElementById('nameT2').innerHTML=namefield

    //contact
    document.getElementById('contactT').innerHTML = document.getElementById('contactfield').value;

    //prpfession
    document.getElementById('professionT').innerHTML = document.getElementById('profield').value;

    //emailid
    document.getElementById('emailT').innerHTML = document.getElementById('emailfield').value;

    //address
    document.getElementById('addressT').innerHTML = document.getElementById('addressfield').value;

    //fb
    document.getElementById('fbT').innerHTML = document.getElementById('fbfield').value;

    //insta
    document.getElementById('instaT').innerHTML = document.getElementById('instafield').value;

    //linkedin
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedfield').value;


    //objective

    document.getElementById('objectiveT').innerHTML = document.getElementById('objectivefield').value;

    //we

    let wes = document.getElementsByClassName('wefield')

    let str = ''

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;

    //aq

    let aqs = document.getElementsByClassName('eqfield')

    let str1 = ''

    for (let e of aqs) {
        str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById('aqT').innerHTML = str1;

    //sk

    let sks = document.getElementsByClassName('skfield')

    let str2 = ''

    for (let e of sks) {
        str2 += `<li> ${e.value} </li>`;
    }
    document.getElementById('skT').innerHTML = str2;

    //hb
    let hbs = document.getElementsByClassName('hbfield')

    let str3 = ''

    for (let e of hbs) {
        str3 += `<li> ${e.value} </li>`;
    }
    document.getElementById('hbT').innerHTML = str3;

    //lsk
    console.log("Adding new field");
    let lsks = document.getElementsByClassName('lskfield')

    let str4 = ''

    for (let e of lsks) {
        str4 += `<li> ${e.value} </li>`;
    }
    document.getElementById('lskT').innerHTML = str4;




    document.getElementById('resume-form').style.display = 'none';
    document.getElementById('resume-tamplate').style.display = 'block';


}

//print resume
function printresume() {
    window.print();
}

function handleOnChangeEvent(x) {
    document.getElementById("text11").style.backgroundColor = x;
    document.getElementById("text14").style.color = x;
    document.getElementById("text15").style.color = x;
    document.getElementById("text16").style.color = x;
    document.getElementById("text17").style.color = x;


}

// function handleOnChangeEvent(x){
//     document.getElementsByClassName("col-background").style.backgroundColor=x;
// }

function smalla() {

    document.getElementById('text111').style.fontSize = '1em';

}

function mediuma() {

    document.getElementById('text111').style.fontSize = '1.25em';

}

function biga() {

    document.getElementById('text111').style.fontSize = '1.55em';

}


function changeFont() {
    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('text00').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('lskT').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('hbT').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('contactT').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('emailT').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('addressT').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('skT').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('objectiveT').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('weT').style.fontFamily = selectedValue;


    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('aqT').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('fbT').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('instaT').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('linkedT').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('text01').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('text02').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('text03').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('text04').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('text14').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('text15').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('text16').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('text17').style.fontFamily = selectedValue;
}