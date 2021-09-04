import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
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
      }, 5000);
      router.push('/apresentation-page')
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

      <GridContainer style={{ backgroundImage: `url(${firstBlockBG})` }}>
        <Column style={{ flexDirection: "column" }}>
          <div className="left-container" style={{ textAlign: "center" }}>
            <img src={policeCareer} style={{ width: "90%" }} />
            <p style={{ textAlign: "left" }}>
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
            <p style={{ textAlign: "left" }}>
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
                  <option value="Polícia Penal"> Polícia Penal </option>
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
              A estrutura que você precisa para passar nos concursos públicos
              você só encontra aqui.
            </p>
            <p>Procurando estabilidade financeira?</p>
            <p>Ela nunca esteve tão perto de você como agora.</p>
          </div>
        </Column>
        <Column className="right-container">
          <img src={workout} />
          <div className="right-container__content">
            <p>
              Nós, da Sinapse Concursos, além de prepararmos você para a prova
              objetiva, seremos os primeiros a te preparar para o Teste de
              Aptidão Física (TAF).
            </p>
          </div>
        </Column>
      </GridContainer>
      <Slider>
        <p style={{ textAlign: "center", fontSize: "40px" }}>
          Conheça nossos colaboradores e professores
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
                  Elian Valdez V. L. Gonçalo
                </div>
                <span className="blog-slider__code">
                  CEO & CTO da The Simple TECH &bull; Professor de Informática
                  &bull; Desenvolvedor FullStack{" "}
                </span>
                <div className="blog-slider__text">
                  Nosso professor de informática tem mais de 4 anos de
                  experiência na área tendo se formando em 2018 como técnico de
                  informática, logo em seguida iniciou sua jornada como
                  professor na cidade de Três Corações. Desenvolvedor e
                  proprietário na empresa The Simple TECH.
                </div>
              </div>
            </div>
            {/* João Pedro Profile */}
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src={joaoPedro2} alt="" />
              </div>
              <div className="blog-slider__content">
                <div className="blog-slider__title">João Pedro</div>
                <span className="blog-slider__code">
                  Fundador da Sinapse &bull; Professor de Informática &bull;
                  Formado em Marketing e Vendas &bull; Músico &bull; Designer
                  Gráfico &bull; Editor de Vídeos &bull; Criador de Conteúdo
                </span>
                <div className="blog-slider__text">
                  Nosso professor de Informática João Pedro, 23 anos, natural de
                  Três Corações - MG. Atualmente professor de Informática, está
                  estudando para o concurso da Polícia Federal ( Agente de
                  Polícia Federal) e cursando Marketing pela universidade UNIS,
                  em Varginha. Estudou em 2018 no SENAC, realizando curso de
                  vendas. Possui curso de: Designe Gráfico, edição e criação de
                  vídeos e curso de manutenção em computadores.
                </div>
              </div>
            </div>
            {/* José Wilson Profile */}
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src={joseWilson} alt="" />
              </div>
              <div className="blog-slider__content">
                <div className="blog-slider__title">José Wilson</div>
                <span className="blog-slider__code">
                  Formado em Direito pela FADIVA &bull; Pós graduado em Direito
                  civil e empresarial &bull; Policial Militar/MG desde 2016
                </span>
                <div className="blog-slider__text">
                  Nascido em Maceió/AL, vive em Três Corações/MG, formou em
                  Direito pela Fadiva, Pós Graduou-se em Direito Civil em
                  Empresarial pela Faculdade de Direito Damásio de Jesus, foi
                  Advogado em 2014/2015, atualmente é policial militar de minas
                  gerais desde 2016. Busca ajudar pessoas a serem aprovadas em
                  concursos públicos na área policial.
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
                  concurso de analista judiciário e técnico judiciário do TJPA
                  2020 &bull; Aprovado técnico judiciário/conciliador TJRS 2013
                </span>
                <div className="blog-slider__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  nesciunt porro labore unde nulla quos veniam tempora quis.
                  Unde, quae libero. Magni soluta aut temporibus deserunt ipsa?
                  Unde, iusto id.
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
                  Aprovado como agente penitenciário no ano de 2014 &bull;
                  Formado em Direito pela Unilavras em 2017 &bull; Pós graduado
                  em direito do trabalho e processual do trabalho &bull; Exerceu
                  a profissão de advogado por 3 anos e meio, atuando na Seara
                  Criminal, Cível e Trabalhista &bull; Policial Militar de Minas
                  Gerais
                </span>
                <div className="blog-slider__text">
                  Nosso professor de direito penal (parte especial), possuí
                  formação em direito pela Unilavras, já foi aprovado nos
                  concursos de agente penitênciario em 2014 e polícia militar em
                  2018. Além de ter advogado na Seara criminal por cerca de 3
                  anos e meio. Atualmente exerce a profissão de polícial militar
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
                  UninCor, turma 2017/2021 &bull; Estagiário do Tribunal de
                  Justiça de Minas Gerais
                </span>
                <div className="blog-slider__text">
                  Nosso professor de Direitos Humanos e Legislação Especial é
                  graduando em Direito pela Universidade Vale do Rio Verde -
                  UninCor, atualmente do 10º período do curso. É estagiário do
                  Tribunal de Justiça de Minas Gerais, lotado na 1ª Vara
                  Criminal e da Infância e da Juventude de Três Corações. Já
                  estagiou no Juizado Especial Cível e Criminal da mesma
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
        <p> Junte-se a nós nessa jornada </p>
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
              <option value="Polícia Penal"> Polícia Penal </option>
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
