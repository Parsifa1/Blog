import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
    website: "https://parsifa1.github.io", // replace this with your deployed domain
    author: "Parsifal",
    desc: "Parsifa1's Blog",
    title: "Parsifal's Blog",
    ogImage: "astropaper-og.jpg",
    lightAndDarkMode: true,
    postPerPage: 3,
};

export const LOCALE = {
    lang: "zh-CN", // html lang code. Set this empty and default will be "en"
    langTag: ["zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
    enable: false,
    svg: true,
    width: 50,
    height: 50,
};
export const SOCIALS: SocialObjects = [
    {
        name: "Github",
        href: "https://github.com/Parsifa1",
        linkTitle: ` ${SITE.title} on Github`,
        active: true,
    },
    {
        name: "Mail",
        href: "li.aldric@gmail.com",
        linkTitle: `Send an email to ${SITE.title}`,
        active: false,
    },
    {
        name: "Twitter",
        href: "https://twitter.com/Aldric_li",
        linkTitle: `${SITE.title} on Twitter`,
        active: true,
    },
    {
        name: "Steam",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Steam`,
        active: false,
    },
    {
        name: "Telegram",
        href: "https://t.me/aldric_li",
        linkTitle: `${SITE.title} on Telegram`,
        active: true,
    }
];
