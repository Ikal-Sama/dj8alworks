import { GrTechnology } from "react-icons/gr";
import { BiBrain } from "react-icons/bi";
import { BiChip } from "react-icons/bi";
import Img4 from "../images/services/img4.jpg";
import Img5 from "../images/services/img5.jpg";
import Img6 from "../images/services/img6.jpg";
import Img7 from "../images/services/img7.jpg";

const serviceData = [
  {
    id: 1,
    image: Img4,
    title: "Manage It Service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda a odit, eligendi accusamus ea tempora!",
    icon: <GrTechnology />,
  },
  {
    id: 2,
    image: Img5,
    title: "UI/UX Designing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda a odit, eligendi accusamus ea tempora!",
    icon: <BiBrain />,
  },
  {
    id: 3,
    image: Img6,
    title: "Experienced Team",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda a odit, eligendi accusamus ea tempora!",
    icon: <BiChip />,
  },
  {
    id: 4,
    image: Img7,
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda a odit, eligendi accusamus ea tempora!",
    icon: <BiChip />,
  },
];

export default serviceData;
