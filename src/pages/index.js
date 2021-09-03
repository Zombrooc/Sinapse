import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

import Navbar from "../components/Navbar";

import brazillianSoldiers from "../assets/images/brazillian_soldiers.png";
import soldier from "../assets/images/soldierPNG.png";
import elian2 from "../assets/images/contributorsProfilePics/elian2.jpg";
import joaoPedro from "../assets/images/contributorsProfilePics/joaoPedro.jpeg";

import {
  Container,
  GridContainer,
  Column,
  Slider,
} from "../styles/pages/home.styles";
import SuccessMessage from "../components/SuccessMessage";

export default function Home() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    dreamCareer: "defaultCarrer",
  });
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    var swiper = new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
    });
  }, []);

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
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />

        <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
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

      <GridContainer id="secondSection">
        <Column>
          <img src={soldier} />
        </Column>
        <div></div>
        <Column
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <p>
            {" "}
            A formação que você precisa para passar nos concursos públicos da
            atualidade.
          </p>
          <p>
            A estabilidade financeira nunca esteve tão perto de você como agora.
          </p>
        </Column>
      </GridContainer>
      <Slider>
        <p style={{ textAlign: "center", fontSize: "40px" }}>
          Conheça nossos colaboradores e professores
        </p>
        <br />
        <div className="blog-slider">
          <div className="blog-slider__wrp swiper-wrapper">
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src={elian2} alt="" />
              </div>
              <div className="blog-slider__content">
                <div className="blog-slider__title">
                  Elian Valdez V. L. Gonçalo
                </div>
                <span className="blog-slider__code">
                  CEO & CTO da The Simple TECH &bull; Professor de Informática
                  &bull; Desenvolvedor FullStack{" "}
                </span>
                <div className="blog-slider__text">
                  Nosso professor de informática tem mais de 4 anos de
                  experiência na área tendo se formado em 2018 como técnico de
                  informática em 2018, logo depois começando como professor na
                  cidade de Três Corações. Desenvolvedor e proprietário na
                  empresa The Simple TECH.
                </div>
                {/* <a href="#" className="blog-slider__button">
                  READ MORE
                </a> */}
              </div>
            </div>

            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src={joaoPedro} alt="" />
              </div>
              <div className="blog-slider__content">
                <div className="blog-slider__title">João Pedro</div>
                <span className="blog-slider__code">
                  Fundador da Sinapse &bull; Professor de Informática &bull;
                  Formado em Marketing e Vendas
                </span>
                <div className="blog-slider__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  nesciunt porro labore unde nulla quos veniam tempora quis.
                  Unde, quae libero. Magni soluta aut temporibus deserunt ipsa?
                  Unde, iusto id.
                </div>
                {/* <a href="#" className="blog-slider__button">
                  READ MORE
                </a> */}
              </div>
            </div>
          </div>
          <div className="blog-slider__pagination"></div>
        </div>
      </Slider>
    </Container>
  );
}
