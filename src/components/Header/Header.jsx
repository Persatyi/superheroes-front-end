import Container from "components/Container/Container";
import s from "./Header.module.scss";
import ModalCreateHero from "components/Modals/ModalCreateHero";
import Button from "components/Button";

import { useState } from "react";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <header className={s.header}>
      <Container>
        <h1>Welcome to our superhero league</h1>
        <h2>If you are not in our database you are not a superhero</h2>
        <Button
          text="Register new character"
          onClick={() => setOpenModal(true)}
        />
      </Container>
      <ModalCreateHero open={openModal} onClose={() => setOpenModal(false)} />
    </header>
  );
};

export default Header;
