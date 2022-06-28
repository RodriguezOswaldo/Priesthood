
//getting year
var date = new Date();
var n = date.getFullYear();
console.log(n);
console.log(new Date());
var year = document.getElementById('year').innerHTML = n;

//speechs content
const speechBox = [

    {
        my_date: new Date(2022, 4, 8),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/04/14bednar?lang=spa",
        title: "“Pero no les hicimos caso”",
        img :'https://assets.ldscdn.org/3ae9962a4b9604a4cc5d20360f5f15eda99f1bd6',
        speaker: "élder David A. Bednar"
    },
    {
        my_date: new Date(2022, 4, 22),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/04/15andersen?lang=spa",
        title: "Seguir a Jesús: ser pacificadores",
        img:"https://assets.ldscdn.org/8a1f9b8dc23a580b2e197a9a3a4dc70926ef9288",
        speaker: "élder Neil L. Andersen"
    },
    {
        my_date: new Date(2022, 5, 26),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/04/18eyring?lang=spa",
        img:'https://assets.ldscdn.org/bd/0a/bd0ad5c2eac5ec6fe2bf1b5b5769f29be8d6ce5b/bd0ad5c2eac5ec6fe2bf1b5b5769f29be8d6ce5b.image/jpeg',
        title: "Firmes en las tormentas",
        speaker: "presidente Henry B. Eyring"
    },
    {
        my_date: new Date(2022, 6, 10),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/04/23holland?lang=spa",
        img: 'https://assets.ldscdn.org/6e9a94308635adadc3dc77791bd19fac7e8dd3f4',
        title: "No temas; cree solamente",
        speaker: "élder Jeffrey R. Holland"
    },
    {
        my_date: new Date(2022, 6, 24),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/04/26gong?lang=spa",
        img: 'https://assets.ldscdn.org/220cc00a28d550c263c62bb624424a5c0d365009',
        title: "Cada uno de nosotros tiene una historia",
        speaker: "élder Gerrit W. Gong"
    },
    {
        my_date: new Date(2022, 7, 14),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/04/29cook?lang=spa",
        img: 'https://assets.ldscdn.org/be193a530a78d675e0fb3c8540a05a3790c93ce8',
        title: "Conversión a la voluntad de Dios",
        speaker: "élder Quentin L. Cook"
    },
    {
        my_date: new Date(2022, 7, 28),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/04/36renlund?lang=spa",
        img: 'https://assets.ldscdn.org/afdbb7e8dc2deee83f180d5ccac5e38f8115e4f7',
        title: "Su naturaleza divina y destino eterno",
        speaker: "élder Dale G. Renlund"
    },
    {
        my_date: new Date(2022, 8, 11),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/04/41christofferson?lang=spa",
        title: "Nuestra relación con Dios",
        img:'https://assets.ldscdn.org/fe/8a/fe8aa750460018cb27bd86c2b55001f88cc53ff9/fe8aa750460018cb27bd86c2b55001f88cc53ff9.image/jpeg',
        speaker: "élder D. Todd Christofferson"
    },
    {
        my_date: new Date(2022, 8, 25),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/04/45rasband?lang=spa",
        img:'https://assets.ldscdn.org/5d/c4/5dc46e8dad285884173744f6b723eaf6d25a1039/5dc46e8dad285884173744f6b723eaf6d25a1039.image/jpeg',
        title: "Sanar al mundo",
        speaker: "élder Ronald A. Rasband"
    },
    {
        my_date: new Date(2022, 1, 27),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/35wilcox?lang=spa",
        img: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1241706627001/d903b770-b990-44ef-93ef-8898f496b453/f0931799-8615-4490-847b-f65e65b7b80b/1280x720/match/image.jpg',
        title: "La dignidad no significa estar libre de mancha",
        speaker: "hermano Bradley R. Wilcox"
    },
    {
        my_date: new Date(2022, 2, 13),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/41uchtdorf?lang=spa",
        img: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1241706627001/41d96063-dd20-4fca-b584-6e8df03f2f8c/67240ef0-6dfa-446b-879e-a306cbe2cabb/1280x720/match/image.jpg',
        title: "La restauración diaria",
        speaker: "élder Dieter F. Uchtdorf"
    },
    {
        my_date: new Date(2022, 2, 27),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/18oaks?lang=spa",
        img: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1241706627001/669c90c3-680b-45b5-8bc8-34086d80dfa5/80e57966-bcde-4d9a-8c59-64c7821caf6c/1280x720/match/image.jpg',
        title: "La necesidad de una Iglesia",
        speaker: "Presidente Dallin H. Oaks"
    },
    {
        my_date: new Date(2022, 3, 3),
        link: "https://www.churchofjesuschrist.org/?lang=spa",
        img: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1241706627001/e88dad0a-a9ba-43fa-b0e4-18bd147fc764/ad692b43-ae6c-4e67-ac64-cb128b6660d8/1280x720/match/image.jpg',
        title: "Conferencia General",
        speaker: "Autoridades Generales"
    },

    // { my_date: 'Apr 3', link: "https://www.churchofjesuschrist.org/?lang=spa", title: "Conferencia General", speaker: "Autoridades Generales" },
]

