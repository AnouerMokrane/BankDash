import { NavLink } from "react-router-dom";
import { links } from "../constants/index";
import { useDashContext } from "@/context/DashContext";
const SideBar = () => {
  const { openSidebar, setOpenSidebar } = useDashContext();

  return (
    <div
      className={` max-[1024px]:-left-full max-[1024px]:absolute bg-white lg:block w-[230px] xl:w-[250px] h-full py-8 px-6 border-r z-50 ${
        openSidebar ? "max-[1024px]:left-0" : ""
      } duration-300`}
      onBlur={() => setOpenSidebar(false)}
    >
      <span className=""></span>
      <img src="./assets/Logo.svg" alt="bankdash" />
      <ul className="sidebar-links flex flex-col gap-6 mt-14">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                to={`${link.path}`}
                className="relative flex items-center gap-6 text-lg text-gray-text font-medium"
              >
                {link.icon}
                {link.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
