

function Tmatiere(code, nom, volumeHoraire, prof, assistant, drapeau) {
    this.code = code;
    this.nom = nom;
    this.volumeHoraire = volumeHoraire;
    this.prof = prof;
    this.assistant = assistant;
    this.drapeau = drapeau;

}
function Tdebouche(code, nom) {
    this.code = code;
    this.nom = nom;
}
function Tparcours(code, nom, debouches) {
    this.code = code;
    this.nom = nom;
    this.debouches = debouches;
}
function Tnote(matiere, note) {
    this.matiere = matiere;
    this.note = note;
}
function Tetudiant(mat, nom, prenom, dateNaiss, lieuNaiss, sexe, taille, poids, parcours, notes) {
    this.mat = mat;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaiss = dateNaiss;
    this.lieuNaiss = lieuNaiss;
    this.sexe = sexe;
    this.taille = taille;
    this.poids = poids;
    this.parcours = parcours;

}

//Enregistrement d'une matiere et d'une note

let btn1 = document.getElementById('bouton1');
let tabl1; let tr1; let td11, td21, td31, zone14;
btn1.addEventListener(
    'click', (e) => {
        e.preventDefault();
        let note = new Tnote(document.getElementById('matiere').value, document.getElementById('note').value,);

        tabl1 = document.getElementById('tab1')
        tr1 = document.createElement('tr')
        td11 = document.createElement('td')
        td11.innerHTML = note.matiere
        td21 = document.createElement('td')
        td21.innerHTML = note.note
        td31 = document.createElement('td')
        td31.innerHTML = '<div id="suppression1" class="btn btn-danger abc ">' +
            '<p>' + '-' + '</p>' +
            '</div>'

        tr1.appendChild(td11);
        tr1.appendChild(td21);
        tr1.appendChild(td31);
        tabl1.appendChild(tr1)
        document.getElementById('matiere').value = ''
        document.getElementById('note').value = ''

        //supression d'une note
        let bout14 = document.getElementById('suppression1');
        bout14.addEventListener(
            'click', (e) => {
                tabl1.removeChild(tr1);
            })
    })



