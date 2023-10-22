import { MainStyled, MainContentContainerStyled } from "./SharedLayout.styled";
import BurgerButton from "../BurgerButton/BurgerButton";
import Section from "../Section/Section";
import Container from "../Container/Container";
import SideBar from "../SideBar/SideBar";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const SharedLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((showModal) => !showModal);

  return (
    <MainStyled>
      {!showModal && <BurgerButton onClick={toggleModal} />}
      {showModal && (
        <Modal onClose={toggleModal}>
          <SideBar onClose={toggleModal} />
        </Modal>
      )}

      <MainContentContainerStyled>
        <Section>
          <Container>
            <Suspense>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </MainContentContainerStyled>
    </MainStyled>
  );
};

export default SharedLayout;
