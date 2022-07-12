import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://t.me/cryowebtoken",
      },
      {
        label: "Community",
        href: "https://t.me/cryowebtoken",
      },
      {
        label: "Online Store",
        href: "https://kryoswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.kryoswap.com/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.kryoswap.com/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.kryoswap.com/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/cryowebtoken",
      },
      {
        label: "Documentation",
        href: "https://docs.kryoswap.com",
      },
      {
        label: "Audits",
        href: "https://docs.kryoswap.com/audit",
      },
      {
        label: "Careers",
        href: "https://docs.kryoswap.com/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/CryoWebOfficial",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/cryowebtoken",
      },
      {
        label: "Announcements",
        href: "https://t.me/KryoSwapAnn",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://www.reddit.com/r/CryoWebToken/",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/cryogenofficial/",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/cryowebtoken/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
