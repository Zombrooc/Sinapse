import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { GiPapers } from "react-icons/gi";
import { FaList } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import {
  ProSidebar,
  Menu,
  SubMenu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";

import apresentationPageBGPenal from "../assets/images/apresentationPagePenal.jpeg";

// import apresentationPageBG from "../assets/images/apresentationPageCivil.jpeg";

// import apresentationPageBG from "../assets/images/apresentationPagePF.jpeg";

// import edital2014 from "../assets/download-content/penal/editais/Edital_Penal_2014.pdf";
// import edital2018 from "../assets/download-content/penal/editais/Edital_Penal_2018.pdf";
// import prova2014 from "../assets/download-content/penal/prova/prova_2014.pdf";
// import prova2018 from "../assets/download-content/penal/prova/prova_2018.pdf";
// import gabarito2014 from "../assets/download-content/penal/prova/gabarito_2014.pdf";
// import gabarito2018 from "../assets/download-content/penal/prova/gabarito_2018.pdf";

import {
  Container,
  FirstBlock,
} from "../styles/pages/apresentationPage.styles";

// function PoliciaPenalEditais() {
//   console.log("editais");
//   return (
//     <Container
//       style={{ backgroundImage: `url(${apresentationPageBGPenal})` }}
//     ></Container>
//   );
// }

// function PoliciaPenalApostilas() {
//   console.log("apostilas");
//   return (
//     <Container
//       style={{ backgroundImage: `url(${apresentationPageBGPenal})` }}
//     ></Container>
//   );
// }

// function PoliciaPenalProvas() {
//   console.log("provas");
//   return (
//     <Container
//       style={{ backgroundImage: `url(${apresentationPageBGPenal})` }}
//     ></Container>
//   );
// }

export default function ApresentationPage() {
  const [menuCollapse, setMenuCollapse] = useState(false);
  // const [currentContent, setCurrentContent] = useState(undefined);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  // const currentContentClick = (currentContentClick) => {
  //   setCurrentContent(currentContentClick);
  // };

  return (
    <Container >
      <Head>
        <title>Sinapse Concursos</title>
      </Head>
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
                  <a> Voltar </a>
                </Link>
              </MenuItem>
              <SubMenu title="Policia Penal">
                <SubMenu title="Editais" icon={<FaList />}>
                  <MenuItem>
                    {" "}
                    <a href="/download-content/penal/editais/Edital_Penal_2014.pdf">
                      Edital 2014{" "}
                    </a>
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <a href="/download-content/penal/editais/Edital_Penal_2018.pdf">
                      Edital 2018{" "}
                    </a>
                  </MenuItem>
                </SubMenu>
                {/* <MenuItem >
                  
                    {" "}
                    <FaList /> Editais
                </MenuItem> */}
                <MenuItem>
                  {" "}
                  {/* <BiBook />  */}
                  Apostilas
                </MenuItem>
                {/* <MenuItem>
                   Últimas provas
                </MenuItem> */}
                <SubMenu title="Últimas Provas" icon={<GiPapers />}>
                  <SubMenu title="Prova 2014" icon={<GiPapers />}>
                    <MenuItem>
                      {" "}
                      <a href="/download-content/penal/provas/prova_2014.pdf">
                        Prova 2014{" "}
                      </a>
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <a href="/download-content/penal/provas/gabarito_2014.pdf">
                        Gabarito 2014{" "}
                      </a>
                    </MenuItem>
                  </SubMenu>
                  <SubMenu title="Prova 2018" icon={<GiPapers />}>
                    <MenuItem>
                      {" "}
                      <a href="/download-content/penal/provas/prova_2018.pdf">
                        Prova 2018{" "}
                      </a>
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <a href="/download-content/penal/provas/gabarito_2018.pdf">
                        Gabarito 2018{" "}
                      </a>
                    </MenuItem>
                  </SubMenu>
                </SubMenu>
              </SubMenu>
              {/* <SubMenu title="Policia Federal">
                <MenuItem>
                  
                    {" "}
                    <FaList /> Editais
                </MenuItem>
                <MenuItem>
                  
                    {" "}
                    <BiBook /> Apostilas
                </MenuItem>
                <MenuItem>
                  
                    <GiPapers /> Últimas provas
                </MenuItem>
              </SubMenu>
              <SubMenu title="Policia Militar">
                <MenuItem>
                  
                    {" "}
                    <FaList /> Editais
                </MenuItem>
                <MenuItem>
                  
                    {" "}
                    <BiBook /> Apostilas
                </MenuItem>
                <MenuItem>
                  
                    <GiPapers /> Últimas provas
                </MenuItem>
              </SubMenu>
              <SubMenu title="Policia Civíl">
                <MenuItem>
                  
                    {" "}
                    <FaList /> Editais
                </MenuItem>
                <MenuItem>
                  
                    {" "}
                    <BiBook /> Apostilas
                </MenuItem>
                <MenuItem>
                  
                    <GiPapers /> Últimas provas
                </MenuItem>
              </SubMenu> */}
            </Menu>
          </SidebarContent>
          {/* <SidebarFooter>
            <Menu iconShape="circle">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebar>
      </div>
      {/* {currentContent === "apostilas-penal" ? (
        <PoliciaPenalApostilas />
      ) : currentContent === "editais-penal" ? (
        <PoliciaPenalEditais />
      ) : currentContent === "provas-penal" ? (
        <PoliciaPenalProvas />
      ) : undefined} */}
    </Container>
  );
}
