import styled from "styled-components";

export const Container = styled.div`
  background-repeat: no-repeat;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* grid-template-rows: 1fr; 
  gap: 0px 0px; 
  justify-content: center; 
  align-content: center;  */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &#secondSection {
    grid-template-columns: 1fr 1fr;
    /* padding: 0 40px 0 40px; */
    background: var(--color-dark);
    border-radius: 0 0 100px 100px;
    overflow: hidden;

    p {
      font-size: 1.7em;
      font-weight: 700;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      border-radius: 0;
    }

    .left-container,
    .right-container {
      position: relative;

      img {
        /* height: 100%; */
        width: 52%;
        object-fit: contain;
      }
    }

    .right-container {
      img {
        width: 100%;
        height: 100%;
      }
    }

    /* .right-container {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    } */

    .left-container__content,
    .right-container__content {
      position: absolute;
      top: 0%;
      left: 0%;
      background: rgba(40, 42, 54, 0.6);
      width: 100%;
      height: 100%;
      padding: 60px;

      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    }

    /* .left-container, .right-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(40, 42, 54, 0.6);
    } */

    /* .right-container {
      flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 30px;
    } */

    /* & div:nth-child(2) {
      display: none;
    } */

    /* @media screen and (max-width: 768px) {
      grid-template-columns: 1fr !important;
      position: relative;
      border-radius: 0;

      div:nth-child(2) {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(40, 42, 54, 0.6);
      }

      div:nth-child(3) {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
      }
    } */
  }
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-light);

  &:nth-child(2) {
  }

  div.left-container {
    padding: 50px;

    p {
      font-size: 35px;

      .highlight {
        color: var(--color-danger);
        font-size: 52px;
      }
    }
  }

  div.right-container {
    background-color: var(--color-light);
    color: var(--color-dark);

    width: 85%;

    padding: 15px 7%;

    margin: 15px;
    border-radius: 25px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    p {
      font-size: 32px;
      text-align: center;
    }

    hr {
      border: none;
      border: 1px solid var(--color-dark);
      margin-top: 10px;
      margin-bottom: 10px;
      width: 80%;
      text-align: center;
      border-radius: 35px;
      opacity: 0.5;
    }

    .formGroup {
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    height: 100%;

    .left-container {
      padding-top: 90px;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 15px;
    }

    .right-container {
      justify-content: center;
    }
  }
`;

export const Slider = styled.div`
  padding: 42px;
  .blog-slider {
    width: 95%;
    position: relative;
    max-width: 800px;
    margin: auto;
    background: #fff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 25px;
    border-radius: 25px;
    height: 400px;
    transition: all 0.3s;

    @media screen and (max-width: 992px) {
      max-width: 680px;
      height: 400px;
    }

    @media screen and (max-width: 768px) {
      min-height: 500px;
      height: auto;
      margin: 180px auto;
    }

    @media screen and (max-height: 500px) and (min-width: 992px) {
      height: 350px;
    }

    &__item {
      display: flex;
      align-items: center;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }

      &.swiper-slide-active {
        .blog-slider__img {
          img {
            opacity: 1;
            transition-delay: 0.3s;
          }
        }
        .blog-slider__content {
          > * {
            opacity: 1;
            transform: none;

            @for $i from 0 to 15 {
              &:nth-child(#{$i + 1}) {
                transition-delay: $i * 0.1 + 0.3s;
              }
            }
          }
        }
      }
    }

    &__img {
      // width: 40%;
      width: 300px;
      flex-shrink: 0;
      height: 300px;
      /* background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%); */
      /* box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2); */
      border-radius: 20px;
      transform: translateX(-80px);

      overflow: hidden;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
        border-radius: 20px; */
        opacity: 0.8;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        opacity: 0;
        border-radius: 20px;
        transition: all 0.3s;
      }

      @media screen and (max-width: 992px) {
        // width: 45%;
      }
      @media screen and (max-width: 768px) {
        transform: translateY(-50%);
        width: 90%;
      }
      @media screen and (max-width: 576px) {
        width: 95%;
      }
      @media screen and (max-height: 500px) and (min-width: 992px) {
        height: 270px;
      }
    }

    &__content {
      // width: 60%;
      padding-right: 25px;
      @media screen and (max-width: 992px) {
        // width: 55%;
      }
      @media screen and (max-width: 768px) {
        margin-top: -80px;
        text-align: center;
        padding: 0 30px;
      }

      @media screen and (max-width: 576px) {
        padding: 0;
      }
      > * {
        opacity: 0;
        transform: translateY(25px);
        transition: all 0.4s;
      }
    }

    &__code {
      color: #7b7992;
      margin-bottom: 15px;
      display: block;
      font-weight: 500;
    }

    &__title {
      font-size: 24px;
      font-weight: 700;
      color: #0d0925;
      margin-bottom: 20px;
    }

    &__text {
      color: #4e4a67;
      margin-bottom: 30px;
      line-height: 1.5em;
    }

    &__button {
      display: inline-flex;
      background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
      padding: 15px 35px;
      border-radius: 50px;
      color: #fff;
      box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
      text-decoration: none;
      font-weight: 500;
      justify-content: center;
      text-align: center;
      letter-spacing: 1px;
      @media screen and (max-width: 576px) {
        width: 100%;
      }
    }
    .swiper-container-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
      bottom: 10px;
      left: 0;
      width: 100%;
    }
    &__pagination {
      position: absolute;
      z-index: 21;
      right: 20px;
      width: 11px !important;
      text-align: center;
      left: auto !important;
      top: 50%;
      bottom: auto !important;
      transform: translateY(-50%);
      @media screen and (max-width: 768px) {
        transform: translateX(-50%);
        left: 50% !important;
        top: 205px;
        width: 100% !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &.swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 8px 0;
        @media screen and (max-width: 768px) {
          margin: 0 5px;
        }
      }

      .swiper-pagination-bullet {
        width: 11px;
        height: 11px;
        display: block;
        border-radius: 10px;
        background: #062744;
        opacity: 0.2;
        transition: all 0.3s;
        &-active {
          opacity: 1;
          background: #fd3838;
          height: 30px;
          box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);

          @media screen and (max-width: 768px) {
            height: 11px;
            width: 30px;
          }
        }
      }
    }
  }
`;

export const ContactForm = styled.div`
  padding: 15px 9em;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 4.4em;
    font-weight: 600;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    padding: 20px 2em;
  }
`;
