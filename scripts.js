
//getting year
var date = new Date();
var n = date.getFullYear();
console.log(n);
console.log(new Date());
var year = document.getElementById('year').innerHTML = n;

//speechs content
const speechBox = [

    {
        my_date: new Date(2023, 11, 25),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/04/14bednar?lang=spa",
        title: "Navidad",
        img: 'https://www.churchofjesuschrist.org/bc/content/ldsorg/home-strata-live/2022/743_Seeking-Christ-in-our-Christmas-Traditions_L2_I-10_1f83673e13f9f5631806404a520d92858d48c2b1_Church%20of%20Jesus%20Christ.jpg',
        speaker: ""
    },
    {
        my_date: new Date(2023, 3, 23),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2023/04/47nelson?lang=spa",
        title: "“Se necesitan pacificadores”",
        img: 'https://assets.churchofjesuschrist.org/b850b1897faef238fb5cd3df1c7185e8e8446319.jpeg',
        speaker: "President Russell M. Nelson"
    },
    {
        my_date: new Date(2023, 4, 14),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2023/04/14gong?lang=eng",
        title: "“Ministrar”",
        img: 'https://assets.churchofjesuschrist.org/2d5348fa34243149e33050f92081cdf75eca00c5.jpeg',
        speaker: "élder Gerrit W. Gong"
    },
    {
        my_date: new Date(2023, 4, 28),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2023/04/12cordon?lang=eng",
        title: "“Nunca dejen pasar la oportunidad de testificar de Cristo”",
        img: 'https://assets.churchofjesuschrist.org/6e088501c28eedf930a7c5d5cc6479c8b852871b.jpeg',
        speaker: "Sister Bonnie H. Cordon"
    },
    {
        my_date: new Date(2023, 6, 14),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/04/15andersen?lang=spa",
        title: "Un discipulado que perdura",
        img: "https://assets.churchofjesuschrist.org/faae4cb7ebbe4891bbf13b6e5787210739dcb3f1.jpeg",
        speaker: "presidente Steven J. Lund"
    },
    {
        my_date: new Date(2023, 6, 28),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/10/44sitati?lang=spa",
        img: 'https://assets.churchofjesuschrist.org/67a06655887b85f476bb78209fc4e1d59c2e25b2.jpeg',
        title: "Modelos de discipulado",
        speaker: " élder Joseph W. Sitati"
    },
    {
        my_date: new Date(2023, 7, 11),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/04/23holland?lang=spa",
        img: 'https://assets.churchofjesuschrist.org/ccf3f45774ffe1449f48ea50d3211c268a9feb11.jpeg',
        title: "Felices y para siempre",
        speaker: "élder Gerrit W. Gong"
    },
    {
        my_date: new Date(2023, 7, 25),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/10/34silva?lang=spa",
        img: 'https://assets.churchofjesuschrist.org/849860dd6985918a077b8309c15b0d378992df99.jpeg',
        title: "Valentía para proclamar la verdad",
        speaker: "élder Denelson Silva"
    },
    {
        my_date: new Date(2023, 8, 9),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/10/33pearson?lang=spa",
        img: 'https://assets.churchofjesuschrist.org/dda08902f6a20109d15dadc7eec1519e93733fe0.jpeg',
        title: "¿Aún están dispuestos?",
        speaker: "élder Kevin W. Pearson"
    },
    {
        my_date: new Date(2023, 8, 23),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2023/04/17eyring?lang=eng",
        img: 'https://assets.churchofjesuschrist.org/eb6e865a60734450cc769178ab3da519846cd8e8.jpeg',
        title: "Encontrando Paz Personal",
        speaker: "President Henry B. Eyring"
    },
    {
        my_date: new Date(2023, 9, 5),
        link: "https://www.churchofjesuschrist.org/?lang=spa",
        img: 'https://assets.ldscdn.org/fd7cc4be8be035ae5801f4904dad9d48c72b2b5e',
        title: "Conferencia General",
        speaker: "Autoridades Generales"
    },
    {
        my_date: new Date(2023, 9, 13),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/10/27zeballos?lang=spa",
        title: "Edificar una vida resistente al adversario",
        img: 'https://assets.churchofjesuschrist.org/acfc8a5c166f64f27fb0330a943b62f2710ced90.jpeg',
        speaker: "élder Jorge F. Zeballos"
    },
    {
        my_date: new Date(2023, 9, 27),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/10/27zeballos?lang=spa",
        title: "Edificar una vida resistente al adversario",
        img: 'https://assets.churchofjesuschrist.org/acfc8a5c166f64f27fb0330a943b62f2710ced90.jpeg',
        speaker: "élder Jorge F. Zeballos"
    },
    {
        my_date: new Date(2023, 10, 10),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/10/27zeballos?lang=spa",
        title: "Edificar una vida resistente al adversario",
        img: 'https://assets.churchofjesuschrist.org/acfc8a5c166f64f27fb0330a943b62f2710ced90.jpeg',
        speaker: "élder Jorge F. Zeballos"
    },
    {
        my_date: new Date(2023, 10, 24),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/10/27zeballos?lang=spa",
        title: "Edificar una vida resistente al adversario",
        img: 'https://assets.churchofjesuschrist.org/acfc8a5c166f64f27fb0330a943b62f2710ced90.jpeg',
        speaker: "élder Jorge F. Zeballos"
    },
    {
        my_date: new Date(2023, 11, 8),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/10/27zeballos?lang=spa",
        title: "Edificar una vida resistente al adversario",
        img: 'https://assets.churchofjesuschrist.org/acfc8a5c166f64f27fb0330a943b62f2710ced90.jpeg',
        speaker: "élder Jorge F. Zeballos"
    },
    {
        my_date: new Date(2023, 11, 22),
        link: "https://www.churchofjesuschrist.org/study/general-conference/2023/04/15cook?lang=eng",
        title: "Edificar una vida resistente al adversario",
        img: 'https://assets.churchofjesuschrist.org/25eb9fdb0382ec1d3b8eb6bf05dae99f61e4a89e.jpeg',
        speaker: "élder Quentin L. Cook"
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
        secondNode.textContent = title;
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
    currentSpeech.textContent = current.title;
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