function onLoad() {
    //empty object xDDDD
    let current = null;
    speechBox.sort((current, next) => {
        return current.my_date - next.my_date;
    });
    //getting the data
    for (let i = 0; i < speechBox.length; i++) {
        const my_date = speechBox[i].my_date;
        const link = speechBox[i].link;
        const image = speechBox[i].img;
        const title = speechBox[i].title;
        const speaker = speechBox[i].speaker;
        //printing format
        const format_date = `${moment(my_date).format('MMM')} ${moment(my_date).format('D')}, ${moment(my_date).format('Y')}`;
        //Creating container
        let node = document.getElementById("nodeContainer");
        let list = document.createElement("section");
        list.className = "boxes";
        node.appendChild(list);

        let firstNode = document.createElement("h3");
        list.appendChild(firstNode);
        firstNode.textContent = format_date;
        list.appendChild(firstNode);

        ///----- Image here ------/

        let img = document.createElement("img")
        img.setAttribute('src', image);
        list.appendChild(img);

        let secondNode = document.createElement("a");
        secondNode.setAttribute('href', link);
        secondNode.setAttribute('target', "_blank");
        secondNode.textContent = " | " + title + " | ";
        list.appendChild(secondNode);

        let thirdNode = document.createElement("p");
        thirdNode.textContent = speaker;
        thirdNode.setAttribute('class', 'italic')
        if (current === null && new Date() < my_date) {
            current = speechBox[i];
            current.date = format_date;
            list.style.backgroundColor = '#fff';
        }

        list.appendChild(thirdNode);

    }
    //creating current week
    let currentWeek = document.getElementById("currentWeek");

    let currentDate = document.createElement("h3");
    currentWeek.appendChild(currentDate);
    currentDate.textContent = current.date;

    let currentImg = document.createElement("img")
    currentImg.setAttribute('src', current.img);
    currentWeek.appendChild(currentImg);

    let currentSpeech = document.createElement("a");
    currentSpeech.setAttribute('href', current.link);
    currentSpeech.setAttribute('target', "_blank");
    currentSpeech.textContent = " | " + current.title + "  | ";
    currentWeek.appendChild(currentSpeech);

    let currentSpeaker = document.createElement("p");
    currentSpeaker.textContent = current.speaker;
    currentSpeaker.setAttribute('class', 'italic')
    currentWeek.appendChild(currentSpeaker);

    // let click =  document.getElementById('click');
    // //Let's create the event handler
    // currentWeek.addEventListener("click", ()=>{
    //     console.log('you clicked on the screen');
    //     currentWeek.setAttribute('onclick',`location.href='${current.link}` )
    //
    // })
    console.log(speechBox)
}

onLoad();
