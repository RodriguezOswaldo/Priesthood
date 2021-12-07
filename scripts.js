var date = new Date();
var n = date.getFullYear();
console.log(n); 
console.log(new Date());
var year = document.getElementById('year').innerHTML = n;


const speechBox = [
    { my_date: 'Oct 10', link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/22bednar?lang=spa", title: "Con el poder de Dios en gran gloria", speaker: "David A. Bednar"},
    { my_date: 'Oct 24', link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/12holland?lang=spa", title: "La mayor posesión", speaker: "Elder Jeffrey R. Holland"},
    { my_date: 'Nov 14', link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/29stevenson?lang=eng", title: "Simplemente hermoso, hermosamente simple", speaker: "Elder Gary E. Stevenson"},
    { my_date: 'Nov 28', link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/31ballard?lang=spa", title: "“¿Me amas más que estos?”", speaker: "Presidente M. Russell Ballard"},
    { my_date: 'Dec 12', link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/47nelson?lang=spa", title: "El templo y el cimiento espiritual de ustedes", speaker: "Presidente Russell M. Nelson"},
    { my_date: 'Jan 09', link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/42johnson?lang=spa", title: "Inviten a Cristo a ser el autor de su historia", speaker: "Presidenta Camille N. Johnson"},
    { my_date: 'Jan 23', link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/46cook?lang=spa", title: "La paz personal en tiempos difíciles", speaker: "élder Quentin L. Cook"},    
    { my_date: 'Feb 13', link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/58andersen?lang=spa", title: "El nombre de la Iglesia no es negociable", speaker: "élder Neil L. Andersen"},
    { my_date: 'Feb 27', link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/38eyring?lang=spa", title: "La fe para pedir y entonces actuar", speaker: "presidente Henry B. Eyring"},
    { my_date: 'Mar 13', link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/35wilcox?lang=spa", title: "La dignidad no significa estar libre de mancha", speaker: "hermano Bradley R. Wilcox"},
    { my_date: 'Mar 27', link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/18oaks?lang=spa", title: "La necesidad de una Iglesia", speaker: "presidente Dallin H. Oaks"},
    { my_date: 'Apr 3', link: true, title: "Conferencia General", speaker: "" },
  ]

function onLoad(){
    for (let i = 0; i < speechBox.length; i++) {
        const my_date = speechBox[i].my_date;
        const link = speechBox[i].link;
        const title = speechBox[i].title;
        const speaker = speechBox[i].speaker;
        console.log(my_date);

        var node = document.getElementById("nodeContainer");
        var list = document.createElement("section");
        node.appendChild(list);

        var firstNode = document.createElement("p");
        list.appendChild(firstNode);
        firstNode.textContent = my_date;
        list.appendChild(firstNode);

        var secondNode = document.createElement("a");
        secondNode.setAttribute('href', link);
        secondNode.setAttribute('target', "_blank");
        secondNode.textContent = " | "+ title + " | " + speaker;
        list.appendChild(secondNode);
    }

}
onLoad();

// var myData =
//                 `{
//     "name":"Own",
//     "favoriteNumber": 23,
//     "isProgramer": true,
//     "hobbies":["Reading", "Cooking", "Studying", "Coding"],
// "familyMembers":[{
//         "Wife":"Helena",
//         "Son":"R2",
//         "Mom":"Mauris",
//         "Dad":"Oswaldo",
//         "OldestBrother":"Leonard",
//         "YoungestBrother":"Rafa"
//     }],
//     "favoriteMovies":[{
//         "nameFir":"Star Wars Episode III",
//         "titleFir":"The Revenge of the Sith",
//         "nameSec":"Star Wars Episode IV",
//         "titleSec": "A New Hope",
//         "nameThird":"Star Wars",
//         "titleThird":"Rogue One",
//         "nameFourth":"Star Wars IV",
//         "titleFourth":"The Return of the Jedi"
//     }`

//     console.log(myData);