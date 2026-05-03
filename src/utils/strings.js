export const strings = {
  name: "Kashan Ahmad",
  title: "Software Engineer",
  summary:
    "Software Engineer with 6 years of experience developing flagship web apps for startups.",
  bio: [
    "Software Engineer combining startup experience (FinTech, Healthcare, EdTech) with 50+ freelance projects delivered. Expert in React/Next.js/TypeScript with full-stack capabilities, specialized in payment integrations, testing infrastructure, and rapid MVP development. Currently open to both full-time roles and contract projects.",
  ],
  isOpenToWork: true,
  openToWork: "Open to work",
  openToWorkIcon: "bx:bx-bolt-circle",
  yearsOfExperience: "Years of experience",
  yearsOfExperienceCount: 6,
  yearsOfExperienceIcon: "bx:bx-award",
  experiences: "Experiences",
  experiencesIcon: "bx:bxs-cloud-download",
  projects: "Work",
  projectsIcon: "bx:bxl-github",
  about: "About",
  blog: "Blog",
  resume: "Resume",
  contact: "Contact",
  contactLabel: "Get in touch",
  contactTagline:
    "My Mac stays on 24/7. I'll get back to you as soon as possible.",
  footerTitle: "<span class='fancy'>Contact</span> me",
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
  upworkIcon: "bx:bxl-upwork",
  upworkHandle: "thekayshawn",
  website: "https://kashanahmad.me",
  websiteIcon: "bx:bx-world",
  emailAddress: "k@kashanahmad.me",
  emailAddressIcon: "bx:bx-mail-send",
  address: "Islamabad, Pakistan",
  addressIcon: "bx:bx-map",
  phoneNumber: "+923025811158",
  phoneNumberDisplay: "+92 302 5811158",
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
    value: "I'm <span class='fancy'>Kashan</span>",
  },
  summary: {
    isHidden: false,
    value: strings.summary,
  },
  cta: {
    isHidden: false,
    value: strings.contactLabel,
  },
  image: {
    isHidden: true,
    value: "/hero.png",
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
