import {
  ArrowLeftRight,
  Briefcase,
  CreditCard,
  DollarSign,
  Home,
  Settings,
  UserRound,
  WalletCards,
} from "lucide-react";

export const links = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icon: <Home width={25} height={25} />,
  },
  {
    id: 2,
    title: "Transactions",
    path: "transactions",
    icon: <ArrowLeftRight />,
  },
  {
    id: 3,
    title: "Account",
    path: "account",
    icon: <UserRound />,
  },
  {
    id: 4,
    title: "Investments",
    path: "Investments",
    icon: <DollarSign />,
  },
  {
    id: 5,
    title: "Credit Cards",
    path: "credit-cards",
    icon: <CreditCard />,
  },
  {
    id: 6,
    title: "Loans",
    path: "loans",
    icon: <WalletCards />,
  },
  {
    id: 7,
    title: "Services",
    path: "services",
    icon: <Briefcase />,
  },
  {
    id: 8,
    title: "Settings",
    path: "Settings",
    icon: <Settings />,
  },
];

export const transactions = [
  {
    description: "Spotify Subscription",
    id: 123456998,
    category: "Shopping",
    maskedCardNumber: "1234****",
    date: new Date("2024-01-28T00:30:00"),
    amount: -2.5,
  },
  {
    description: "Freepik Sales",
    id: 987654321,
    category: "Transfer",
    maskedCardNumber: "5555****",
    date: new Date("2024-02-06T11:15:00"),
    amount: +750,
  },
  {
    description: "Mobile Service",
    id: 234567890,
    category: "Service",
    maskedCardNumber: "3789****",
    date: new Date("2024-01-20T18:00:00"),
    amount: -150.0,
  },
  {
    description: "Wilson",
    id: 876543219,
    category: "Transfer",
    maskedCardNumber: "4111****",
    date: new Date("2024-02-05T14:00:00"),
    amount: -1050,
  },
  {
    description: "Emily",
    id: 543219876,
    category: "Transfer",
    maskedCardNumber: "2222****",
    date: new Date("2024-02-02T20:30:00"),
    amount: +840,
  },
];

export const trendingStockData = [
  {
    id: 1,
    name: "Trivago",
    price: 520,
    return: 5,
  },
  {
    id: 2,
    name: "Canon",
    price: 480,
    return: 10,
  },
  {
    id: 3,
    name: "Uber Food",
    price: 350,
    return: -3,
  },
  {
    id: 4,
    name: "Nokia",
    price: 940,
    return: 2,
  },
  {
    id: 5,
    name: "Tiktok",
    price: 670,
    return: -12,
  },
];

export const activeLoansData = [
  {
    id: 1,
    "loans-money": 1000000,
    "left-to-repay": 45500,
    duration: 8,
    "interest-rate": 12,
    installment: 2000,
  },
  {
    id: 2,
    "loans-money": 800000,
    "left-to-repay": 30000,
    duration: 6,
    "interest-rate": 10,
    installment: 1500,
  },
  {
    id: 3,
    "loans-money": 1200000,
    "left-to-repay": 75000,
    duration: 12,
    "interest-rate": 14,
    installment: 2500,
  },
  {
    id: 4,
    "loans-money": 500000,
    "left-to-repay": 20000,
    duration: 4,
    "interest-rate": 8,
    installment: 1250,
  },
  {
    id: 5,
    "loans-money": 1500000,
    "left-to-repay": 90000,
    duration: 10,
    "interest-rate": 15,
    installment: 1800,
  },
  {
    id: 6,
    "loans-money": 700000,
    "left-to-repay": 35000,
    duration: 5,
    "interest-rate": 9,
    installment: 1400,
  },
  {
    id: 7,
    "loans-money": 2000000,
    "left-to-repay": 100000,
    duration: 15,
    "interest-rate": 18,
    installment: 3000,
  },
  {
    id: 8,
    "loans-money": 900000,
    "left-to-repay": 40000,
    duration: 7,
    "interest-rate": 11,
    installment: 1700,
  },
];
