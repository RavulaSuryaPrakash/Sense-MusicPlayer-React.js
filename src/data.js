import { v4 as uuidv4} from "uuid";

function chillhop(){
    return[
        {
            name:"Cascade",
            artist:"Knowmadic",
            cover:"https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
            color:["#025953","#5D7F7B"],
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13091",
            active : true,
        },
        {
            name:"Sodium",
            artist:"Philanthrope, Tesk",
            cover:"https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
            color:["#1B3F40","#4B77C0"],
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=1855",
            active : false,
        },
        {
            name:"Horse Bettinge",
            artist:"HM Surf",
            cover:"https://chillhop.com/wp-content/uploads/2020/05/be399329e137d6d507393565bacd8e9193c44b07-1024x1024.jpg",
            color:["#371B34","#853B4A"],
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=2962",
            active : false,
        },
        
        {
            name:"First Lights",
            artist:"Teskf",
            cover:"https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
            color:["#1B3F40","#4B77C0"],
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=1672",
            active : false,
        },
        {
            name:"Dirty shoelace",
            artist:"Philanthrope, mommy",
            cover:"https://chillhop.com/wp-content/uploads/2020/05/be399329e137d6d507393565bacd8e9193c44b07-1024x1024.jpg",
            color:["#371B34","#853B4A"],
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=2106",
            active : false,
        },
        {
            name:"Desire",
            artist:"Psalm Trees, Guillaume Muschalle",
            cover:"https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
            color:["#330E08","#9A5057"],
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10550",
            active : false,
        },
         {
            name:"Deja Vu",
            artist:"Blue Wednesday, Shopan",
            cover:"https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            color:["#3A4486","#93719C"],
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11228",
            active : false,
        },


    ];
        
};

export default chillhop;