export const strings = {
  name: "Kashan Ahmad",
  title: "Frontend Software Engineer",
  summary:
    "A Frontend Software Engineer with over 5 years of experience in startups, agencies, freelancing, and teaching.",
  bio: [
    "Hey there! I've been creating user-friendly websites since 2018. I'm a software engineer from Pakistan who taught myself JavaScript, TypeScript, and PHP. I enjoy working on open-source projects and have completed several. I love exploring the capabilities of the web and am always up for learning new things.",
    "Recently, I did something pretty cool—I built a 3D spaceship that actually moves in the browser using React, GSAP, and Tailwind CSS. And get this, when you click a link, the ship hyperdrives to a whole new page. It's a fun way to make web browsing a bit more interesting!",
  ],
  isOpenToWork: true,
  openToWork: "Open to work",
  openToWorkIcon: "bx:bx-bolt-circle",
  yearsOfExperience: "Years of experience",
  yearsOfExperienceCount: 5,
  yearsOfExperienceIcon: "bx:bx-award",
  experiences: "Experiences",
  experiencesIcon: "bx:bxs-cloud-download",
  projects: "Projects",
  projectsIcon: "bx:bxl-github",
  about: "About",
  blog: "Blog",
  resume: "Resume",
  contact: "Contact",
  contactLabel: "Get in touch",
  contactTagline:
    "My Mac stays on 24/7. I'll get back to you as soon as possible.",
  footerTitle: "Creating web apps the proper way!",
  footerDescription:
    "I used Astro to put this site together and added a bit of an interstellar vibe. Styling is done with Tailwind, and it's running on Cloudflare. Oh, and all the text is in Bricolage Grotesque font for that extra touch.",
  contactIcon: "bx:bx-mail-send",
  twitterHandle: "thekayshawn",
  twitterIcon: "bx:bxl-twitter",
  githubUsername: "thekayshawn",
  githubIcon: "bx:bxl-github",
  linkedInUsername: "thekayshawn",
  linkedInIcon: "bx:bxl-linkedin",
  calendlyUsername: "thekayshawn",
  calendlyIcon: "bx:bx-calendar",
  website: "https://kashanahmad.me",
  websiteIcon: "bx:bx-world",
  emailAddress: "kashanahmad.me@gmail.com",
  emailAddressIcon: "bx:bx-mail-send",
  address: "Rahim Yar Khan, Pakistan",
  addressIcon: "bx:bx-map",
  phoneNumber: "+92 302 5811 158",
  phoneNumberIcon: "bx:bx-phone-call",
  ogImgAlt: "Kashan's Homepage",
};

export const heroStrings = {
  yearsOfExperience: {
    isHidden: true,
    icon: strings.yearsOfExperienceIcon,
    value: `${strings.yearsOfExperienceCount} years of experience`,
  },
  title: {
    isHidden: false,
    value: "Hi, I'm <span class='fancy'>Kashan</span> 🚀",
  },
  summary: {
    isHidden: false,
    value: `${strings.summary} Check out my projects below :)`,
  },
  cta: {
    isHidden: true,
    value: strings.contactLabel,
  },
  image: {
    isHidden: false,
    value: "assets/hero.png",
  },
};

export const footerStrings = {
  title: {
    isHidden: false,
    value: strings.footerTitle,
  },
  description: {
    isHidden: false,
    value: strings.footerDescription,
  },
  cta: {
    isHidden: false,
    value: strings.contactLabel,
  },
};
