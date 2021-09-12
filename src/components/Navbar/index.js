import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";

import useWindowSize from "../useWindowSize.js";

// import sinapseTinyLogo from '../../assets/images/Tiny_Logo_Sinapse__1_-removebg-preview.png';
import sinapseLogo from "../../assets/images/sinapseLogo.png";
import facebookIcon from "../../assets/images/facebookIcon.png";
import instagramIcon from "../../assets/images/instagramIcon.png";

import {
  Nav,
  Container,
  Title,
  ContactInfo,
  Menu,
  MenuItem,
  ToggleButton,
  CloseIcon,
} from "./styles";

function Navbar({ hideContactInfo = false }) {
  const [menuStatus, setMenuStatus] = useState(false);
  const [session, loading] = useSession();

  const size = useWindowSize();

  const menuHandler = () => {
    setMenuStatus(!menuStatus);
  };

  useEffect(() => {
    if (size.width >= 960) {
      setMenuStatus(false);
    }
  }, [size.width]);

  return (
    <>
      <ContactInfo hide={hideContactInfo}>
        <div className="contactElement">
          <p> Três Corações/MG </p>
          <p> Av. Sete de Setembro, 501 - Centro</p>
        </div>
        <div className="contactElement">
          <p> Segunda a Sexta: 09:00 às 13:00 | 15:00 às 21:00</p>
          <p> Sábado: 09:00 às 18:00</p>
        </div>
        <div className="socialMedias contactElement">
          <div>
            <a href="https://www.facebook.com/profile.php?id=100072520026650">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
          <div>
            <a href="https://instagram.com/sinapse.concursos">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </ContactInfo>
      <Nav>
        <Container>
          <Title>
            <Link href="/">
              <a>
                <img src={sinapseLogo} alt="Sinapse - Concursos" />
              </a>
            </Link>
          </Title>
          <ToggleButton onClick={menuHandler}>
            {!menuStatus && <MdMenu />}
          </ToggleButton>
          <Menu isOpen={menuStatus}>
            <CloseIcon isOpen={menuStatus} onClick={menuHandler}>
              <MdClose />
            </CloseIcon>
            {!session && (
              <>
                <MenuItem>
                  <a onClick={() => signIn()} className="active">Entrar</a>
                </MenuItem>
                {/* <MenuItem>
                  <Link href="/auth/signup">
                    <a className="active">Cadastrar</a>
                  </Link>
                </MenuItem> */}
              </>
            )}
            {session && (
              <>
                <MenuItem>
                  <Link href="/dashboard">
                    <a className="active">Área do Aluno</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <a onClick={() => signOut()}>Sair</a>
                </MenuItem>
              </>
            )}
          </Menu>
        </Container>
      </Nav>
    </>
  );
}

export default Navbar;
