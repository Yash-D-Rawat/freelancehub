import { LuNotepadText } from "react-icons/lu";
import { GiStopwatch } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

export const paymentsData = [
  { month: 'Jan', amount: 2000 },
  { month: 'Feb', amount: 3000 },
  { month: 'Mar', amount: 4000 },
  { month: 'Apr', amount: 7000 },
  { month: 'May', amount: 5000 },
  { month: 'Jun', amount: 11000 },
  { month: 'Jul', amount: 3000 },
  { month: 'Aug', amount: 5500 },
  { month: 'Sep', amount: 10000 },
  { month: 'Oct', amount: 4000 },
  { month: 'Nov', amount: 12000 },
  { month: 'Dec', amount: 13000 },
];

export const proposalData = [
  { name: 'Accepted', value: 78, color: '#008000' },
  { name: 'Pending', value: 12, color: '#FFA500' },
  { name: 'Rejected', value: 10, color: '#000000' },
];

export const categoryData = [
  { name: 'Graphic Designing', value: 45, color: '#008000' },
  { name: 'Development', value: 30, color: '#000000' },
  { name: 'Content Writing', value: 25, color: '#FFA500' },
];

export const details = [
  {
    title: 'Total Earnings',
    num: '$15,230',
    icon: FaHandHoldingUsd,
    colour: '#089451'
  },
  {
    title: 'Ongoing Projects',
    num: '8',
    icon: GiStopwatch,
    colour: '#FFA500'
  },
  {
    title: 'Pending Proposals',
    num: '4',
    icon: LuNotepadText,
    colour: '#FFA500'
  },
  {
    title: 'Clients Added',
    num: '12',
    icon: FaPeopleGroup,
    colour: '#000000'
  }
]

export const clients = [
  {
    name: 'Soham',
    img:'/images/soham.jpeg'
  },
  {
    name: 'Shravani',
    img:'/images/shravani.jpeg'
  },
  {
    name: 'Jheel',
    img:'/images/jheel.jpeg'
  },
  {
    name: 'Juii',
    img:'/images/juii.jpeg'
  },
  {
    name: 'Mridula',
    img:'/images/mridula.jpeg'
  },
  
]