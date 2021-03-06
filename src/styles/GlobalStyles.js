import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-success: #32d15d;
    --color-attention: #e8dc2e;
    --color-danger: #ff5555;
    --color-dark: #282a36;
    --color-info: #24b0e3;
    --color-light: #f5f5f5;
    --persian-indigo: #2C0974ff;
    --cultured: #F7F7F7ff;
    --bright-navy-blue: #1170DEff;
    --persian-blue: #0D31BCff;
    --blue-green: #2093BCff;

    font-family: "Nunito",  ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  ::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.9);
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    min-height: 100%;
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    color: var(--color-dark);
    /* background: var(--color-light); */
    /* background: rgb(73,18,145);
    background: linear-gradient(121deg, rgba(73,18,145,1) 0%, rgba(60,52,164,1) 18%, rgba(22,155,222,1) 75%, rgba(0,212,255,1) 100%); */

    background: var(--color-light);
    -webkit-font-smoothing: antialiased !important;
  }

  body,
  input,
  button {
    color: var(--color-dark);
  }

  a {
    text-decoration: none;
    color: var(--color-dark);
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: stretch; */
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input, select, textarea {
    width: 100%;
    margin-bottom: 15px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;
    padding: 12px 16px;
  }

  textarea{
    height: 100px;
  }

  .css-62g3xt-dummyInput {
    padding: 0 !important;
  }

  input:focus {
    border-color: var(--color-dark);
  }

  input.hasError {
    border-color: var(--color-danger);
  }

  input[type="submit"] {
        color: var(--color-light);
        background: var(--color-danger);
        padding: 15px 20px;
        border-radius: 7px;
        border: none;
        transition: all 0.5s ease-in-out;
        cursor: pointer;

        &:hover {
          background: #bf3f3f;
        }
      }

  button {
    display: block;
    background: var(--color-dark);
    color: var(--color-light);
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    padding: 16px;
    font-weight: bold;
    font-size: 15px;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #2e2e2e;
  }

  .height-100vh {
    height: 100vh;
  }
`;
