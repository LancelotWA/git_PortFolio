function Nouveau_mot(){
    let tableau_verbe_etre = ["Am", "Are"];
    let tableau_adjectif = ["happy", "sad", "good", "loyal", "trustworthy", "medium", "beautiful", "shy", "fulfilled"];
    let tableau_sujet = ["I", "you", "he", 'we', "you", "they"];
    let tableau_ponctuation = [".",":", "!", "?", ":)", "<3"];
    let word_to_return = "Important Question : ";
    let personne = Math.floor(Math.random()*tableau_sujet.length);
    let adj = Math.floor(Math.random()*tableau_adjectif.length);
    let ponctuation = Math.floor(Math.random()*tableau_ponctuation.length);
    if(personne === 0){
        word_to_return += tableau_verbe_etre[0] +" " + tableau_sujet[personne] + " ";
    } else {
        word_to_return += tableau_verbe_etre[1] +" " + tableau_sujet[personne] + " ";
    }
    word_to_return += tableau_adjectif[adj] + tableau_ponctuation[ponctuation];
    return word_to_return;
}


//Citation
let yes = document.getElementById("IWant");
let no = document.getElementById("noThanks");

function putQuote(event) {
    let citation = document.getElementById("theQuote");
    citation.innerHTML = Nouveau_mot();
    citation.style.display = "contents";
}

function RemoveQuote() {
    let citation = document.getElementById("theQuote");
    citation.style.display = "none";
}

yes.addEventListener("click", putQuote)
no.addEventListener("click", RemoveQuote);

//Detail skills
let bouton_hard = document.getElementsByClassName("def")[0];
let Hard_def = document.getElementById("whatIsHardSkills");
let Hard_activ = false;
let bouton_soft = document.getElementsByClassName("def")[1];
let Soft_def = document.getElementById("whatIsSoftSkills");
let Soft_activ = false;

function putHard(event) {
    if(Hard_activ){
        Hard_def.style.display = "none";
        Hard_activ = false;
} else {
    Hard_activ = true;
    Hard_def.style.display = "contents";
}
}

function putSoft(event) {
    if(Soft_activ){
        Soft_def.style.display = "none";
        Soft_activ = false;
} else {
    Soft_activ = true;
    Soft_def.style.display = "contents";
}
}

bouton_hard.addEventListener("click", putHard);
bouton_soft.addEventListener("click", putSoft);


//Explanation for projects
let ArrayButton = document.getElementsByClassName("explainProject");
let ArrayContent = document.getElementsByClassName("Theexplaination");
var ArrayActivation = [false, false, false];
console.log(ArrayButton);
console.log(ArrayContent);

console.log(ArrayActivation);


function Put(number) {
    console.log(2);
    if(!ArrayActivation[number]) {
        console.log(1);
        ArrayContent[number].style.display = "contents";
        ArrayActivation[number] = true;
    } else {
        console.log(2); 
        ArrayContent[number].style.display = "none";
        ArrayActivation[number] = true;
    }
}

ArrayButton[0].addEventListener("click", function() {
    Put(0)
});
ArrayButton[1].addEventListener("click", function() {
    Put(1)
});
ArrayButton[2].addEventListener("click", function() {
    Put(2)
});

//footer
let EmailText = document.getElementById("mymail");
let EmailPhoto = document.getElementsByClassName("contactMe")[2];
let Email_activ = false;
let email_button = EmailPhoto;

function pictureEmail(){
    if(Email_activ) {
        console.log(Email_activ);
        EmailText.style.display = "none";
        Email_activ = false;
    } else {
        console.log(Email_activ);
        EmailText.style.display = "contents";
        Email_activ = true;
    }
}

email_button.addEventListener("click",pictureEmail)





