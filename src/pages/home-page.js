import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

import brazillianSoldiers from "../assets/images/brazillian_soldiers.png";

import {
  Container,
  GridContainer,
  FirstBlock,
  Column,
} from "../styles/pages/home.styles";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Sinapse Concursos</title>
      </Head>
      <Navbar />

      <GridContainer style={{ backgroundImage: `url(${brazillianSoldiers})` }}>
        <Column style={{ flexDirection: "column" }}>
          <div className="left-container">
            <p>
              Seja aprovado para a<br />
              <strong>
                <em>Polícia Penal - MG</em>
              </strong>
              <br />e ganhe{" "}
              <span className="highlight">
                <strong>
                  <em>R$4.300,00</em>
                </strong>
              </span>
              p/ mês
            </p>
            <p>
              <strong>
                Estudar para um concurso
                <br />
                nunca foi tão fácil !!!
              </strong>
            </p>
          </div>
        </Column>
        <Column>
          <div className="right-container">
            <p> <strong>Inicie sua jornada com a Sinapse </strong></p>

            <hr/>

            <div className="formGroup">
              <label> Nome </label>
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div className="formGroup">
              <label> E-mail </label>
              <input
                type="text"
                name="email"
                placeholder="Digite seu E-mail"
                required
              />
            </div>
            <div className="formGroup">
              <label> WhatsApp </label>
              <input
                type="text"
                name="whatsapp"
                placeholder="Digite seu WhatsApp"
                required
              />
            </div>
            <div className="formGroup">
              <label> Concurso dos Sonhos </label>
              <select name="dreamCarrier" placeholder="Digite seu WhatsApp">
                <option selected disabled value="selectACarrier">
                  {" "}
                  Selecione a carreira dos seus sonhos{" "}
                </option>
                <option value="PF"> Polícia Federal </option>
                <option value="PM"> Polícia Militar </option>
                <option value="PC"> Polícia Civíl </option>
                <option value="CB"> Corpo de Bombeiro </option>
                <option value="CB"> Polícia Penal </option>
              </select>{" "}
            </div>
            <div className="formGroup">
              <input type="submit" value="QUERO PASSAR!"/>
            </div>
          </div>
        </Column>
      </GridContainer>

      <FirstBlock></FirstBlock>
    </Container>
  );
}
