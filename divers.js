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

