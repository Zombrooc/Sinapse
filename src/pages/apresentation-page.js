import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from 'next/link';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { GiPapers } from "react-icons/gi";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

import "react-pro-sidebar/dist/css/styles.css";

import apresentationPageBG from "../assets/images/apresentationPage.jpeg";

// import apresentationPageBG from "../assets/images/apresentationPageCivil.jpeg";

// import apresentationPageBG from "../assets/images/apresentationPagePF.jpeg";

import {
  Container,
  FirstBlock,
} from "../styles/pages/apresentationPage.styles";

export default function ApresentationPage() {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <Container style={{ backgroundImage: `url(${apresentationPageBG})` }}>
      <Head>
        <title>Sinapse Concursos</title>
      </Head>
      {/* <Navbar hideContactInfo/> */}
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem active={true} icon={<FiHome />}>
                <Link href="/">
                  <a>
                    <span style={{ color: "var(--color-light)" }}>Voltar</span>
                  </a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FaList />}>Edital</MenuItem>
              <MenuItem icon={<BiBook />}>Apostilas</MenuItem>
              <MenuItem icon={<GiPapers />}>Últimas provas</MenuItem>
            </Menu>
          </SidebarContent>
          {/* <SidebarFooter>
            <Menu iconShape="circle">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebar>
      </div>
    </Container>
  );
}