//Enregistrement d'un eleve
let btn = document.getElementById('bouton2');
let tabl; let tr; let td1, td2, td3, td4, td5, td6, td7, zone6, zone7, zone8, zone9, zone10, zone11, zone12, zone16, zone18;
btn.addEventListener(
    'click', (e) => {
        e.preventDefault();
        let etud = new Tetudiant(document.getElementById('matricule').value, document.getElementById('nom').value, document.getElementById('prenom').value,
            document.getElementById('date').value, document.getElementById('lieu').value, document.getElementById('sexe').value, document.getElementById('taille').value,
            document.getElementById('poids').value, document.getElementById('parcours').value);



        document.getElementById('zone1').innerHTML = etud.mat + '<br>';
        document.getElementById('zone1').innerHTML = etud.nom + '<br>';
        document.getElementById('zone1').innerHTML = etud.prenom + '<br>';
        document.getElementById('zone1').innerHTML = etud.dateNaiss + '<br>';
        document.getElementById('zone1').innerHTML = etud.lieuNaiss + '<br>';
        document.getElementById('zone1').innerHTML = etud.sexe + '<br>';
        document.getElementById('zone1').innerHTML = etud.taille + '<br>';
        document.getElementById('zone1').innerHTML = etud.poids + '<br>';
        document.getElementById('zone1').innerHTML = etud.parcours + '<br>';

        tabl = document.getElementById('tab2')
        tr = document.createElement('tr')
        td1 = document.createElement('td')
        td1.innerHTML = '<input id="monmatricule" class="btn btn-primary" type="button" value="' + etud.mat + '">'
        td2 = document.createElement('td')
        td2.innerHTML = etud.nom + ' ' + etud.prenom
        td3 = document.createElement('td')
        td3.innerHTML = etud.dateNaiss
        td4 = document.createElement('td')
        td4.innerHTML = etud.lieuNaiss
        td5 = document.createElement('td')
        td5.innerHTML = etud.sexe
        td6 = document.createElement('td')
        td6.innerHTML = etud.parcours
        td7 = document.createElement('td')
        td7.innerHTML = '<div  class="align">' +
            '<div  id="suppression" class="btn btn-danger abc">' +
            '<p>' + '-' + '</p>' +
            '</div>' +
            '<div id="modification" class="btn btn-primary abc ">' +
            '<p>' + '+' + '</p>' +
            '</div>' +
            '<div id="visualisation" class="btn btn-success abc">' +
            '<p>' + '^' + '</p>' +
            '</div>' +
            '</div>'

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tabl.appendChild(tr)

        document.getElementById('matricule').value = ''
        document.getElementById('nom').value = ''
        document.getElementById('prenom').value = ''
        document.getElementById('date').value = ''
        document.getElementById('lieu').value = ''
        document.getElementById('sexe').value = ''
        document.getElementById('taille').value = ''
        document.getElementById('poids').value = ''
        document.getElementById('parcours').value = ''

        //fermeture du formulaire d inscription d'un eleve
        zone6 = document.getElementById('form1');
        zone6.style.display = "none";

        //ouverture de la zone des details
        let bout6 = document.getElementById('monmatricule');
        bout6.addEventListener(
            'click', (e) => {
                e.preventDefault();
                zone10 = document.getElementById('zone4');
                zone10.style.display = "block";
                zone11 = document.getElementById('form2');
                zone11.style.display = "block";
            })

        //supression d'une eleve
        let bout19 = document.getElementById('suppression');
        bout19.addEventListener(
            'click', (e) => {
                tabl.removeChild(tr);
            })

        //visualisation des information d'un eleve 
        let bout16 = document.getElementById('visualisation');
        bout16.addEventListener(
            'click', (e) => {
                e.preventDefault();
                zone16 = document.getElementById('zone4');
                zone16.style.display = "block";
            })


        //modification des informations  d'un eleve
        let bout18 = document.getElementById('modification');
        let newtabl; let newtr; let newtd1, newtd2, newtd3, newtd4, newtd5, newtd6, newtd7;
        bout18.addEventListener(
            'click', (e) => {

                zone18 = document.getElementById('form1');
                zone18.style.display = "block";
                document.getElementById('matricule').value = etud.mat;
                document.getElementById('nom').value = etud.nom;
                document.getElementById('prenom').value = etud.prenom;
                document.getElementById('date').value = etud.dateNaiss;
                document.getElementById('lieu').value = etud.lieuNaiss;
                document.getElementById('sexe').value = etud.sexe;
                document.getElementById('taille').value = etud.taille;
                document.getElementById('poids').value = etud.poids;
                document.getElementById('parcours').value = etud.parcours;

                let bout20 = document.getElementById('form1');
                bout20.addEventListener(
                    'click', (e) => {

                        let newetud = new Tetudiant(document.getElementById('matricule').value, document.getElementById('nom').value, document.getElementById('prenom').value,
                            document.getElementById('date').value, document.getElementById('lieu').value, document.getElementById('sexe').value, document.getElementById('taille').value,
                            document.getElementById('poids').value, document.getElementById('parcours').value);



                        document.getElementById('zone1').innerHTML = newetud.mat + '<br>';
                        document.getElementById('zone1').innerHTML = newetud.nom + '<br>';
                        document.getElementById('zone1').innerHTML = newetud.prenom + '<br>';
                        document.getElementById('zone1').innerHTML = newetud.dateNaiss + '<br>';
                        document.getElementById('zone1').innerHTML = newetud.lieuNaiss + '<br>';
                        document.getElementById('zone1').innerHTML = newetud.sexe + '<br>';
                        document.getElementById('zone1').innerHTML = newetud.taille + '<br>';
                        document.getElementById('zone1').innerHTML = newetud.poids + '<br>';
                        document.getElementById('zone1').innerHTML = newetud.parcours + '<br>';

                        newtr = document.createElement('tr')
                        newtd1 = document.createElement('td')
                        newtd1.innerHTML = '<input id="monmatricule" class="btn btn-primary" type="button" value="' + etud.mat + '">'
                        newtd2 = document.createElement('td')
                        newtd2.innerHTML = etud.nom + ' ' + etud.prenom
                        newtd3 = document.createElement('td')
                        newtd3.innerHTML = etud.dateNaiss
                        newtd4 = document.createElement('td')
                        newtd4.innerHTML = etud.lieuNaiss
                        newtd5 = document.createElement('td')
                        newtd5.innerHTML = etud.sexe
                        newtd6 = document.createElement('td')
                        newtd6.innerHTML = etud.parcours
                        newtd7 = document.createElement('td')
                        newtd7.innerHTML = '<div  class="align">' +
                            '<div  id="suppression" class="btn btn-danger abc">' +
                            '<p>' + '-' + '</p>' +
                            '</div>' +
                            '<div id="modification" class="btn btn-primary abc ">' +
                            '<p>' + '+' + '</p>' +
                            '</div>' +
                            '<div id="visualisation" class="btn btn-success abc">' +
                            '<p>' + '^' + '</p>' +
                            '</div>' +
                            '</div>'

                        newtr.appendChild(newtd1);
                        newtr.appendChild(newtd2);
                        newtr.appendChild(newtd3);
                        newtr.appendChild(newtd4);
                        newtr.appendChild(newtd5);
                        newtr.appendChild(newtd6);
                        newtr.appendChild(newtd7);
                        tabl.replaceChild(tr, newtr);

                        document.getElementById('matricule').value = ''
                        document.getElementById('nom').value = ''
                        document.getElementById('prenom').value = ''
                        document.getElementById('date').value = ''
                        document.getElementById('lieu').value = ''
                        document.getElementById('sexe').value = ''
                        document.getElementById('taille').value = ''
                        document.getElementById('poids').value = ''
                        document.getElementById('parcours').value = ''

                    })

            })
    })

//ouverture du formulaire d inscription d'un eleve
let bout = document.getElementById('bouton3');
bout.addEventListener(
    'click', (e) => {
        e.preventDefault();
        zone7 = document.getElementById('form1');
        zone7.style.display = "block";

    })

//fermeture de la zone des details
let bout4 = document.getElementById('bouton4');
bout4.addEventListener(
    'click', (e) => {
        e.preventDefault();
        zone8 = document.getElementById('zone4');
        zone8.style.display = "none";

    })

//fermeture du formulaire d inscription d'une matiere
let bout5 = document.getElementById('bouton5');
bout5.addEventListener(
    'click', (e) => {
        e.preventDefault();
        zone9 = document.getElementById('form2');
        zone9.style.display = "none";

    })


function affichageformnote() {
    var x = document.getElementById("form2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
