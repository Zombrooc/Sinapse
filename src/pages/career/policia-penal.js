import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useTabs, TabPanel } from "react-headless-tabs";
import { BiBook } from "react-icons/bi";
import { GiPapers } from "react-icons/gi";
import { FaList } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import apresentationPageBGPenal from "../../assets/images/apresentationPagePenal.jpeg";

import {
  Container,
  AllTabs,
  TabIcon,
  TabContent,
} from "../../styles/pages/career/policia-penal.styles";

export default function PoliciaPenal() {
  const [selectedTab, setSelectedTab] = useTabs(
    ["editais", "apostilas", "provas"],
    "editais"
  );

  return (
    <Container style={{ backgroundImage: `url(${apresentationPageBGPenal})` }}>
      <Head>
        <title>Polícia Penal - Sinapse Concursos</title>
      </Head>

      <Navbar hideContactInfo />

      <Container style={{ position: "relative" }}>
        <AllTabs>
          <TabIcon onClick={() => setSelectedTab("editais")}>
            {" "}
            <FaList /> ‎Editais
          </TabIcon>
          <TabIcon onClick={() => setSelectedTab("apostilas")}>
            {" "}
            <BiBook /> ‎Apostilas
          </TabIcon>
          <TabIcon onClick={() => setSelectedTab("provas")}>
            {" "}
            <GiPapers /> ‎Provas
          </TabIcon>
        </AllTabs>
        <TabPanel hidden={selectedTab !== "editais"}>
          <TabContent>
            <div>
              {" "}
              <a href="/download-content/penal/editais/Edital_Penal_2014.pdf">
                Edital 2014
              </a>
            </div>
            <div>
              <a href="/download-content/penal/editais/Edital_Penal_2018.pdf">
                Edital 2018{" "}
              </a>
            </div>
          </TabContent>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "apostilas"}>
          <TabContent>
            <div> EM BREVE! </div>
          </TabContent>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "provas"}>
          <TabContent>
            {" "}
            <div>
              <a href="/download-content/penal/provas/prova_2014.pdf">
                Prova 2014{" "}
              </a>
            </div>{" "}
            <div>
              <a href="/download-content/penal/provas/gabarito_2014.pdf">
                Gabarito 2014{" "}
              </a>
            </div>
            <div>
              <a href="/download-content/penal/provas/prova_2018.pdf">
                Prova 2018{" "}
              </a>
            </div>{" "}
            <div>
              <a href="/download-content/penal/provas/gabarito_2018.pdf">
                Gabarito 2018{" "}
              </a>
            </div>
          </TabContent>
        </TabPanel>
      </Container>

      <Footer />
    </Container>
  );
}
