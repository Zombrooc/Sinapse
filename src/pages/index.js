import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";

import Navbar from "../components/Navbar";

import brazillianSoldiers from "../assets/images/brazillian_soldiers.png";
import soldier from "../assets/images/soldierPNG.png";

import { Container, GridContainer, Column } from "../styles/pages/home.styles";
import SuccessMessage from "../components/SuccessMessage";

export default function Home() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    dreamCareer: "defaultCarrer",
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleInput = (event) => {
    const target = event.target.name;

    setInputData({
      ...inputData,
      [target]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setShowMessage(true);
    setInputData({
      name: "",
      email: "",
      whatsapp: "",
      dreamCareer: "defaultCarrer",
    });

    const response = await axios.post(
      "https://formcarry.com/s/2v8SfOenpeD",
      inputData
    );

    if (response.status === 200) {
      setTimeout(() => {
        setShowMessage(false);
      }, 6000);
    }
  };

  return (
    <Container>
      <Head>
        <title>Sinapse Concursos</title>
      </Head>
      <Navbar />

      <SuccessMessage show={showMessage} />

      <GridContainer style={{ backgroundImage: `url(${brazillianSoldiers})` }}>
        <Column style={{ flexDirection: "column" }} className="height-100vh">
          <div className="left-container">
            <p>
              Seja aprovado para a<br />
              <strong>
                <em>Polícia Penal - MG</em>
              </strong>
              <br />e ganhe{" "}
              <span className="highlight">
                <strong>
                  <em>R$4.632,00</em>
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
        <Column className="height-100vh" style={{ alignItems: "flex-end" }}>
          <div className="right-container">
            <p>
              {" "}
              <strong>Inicie sua jornada com a Sinapse </strong>
            </p>

            <hr />
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <label> Nome </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  onChange={handleInput}
                  value={inputData?.name}
                  required
                />
              </div>
              <div className="formGroup">
                <label> E-mail </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Digite seu E-mail"
                  onChange={handleInput}
                  value={inputData?.email}
                  required
                />
              </div>
              <div className="formGroup">
                <label> WhatsApp </label>
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="Digite seu WhatsApp"
                  onChange={handleInput}
                  value={inputData?.whatsapp}
                  required
                />
              </div>
              <div className="formGroup">
                <label> Concurso dos Sonhos </label>
                <select
                  name="dreamCareer"
                  onChange={handleInput}
                  value={inputData?.dreamCareer}
                >
                  <option defaultValue disabled value="defaultCarrer">
                    {" "}
                    Selecione a carreira dos seus sonhos{" "}
                  </option>
                  <option value="Polícia Federal"> Polícia Federal </option>
                  <option value="Polícia Militar"> Polícia Militar </option>
                  <option value="Polícia Civíl"> Polícia Civíl </option>
                  <option value="Corpo de Bombeiro"> Corpo de Bombeiro </option>
                  <option value="Polícia Penal"> Polícia Penal </option>
                  <option value="Exército Brasileiro">
                    {" "}
                    Exército Brasileiro{" "}
                  </option>
                </select>{" "}
              </div>
              <input type="hidden" name="_gotcha" />
              <div className="formGroup">
                <input type="submit" value="QUERO PASSAR!" />
              </div>
            </form>
          </div>
        </Column>
      </GridContainer>

      <GridContainer
        style={{
          gridTemplateColumns: "30% 70%",
          padding: "0 40px 0 40px",
          background: "var(--color-dark)",
          borderRadius: " 0 0 100px 100px",
        }}
        id="secondSection"
      >
        <Column>
          <img src={soldier} style={{ maxWidth: "100%" }} />
        </Column>
        <Column
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: '30px'
          }}
        >
          <p>
            {" "}
            A formação que você precisa para passa nos concursos publicos da
            atualidade.
          </p>
          <p>
            A estabilidade financeira nunca esteve tão perto de você como agora.
          </p>
        </Column>
      </GridContainer>
    </Container>
  );
}
