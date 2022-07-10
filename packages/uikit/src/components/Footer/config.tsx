import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.kryoswap.com/contact-us",
      },
      {
        label: "Blog",
        href: "https://kryoswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.kryoswap.com/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.kryoswap.com/tokenomics/cake",
      },
      {
        label: "—",
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
    href: "https://twitter.com/kryoswap",
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
    href: "https://reddit.com/r/kryoswap",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/kryoswap_official",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/cryowebtoken/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/kryoswap",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://kryoswap.medium.com/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
