/*
  SITE CONTENT — edit this file to update the website.
  ---------------------------------------------------
  - Text goes inside quotes. Keep the commas between items.
  - Leave a value as "" (empty) if you don't have it yet; the site will
    show a "coming soon" note or simply hide that line.
  - Images go in assets/img/ — then put the path here, e.g. "assets/img/ato.jpg".
*/

window.IIFC = {
  council: {
    name: "Independent Interfraternity Council",
    shortName: "IIFC",
    school: "University of Nevada, Reno",
    email: "nevadaiifcpresident@gmail.com",
    phone: "(775) 351-8852",
    instagram: "",   // e.g. "https://instagram.com/unr_iifc"
    // Link to an anonymous Google Form for concerns (Parents page). Leave "" to hide the button.
    complaintFormUrl: ""
  },

  // One entry per chapter. "id" is used in links, so keep it short with no spaces.
  chapters: [
    {
      id: "ato",
      name: "Alpha Tau Omega",
      letters: "ΑΤΩ",
      founded: "Founded in 1865 in Richmond, Virginia",
      blurb: "",       // 1–2 sentences about the UNR chapter
      instagram: "https://www.instagram.com/ato_nevada/",
      website: "https://www.ato.org",
      photo: "",
      // Shown on the Parents page. Leave blank until the chapter president agrees to list it.
      president: { name: "Nick Bohlander", email: "", phone: "(702) 815-6628" }
    },
    {
      id: "theta-chi",
      name: "Theta Chi",
      letters: "ΘΧ",
      founded: "Founded in 1856 at Norwich University",
      blurb: "",
      instagram: "https://www.instagram.com/thetachinevada/",
      website: "https://www.thetachi.org",
      photo: "",
      // Shown on the Parents page. Leave blank until the chapter president agrees to list it.
      president: { name: "Gio Luchessi", email: "", phone: "(702) 228-6887" }
    },
    {
      id: "lambda-chi",
      name: "Lambda Chi Alpha",
      letters: "ΛΧΑ",
      founded: "Founded in 1909 at Boston University",
      blurb: "",
      instagram: "https://www.instagram.com/lambdachinevada/",
      website: "https://www.lambdachi.org",
      photo: "",
      // Shown on the Parents page. Leave blank until the chapter president agrees to list it.
      president: { name: "Lance Zuniga", email: "", phone: "(775) 636-1638" }
    },
    {
      id: "kappa-alpha",
      name: "Kappa Alpha Order",
      letters: "ΚΑ",
      founded: "Founded in 1865 at Washington College",
      blurb: "",
      instagram: "https://www.instagram.com/kappaalphanevada/",
      website: "https://www.kappaalphaorder.org",
      photo: "",
      // Shown on the Parents page. Leave blank until the chapter president agrees to list it.
      president: { name: "Jacob Rivers", email: "", phone: "(775) 287-2417" }
    },
    {
      id: "zeta-psi",
      name: "Zeta Psi",
      letters: "ΖΨ",
      founded: "Founded in 1847 at New York University",
      blurb: "",
      instagram: "https://www.instagram.com/zetapsinevada/",
      website: "https://www.zetapsi.org",
      photo: "",
      // Shown on the Parents page. Leave blank until the chapter president agrees to list it.
      president: { name: "Henry Lawson", email: "", phone: "(775) 546-3105" }
    },
    {
      id: "pi-kapp",
      name: "Pi Kappa Phi",
      letters: "ΠΚΦ",
      founded: "Founded in 1904 at the College of Charleston",
      blurb: "",
      instagram: "https://www.instagram.com/pikappreno/",
      website: "https://www.pikapp.org",
      photo: "",
      // Shown on the Parents page. Leave blank until the chapter president agrees to list it.
      president: { name: "Cruz Ramirez", email: "", phone: "(702) 902-7744" }
    }
  ],

  // Executive board. Leave "name" empty for positions not yet filled in.
  officers: [
    { name: "Ethan McNamara", role: "President", email: "", photo: "assets/img/officers/ethan-mcnamara.jpg" },
    { name: "Lance Zuniga", role: "Vice President of Judicial Affairs", email: "", photo: "" },
    { name: "Henry Owens", role: "Vice President of Recruitment", email: "", photo: "assets/img/officers/henry-owens.jpg" },
    { name: "Andy Sanchez", role: "Vice President of Finance", email: "", photo: "assets/img/officers/andy-sanchez.jpg" },
    { name: "Andrew Cicerone", role: "Vice President of Scholarship", email: "", photo: "" },
    { name: "Cole Riley", role: "Vice President of Member Development", email: "", photo: "assets/img/officers/cole-riley.jpg" },
    { name: "Luke Calderon", role: "Vice President of Community Relations", email: "", photo: "" },
    { name: "Lucas Premier", role: "Vice President of Administration", email: "", photo: "assets/img/officers/lucas-premier.jpg" },
    { name: "Mathew Dufer", role: "Vice President of Member Wellness", email: "", photo: "assets/img/officers/mathew-dufer.jpg" },
    { name: "Tristan Wyatt", role: "Special Events", email: "", photo: "" }
  ],

  recruitment: {
    season: "",           // e.g. "Spring 2027 recruitment runs January 20–27"
    interestFormUrl: "",  // link to a Google Form or similar
    requirements: [],     // e.g. ["Full-time UNR student", "Minimum 2.5 GPA"]
    steps: [
      { title: "Fill out the interest form", text: "Tell us who you are so chapters know to look out for you." },
      { title: "Meet the chapters", text: "Come to recruitment events, tour the houses, and talk with members." },
      { title: "Receive bids", text: "Chapters that think you're a good fit invite you to join." },
      { title: "Accept a bid", text: "Pick the chapter that feels like home and start the new member process." }
    ]
  },

  // Documents on the Resources page. Put PDFs in assets/docs/.
  // "section" is "governing" or "scholarships" and decides which list it appears in.
  resources: [
    {
      section: "governing",
      title: "Constitution",
      description: "Our mission and purpose, who can join the council, and how the general body, executive board, and judicial committee work.",
      file: "assets/docs/iifc-constitution.pdf",
      pages: 10
    },
    {
      section: "governing",
      title: "Bylaws",
      description: "Officer duties, finances and dues, the code of conduct, the judicial process, and our expansion and recruitment policies.",
      file: "assets/docs/iifc-bylaws.pdf",
      pages: 18
    },
    {
      section: "scholarships",
      title: "Scholarship Guide",
      description: "National scholarships offered by each of our six chapters' fraternities, with award amounts, eligibility, and links to apply.",
      file: "assets/docs/iifc-scholarship-guide.pdf",
      pages: 7
    }
  ],

  // Dates use the format "YYYY-MM-DD". Past events hide automatically.
  events: [
    // { date: "2026-11-12", title: "Council meeting", time: "7:00 pm", location: "Joe Crowley Student Union", description: "" }
  ]
};
