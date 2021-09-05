import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  /* height: 100vh; */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  #header {
    position: absolute;
    width: 350px;
  }

  #header .pro-sidebar {
    min-height: 100%;
  }

  #header .closemenu {
    color: var(--color-dark);
    /* position: absolute;
    right: 0; */
    /* z-index: 9999;
    line-height: 20px;
    border-radius: 50%; */
    font-weight: bold;
    font-size: 22px;
    cursor: pointer;
    padding: 15px;

    display: flex;
    justify-content: flex-end;
  }

  #header .pro-sidebar {
    width: 100%;
    min-width: 100%;
  }
  #header .pro-sidebar.collapsed {
    width: 80px;
    min-width: 80px;
  }

  #header .pro-sidebar-inner {
    background-color: white;
    box-shadow: 0.5px 0.866px 2px 0px rgba(0, 0, 0, 0.15);
  }

  #header .pro-sidebar-inner .pro-sidebar-layout {
    overflow-y: hidden;
  }

  #header .pro-sidebar-inner .pro-sidebar-layout .logotext p {
    font-size: 20px;
    padding: 0 20px;
    color: var(--color-dark);
    font-weight: bold;
  }
  #header .pro-sidebar-inner .pro-sidebar-layout ul {
    padding: 0 5px;
  }

  #header .pro-sidebar-inner .pro-sidebar-layout ul .pro-inner-item {
    color: var(--color-dark);
    margin: 10px 0px;
    font-weight: bold;
  }

  #header
    .pro-sidebar-inner
    .pro-sidebar-layout
    ul
    .pro-inner-item
    .pro-icon-wrapper {
    background-color: var(--color-light);
    color: var(--color-dark);
    border-radius: 3px;
  }

  #header
    .pro-sidebar-inner
    .pro-sidebar-layout
    ul
    .pro-inner-item
    .pro-icon-wrapper
    .pro-item-content {
    color: var(--color-dark);
  }

  #header .pro-sidebar-inner .pro-sidebar-layout .active {
    /* background-image: linear-gradient(0deg, #fece00 0%, #ffe172 100%); */
    color: var(--color-dark) !important;
  }

  .pro-sidebar .pro-menu a {
    color: var(--color-dark);
  }

  #header .logo {
    padding: 20px;
  }

  .pro-sidebar
    .pro-menu
    .pro-menu-item.pro-sub-menu
    .pro-inner-list-item
    .pro-inner-item:before {
    content: none;
  }

  .pro-sidebar .pro-menu > ul > .pro-sub-menu > .pro-inner-list-item {
    background: unset;
  }

  @media only screen and (max-width: 720px) {
    html {
      overflow: hidden;
    }
  }
`;
