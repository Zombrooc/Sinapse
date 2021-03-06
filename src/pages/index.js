import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import firstBlockBG from "../assets/images/firstBlockBG.png";
import workout from "../assets/images/workout.jpg";
import policeCareer from "../assets/images/policeCareer.png";

import soldier from "../assets/images/soldierPNG.png";
import elianValdez from "../assets/images/contributorsProfilePics/elianValdez.jpg";
// import joaoPedro from "../assets/images/contributorsProfilePics/joaoPedro.jpeg";
import joaoPedro2 from "../assets/images/contributorsProfilePics/joaoPedro2.jpeg";
import joseWilson from "../assets/images/contributorsProfilePics/joseWilson.jpeg";
import marcusCarelli from "../assets/images/contributorsProfilePics/marcusCarelli.jpeg";
import giovaniVictor from "../assets/images/contributorsProfilePics/giovaniVictor.jpeg";
import pauloVictor from "../assets/images/contributorsProfilePics/pauloVictor.jpg";

import {
  Container,
  GridContainer,
  Column,
  Slider,
  ContactForm,
} from "../styles/pages/home.styles";
import SuccessMessage from "../components/SuccessMessage";

export default function Home() {
  const router = useRouter();

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

    const response = await axios.post(
      "https://formcarry.com/s/2v8SfOenpeD",
      inputData
    );

    if (response.status === 200) {
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      if (inputData.dreamCareer === "Pol??cia Penal") {
        router.push("/career/policia-penal");
      } else {
        setInputData({
          name: "",
          email: "",
          whatsapp: "",
          dreamCareer: "defaultCarrer",
        });
      }
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

        <meta name='dailymotion-domain-verification' content='dmqk2w84jnz51r8jr' />

        <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
      </Head>

      <Navbar />

      <SuccessMessage show={showMessage} />

      <GridContainer style={{ backgroundImage: `url(${firstBlockBG})` }}>
        <Column style={{ flexDirection: "column" }}>
          <div className="left-container" style={{ textAlign: "center" }}>
            <img src={policeCareer} style={{ width: "90%" }} />
            <p style={{ textAlign: "left" }}>
              Seja aprovado para a<br />
              <strong>
                <em>Pol??cia Penal - MG</em>
              </strong>
              <br />e ganhe{" "}
              <span className="highlight">
                <strong>
                  <em>R$4.632,00</em>
                </strong>
              </span>
              p/ m??s
            </p>
            <p style={{ textAlign: "left" }}>
              <strong>
                Estudar para um concurso
                <br />
                nunca foi t??o f??cil !!!
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
                  <option value="Pol??cia Federal"> Pol??cia Federal </option>
                  <option value="Pol??cia Militar"> Pol??cia Militar </option>
                  <option value="Pol??cia Civ??l"> Pol??cia Civ??l </option>
                  <option value="Pol??cia Penal"> Pol??cia Penal </option>
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

      <GridContainer id="secondSection" style={{ overflow: "hidden" }}>
        <Column className="left-container">
          <img src={soldier} />

          <div className="left-container__content">
            <p>
              A estrutura que voc?? precisa para passar nos concursos p??blicos
              voc?? s?? encontra aqui.
            </p>
            <p>Procurando estabilidade financeira?</p>
            <p>Ela nunca esteve t??o perto de voc?? como agora.</p>
          </div>
        </Column>
        <Column className="right-container">
          <img src={workout} />
          <div className="right-container__content">
            <p>
              N??s, da Sinapse Concursos, al??m de prepararmos voc?? para a prova
              objetiva, seremos os primeiros a te preparar para o teste de
              aptid??o f??sica (TAF).
            </p>
          </div>
        </Column>
      </GridContainer>
      <Slider>
        <p style={{ textAlign: "center", fontSize: "40px" }}>
          Conhe??a nossos colaboradores e professores
        </p>
        <br />
        <div className="blog-slider">
          <div className="blog-slider__wrp swiper-wrapper">
            {/* Elian Valdez Profile */}
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src={elianValdez} alt="" />
              </div>
              <div className="blog-slider__content">
                <div className="blog-slider__title">
                  Elian Valdez V. L. Gon??alo
                </div>
                <span className="blog-slider__code">
                  CEO & CTO da The Simple TECH &bull; Professor de Inform??tica
                  &bull; Desenvolvedor FullStack{" "}
                </span>
                <div className="blog-slider__text">
                  Nosso professor de inform??tica tem mais de 4 anos de
                  experi??ncia na ??rea tendo se formando em 2018 como t??cnico de
                  inform??tica, logo em seguida iniciou sua jornada como
                  professor na cidade de Tr??s Cora????es. Desenvolvedor e
                  propriet??rio na empresa The Simple TECH.
                </div>
              </div>
            </div>
            {/* Jo??o Pedro Profile */}
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src={joaoPedro2} alt="" />
              </div>
              <div className="blog-slider__content">
                <div className="blog-slider__title">Jo??o Pedro</div>
                <span className="blog-slider__code">
                  Fundador da Sinapse &bull; Professor de Inform??tica &bull;
                  Formado em Marketing e Vendas &bull; M??sico &bull; Designer
                  Gr??fico &bull; Editor de V??deos &bull; Criador de Conte??do
                </span>
                <div className="blog-slider__text">
                  Nosso professor de Inform??tica Jo??o Pedro, 23 anos, natural de
                  Tr??s Cora????es - MG. Atualmente professor de Inform??tica, est??
                  estudando para o concurso da Pol??cia Federal ( Agente de
                  Pol??cia Federal) e cursando Marketing pela universidade UNIS,
                  em Varginha. Estudou em 2018 no SENAC, realizando curso de
                  vendas. Possui curso de: Designe Gr??fico, edi????o e cria????o de
                  v??deos e curso de manuten????o em computadores.
                </div>
              </div>
            </div>
            {/* Jos?? Wilson Profile */}
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src={joseWilson} alt="" />
              </div>
              <div className="blog-slider__content">
                <div className="blog-slider__title">Jos?? Wilson</div>
                <span className="blog-slider__code">
                  Formado em Direito pela FADIVA &bull; P??s graduado em Direito
                  civil e empresarial &bull; Policial Militar/MG desde 2016
                </span>
                <div className="blog-slider__text">
                  Nascido em Macei??/AL, vive em Tr??s Cora????es/MG, formou em
                  Direito pela Fadiva, P??s Graduou-se em Direito Civil em
                  Empresarial pela Faculdade de Direito Dam??sio de Jesus, foi
                  Advogado em 2014/2015, atualmente ?? policial militar de minas
                  gerais desde 2016. Busca ajudar pessoas a serem aprovadas em
                  concursos p??blicos na ??rea policial.
                </div>
              </div>
            </div>
            {/* Marcus Carelli Profile */}
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src={marcusCarelli} alt="" />
              </div>
              <div className="blog-slider__content">
                <div className="blog-slider__title">Marcus Carelli</div>
                <span className="blog-slider__code">
                  Formado pela faculdade de direito de Varginha &bull;
                  Especialista em Direito Processual Geral &bull; Aprovado no
                  concurso de analista judici??rio e t??cnico judici??rio do TJPA
                  2020 &bull; Aprovado t??cnico judici??rio/conciliador TJRS 2013
                </span>
                <div className="blog-slider__text">
                  Nosso professor de Direito Penal - Parte Geral ?? Natural de
                  Feira de Santana-BA e Advogado h?? quase uma d??cada. Possui
                  v??rios artigos cient??ficos publicados, inclusive no n??cleo de
                  mestrado e doutorado da Universidade Federal de Santa
                  Catarina. S??cio Propriet??rio do escrit??rio CM-Advogados com
                  atua????o nos Tribunais de MG,SP,PR e SC.
                </div>
              </div>
            </div>
            {/* Giovani Profile */}
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src={giovaniVictor} alt="" />
              </div>
              <div className="blog-slider__content">
                <div className="blog-slider__title">Giovani Victor</div>
                <span className="blog-slider__code">
                  Aprovado como agente penitenci??rio no ano de 2014 &bull;
                  Formado em Direito pela Unilavras em 2017 &bull; P??s graduado
                  em direito do trabalho e processual do trabalho &bull; Exerceu
                  a profiss??o de advogado por 3 anos e meio, atuando na Seara
                  Criminal, C??vel e Trabalhista &bull; Policial Militar de Minas
                  Gerais
                </span>
                <div className="blog-slider__text">
                  Nosso professor de direito penal (parte especial), possu??
                  forma????o em direito pela Unilavras, j?? foi aprovado nos
                  concursos de agente penit??nciario em 2014 e pol??cia militar em
                  2018. Al??m de ter advogado na Seara criminal por cerca de 3
                  anos e meio. Atualmente exerce a profiss??o de pol??cial militar
                  de Minas Gerais.
                </div>
              </div>
            </div>
            {/* Paulo Victor Profile */}
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src={pauloVictor} alt="" />
              </div>
              <div className="blog-slider__content">
                <div className="blog-slider__title">
                  Paulo Victor Quintiliano Barbosa
                </div>
                <span className="blog-slider__code">
                  Graduando em Direito pela Universidade Vale do Rio Verde -
                  UninCor, turma 2017/2021 &bull; Estagi??rio do Tribunal de
                  Justi??a de Minas Gerais
                </span>
                <div className="blog-slider__text">
                  Nosso professor de Direitos Humanos e Legisla????o Especial ??
                  graduando em Direito pela Universidade Vale do Rio Verde -
                  UninCor, atualmente do 10?? per??odo do curso. ?? estagi??rio do
                  Tribunal de Justi??a de Minas Gerais, lotado na 1?? Vara
                  Criminal e da Inf??ncia e da Juventude de Tr??s Cora????es. J??
                  estagiou no Juizado Especial C??vel e Criminal da mesma
                  comarca.
                </div>
              </div>
            </div>
          </div>
          <div className="blog-slider__pagination"></div>
        </div>
      </Slider>

      <br />
      <br />

      <ContactForm>
        <p> Junte-se a n??s nessa jornada </p>
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
              <option value="Pol??cia Federal"> Pol??cia Federal </option>
              <option value="Pol??cia Militar"> Pol??cia Militar </option>
              <option value="Pol??cia Civ??l"> Pol??cia Civ??l </option>
              <option value="Pol??cia Penal"> Pol??cia Penal </option>
            </select>{" "}
          </div>
          <input type="hidden" name="_gotcha" />
          <div className="formGroup">
            <input type="submit" value="QUERO PASSAR!" />
          </div>
        </form>
      </ContactForm>
      <Footer />
    </Container>
  );
}
