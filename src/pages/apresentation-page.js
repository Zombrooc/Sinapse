import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";

import apresentationPageBG from "../assets/images/apresentationPage.jpeg";

import {
  Container,
  ApresentationNav,
  MenuItem,
  FirstBlock,
} from "../styles/pages/apresentationPage.styles";

export default function ApresentationPage() {
  return (
    <Container>
      <Head>
        <title>Sinapse Concursos</title>
      </Head>

      {/* <Navbar hideContactInfo/> */}

      <ApresentationNav>
        {/* <MenuItem>
          {" "}
          <AiOutlineArrowLeft
            style={{ marginRight: "15px", fontSize: "20px", fontWeight: "700" }}
          />{" "}
          Voltar{" "}
        </MenuItem> */}
        <MenuItem>

          <div className="collapśe">
            <ul>
              <li> Edital 1</li>
              <li> Edital 2</li>
              <li> Edital 3</li>
              <li> Edital 4</li>

            </ul>
          </div>
          Edital
        </MenuItem>
        {/* <MenuItem> Apostilas </MenuItem>
        <MenuItem> Concursos </MenuItem> */}
      </ApresentationNav>
      <FirstBlock
        style={{ backgroundImage: `url(${apresentationPageBG})` }}
      ></FirstBlock>
    </Container>
  );
}
