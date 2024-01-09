import {
  HiOutlineUserGroup,
  HiOutlineVideoCamera,
  HiOutlineMegaphone,
  HiOutlineCog,
} from "react-icons/hi2";

import { HiOutlineBookOpen, HiOutlineClipboardCheck, HiOutlineBell  } from "react-icons/hi";
import { GrTask } from "react-icons/gr";
import { TbChecklist } from "react-icons/tb";
import { FaPlusMinus } from "react-icons/fa6";
import { MdSwitchVideo } from "react-icons/md";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "students",
    label: "Окуучулар",
    path: "/",
    icon: <HiOutlineUserGroup />,
  },
  {
    key: "videos",
    label: "Видеолор",
    path: "/videos",
    icon: <HiOutlineVideoCamera   />,
  },
  {
    key: "articles",
    label: "Макала",
    path: "/articles",
    icon: <HiOutlineBookOpen  />,
  },
  {
    key: "events",
    label: "Иш-чара",
    path: "/events",
    icon: <HiOutlineClipboardCheck  />,
  },
  {
    key: "announcement",
    label: "Кулактандыруу",
    path: "/announcement",
    icon: <HiOutlineMegaphone   />,
  },
  {
    key: "jariya",
    label: "Жарыя",
    path: "/jariya",
    icon: <HiOutlineBell  />,
  },
  {
    key: "tasks",
    label: "Тапшырма",
    path: "/tasks",
    icon: <GrTask />,
  },
  {
    key: "ctl",
    label: "CTL",
    path: "/ctl",
    icon: <TbChecklist />,
  },
  {
    key: "dhikr",
    label: "Зикр",
    path: "/dhikr",
    icon: <FaPlusMinus />,
  },
  {
    key: "horizon",
    label: "Видео(Кругозор)",
    path: "/horizon",
    icon: <MdSwitchVideo />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Настройка",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
];
