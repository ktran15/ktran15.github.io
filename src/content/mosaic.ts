export type MosaicPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type MosaicTile = {
  id: string;
  title: string;
  body: string;
  photos: MosaicPhoto[];
};

export const mosaicTiles: MosaicTile[] = [
  {
    id: "roots",
    title: "Roots",
    photos: [
      {
        src: "/images/roots.jpg",
        alt: "Keith's mom and her family standing outside a home in Vietnam",
        caption: "My mom (in the center)",
      },
    ],
    body: `This is my mom (in the center) and her family back in Vietnam, long before any of us ever set foot in America. They didn't have much, but they had each other and a hope that there was something better out there for the next generation. Coming to America meant leaving behind their home, their language, and almost everything they knew, and starting over from scratch. I think about that a lot. The long hours my parents spent working in a nail salon, the years of putting themselves last, the countless sacrifices I'll probably never even know about; all of it paved the way for me to be where I am today. I didn't understand it as a kid, but I do now, and I try to live in a way that makes it all worth it.`,
  },
  {
    id: "rowdy-kid",
    title: "A Rowdy Kid",
    photos: [
      {
        src: "/images/excitingKid.jpg",
        alt: "Young Keith yelling while standing on pumpkins at a pumpkin patch",
        caption: "Pumpkin patch menace",
      },
      {
        src: "/images/happyKid.jpg",
        alt: "Young Keith smiling in a classroom with spiked hair and a name tag",
        caption: "1st day of Kindergarten",
      },
    ],
    body: `I was a rowdy kid, plain and simple. If there was something to climb, I was climbing it, and if there was a quiet moment, I was probably the one ruining it. My parents definitely had their hands full with me. I had a really fun childhood, and I owe a lot of that to the people around me who let me be loud, curious, and a little reckless. Nothing was too tall to climb and no room was too quiet to shout in. Somewhere along the way, a lot of people lose that spark, but I don't want to. Whether it's a new project, a hard class, or a new job, I want to keep that same excitement I had as a kid and bring it into everything I do.`,
  },
  {
    id: "family",
    title: "Family Comes First",
    photos: [
      {
        src: "/images/familycomesfirstpt2.jpg",
        alt: "Keith with a group of family members outside at night",
        caption: "Cousins and aunt in California",
      },
      {
        src: "/images/familyisimportant.jpg",
        alt: "Keith standing with family members indoors",
        caption: "My family: mom, dad, and brother",
      },
    ],
    body: `Family has always meant everything to me. They're the ones who have been there for every win, every rough patch, and every moment in between. Some of my favorite memories with them are the simple ones, like going out to eat, catching up, and laughing at the same old stories we've told a hundred times. No matter how busy school gets or how far away I am, I always make time to come home, and I always leave feeling a little more like myself. At the end of the day, everything I work toward is for them just as much as it is for me.`,
  },
  {
    id: "giving-back",
    title: "Giving Back",
    photos: [
      {
        src: "/images/ilovegivingback.jpg",
        alt: "Keith helping a table of elementary students with a science activity",
        caption: "Teaching the next generation",
      },
      {
        src: "/images/givingbackpt2.jpg",
        alt: "Signed photo frame of a student volunteer group from Henderson County Public Schools",
        caption: "Being a part of something bigger",
      },
    ],
    body: `I've always loved giving back to the community that raised me. Growing up, I was involved in SGA, Young Scientist, Key Club, and our community garden, and I tried to show up for just about anything that helped someone out. Some of my favorite moments, though, were spent in classrooms with younger kids, helping them through a science experiment or answering whatever random questions they threw at me. There's something special about seeing a kid's face light up when something finally clicks. I've been lucky to have teachers, mentors, and older friends pour into me over the years and give me advice when I needed it most, so I try to do the same for the next generation whenever I can.`,
  },
  {
    id: "try-new-things",
    title: "Just Trying to Have Fun",
    photos: [
      {
        src: "/images/ilovetohavefun.jpg",
        alt: "Keith and a friend flexing next to a Hulk statue",
        caption: "3 Hulks",
      },
      {
        src: "/images/trynewTHingsLearn.jpg",
        alt: "Keith and a friend on the slopes at sunset at Beech Mountain",
        caption: "Sunset snowboarding at Beech Mountain, NC",
      },
    ],
    body: `I love to have fun, and most of that comes from my friends. Whether it's a late-night food run or some last-minute plan, I'm usually the one asking, "Why not?" I'm always looking for new experiences, and I'm not afraid to be bad at something. In fact, I kind of love it. Snowboarding, piano, a sport I've never played; it doesn't matter, I'll be the first one to sign up and probably the first one to fall. Being a beginner is a privilege. It means there's still so much left to learn, and I'd rather be bad at a hundred things than never try them at all.`,
  },
  {
    id: "computers",
    title: "Always Loved Computers",
    photos: [
      {
        src: "/images/alwayslovedcomputers.jpg",
        alt: "Young Keith reading instructions next to an open computer case on a kitchen counter",
        caption: "Building my first PC during COVID",
      },
    ],
    body: `I've loved computers for as long as I can remember, but COVID is when it really took off. Stuck at home with nothing but time, I decided to build my own computer, and pretty soon a bunch of my friends did the same. We'd hop on every night to play video games together, and during the day those same computers were how we went to online school. Looking back, that one build changed a lot for me. Reading the manual cover to cover, putting every part in by hand, and figuring out what each piece actually did made me want to understand how everything works on the inside. I fell in love with technology, and that curiosity is a big part of why I chose Computer Engineering. It hasn't gone anywhere since.`,
  },
  {
    id: "new-beginnings",
    title: "New Beginnings",
    photos: [
      {
        src: "/images/GraduationSpeaking.jpg",
        alt: "Keith in a cap and gown speaking at a podium during graduation",
        caption: "Speaking at my Blue Ridge graduation",
      },
      {
        src: "/images/NewBeginningsGT.jpg",
        alt: "Keith and friends sitting on the GT letters outside a Georgia Tech building",
        caption: "New home, new friends",
      },
    ],
    body: `Leaving Hendersonville was bittersweet. North Carolina is home; it's where my roots are, and saying goodbye to the people and places I grew up with was harder than I expected. Standing up and speaking at graduation felt like closing a chapter I'll never forget. Coming to Georgia Tech has been a whole new challenge, though. The rigor is real, and some weeks it feels like I'm drinking from a firehose, but I wouldn't trade it for anything. I've learned more here in a short time than I ever thought I could, I've made so many friends who push me to be better, and every single day I'm challenged in a way that makes me grow. I'm still the same kid from North Carolina, just a little more ready for what's next.`,
  },
];
