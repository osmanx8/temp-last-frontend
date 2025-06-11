import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { KingCardData, LiveFeedCardData } from "@/utils/types";
import Step1 from "@/../public/assets/images/step1.webp"
import Step2 from "@/../public/assets/images/step2.webp"
import Step3 from "@/../public/assets/images/step3.webp"
import King1 from "@/../public/assets/images/king1.webp"
import King2 from "@/../public/assets/images/king2.webp"
import King3 from "@/../public/assets/images/king3.webp"

export const InviteLink = process.env.NEXT_PUBLIC_INVITE_URL
export const AdminWallet = process.env.NEXT_PUBLIC_ADMIN_WALLET


export const SocialLinks = [
  { name: "FaTwitter", icon: <FaTwitter />, url: "https://twitter.com/TokeCommunity" },
  { name: "FaTelegramPlane", icon: <FaTelegramPlane />, url: "https://t.me/tokecommunity" },
]

export const HowToPlayData = [
  { id: 1, title: "connect wallet", text: "Link your solana wallet to participate in the game.", img: Step1 },
  { id: 2, title: "Send Sol", text: "Send between 0.1 to 1.5 SOL to reset the timer.", img: Step2 },
  { id: 3, title: "Win Jackpot", text: "Be the last sender when the timer hit zero to win.", img: Step3 }
]

export const FAQData = [
  { id: 1, title: "How does the game work?", text: "Yes! All transactions are on-chain and verifiable. The timer logic is implemented in our smart contract which is publicly auditable." },
  { id: 2, title: "What is the Min/Max send amount?", text: "Yes! All transactions are on-chain and verifiable. The timer logic is implemented in our smart contract which is publicly auditable." },
  { id: 3, title: "How is the timing calculated?", text: "Yes! All transactions are on-chain and verifiable. The timer logic is implemented in our smart contract which is publicly auditable." },
  { id: 4, title: "How are winners paid?", text: "Yes! All transactions are on-chain and verifiable. The timer logic is implemented in our smart contract which is publicly auditable." },
  { id: 5, title: "Is the game provably Fair?", text: "Yes! All transactions are on-chain and verifiable. The timer logic is implemented in our smart contract which is publicly auditable." },
]

export const FooterLinks = [
  {
    title: "game",
    links: [
      { text: "How to Play", link: "#howtowork" },
      { text: "Leaderboard", link: "#leaderboard" },
      { text: "Live Feed", link: "#livefeed" },
    ]
  },
  {
    title: "resources",
    links: [
      { text: "FAQ", link: "#howtowork" },
      { text: "Smart Contact", link: "#smart contract" },
      { text: "Audit", link: "#Audit" },
    ]
  },
  {
    title: "legal",
    links: [
      { text: "Terms", link: "#trems" },
      { text: "Privacy", link: "#privacy" },
      { text: "Risk Disclosure", link: "#disclosure" },
    ]
  }
]

export const kingCardTestData: KingCardData[] = [
  {
    address: "2xu7daaRxBgrD2aSgkqF3JChvKRd4mX8jvn2hpBwghvW",
    reward: 45.64,
    image: King1,
  },
  {
    address: "8BCNHQyDp7mwnCD5hg1U3qfAiZPyqK7JXA4v5hfYFHhH",
    reward: 30.12,
    image: King2,
  },
  {
    address: "9PWY4PVsUi2F9HR2ncKWYEY5jvTeq3h99MnRXfL5eiib",
    reward: 20.05,
    image: King3,
  },
];

export const liveFeedTestData: LiveFeedCardData[] = [
  {
    time: "12:45:23",
    address: "Df58...7Gk2",
    amount: "2.3 SOL",
  },
  {
    time: "12:46:01",
    address: "A1c9...Xt5B",
    amount: "1.7 SOL",
  },
  {
    time: "12:46:45",
    address: "Ff34...Wq88",
    amount: "3.2 SOL",
  },
  {
    time: "12:45:23",
    address: "Df58...7Gk2",
    amount: "2.3 SOL",
  },
  {
    time: "12:46:01",
    address: "A1c9...Xt5B",
    amount: "1.7 SOL",
  },
  {
    time: "12:46:45",
    address: "Ff34...Wq88",
    amount: "3.2 SOL",
  },
  {
    time: "12:45:23",
    address: "Df58...7Gk2",
    amount: "2.3 SOL",
  },
  {
    time: "12:46:01",
    address: "A1c9...Xt5B",
    amount: "1.7 SOL",
  },
  {
    time: "12:46:45",
    address: "Ff34...Wq88",
    amount: "3.2 SOL",
  },
  {
    time: "12:45:23",
    address: "Df58...7Gk2",
    amount: "2.3 SOL",
  },
  {
    time: "12:46:01",
    address: "A1c9...Xt5B",
    amount: "1.7 SOL",
  },
  {
    time: "12:46:45",
    address: "Ff34...Wq88",
    amount: "3.2 SOL",
  },
];
