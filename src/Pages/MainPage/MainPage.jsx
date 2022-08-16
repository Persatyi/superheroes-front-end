// import s from "./MainPage.module.scss"
import Header from "components/Header/Header";
import HeroesList from "components/HeroesList";
import { ModalCreateHero } from "components/Modals";
import {
  useGetHeroesQuery,
  useAddSuperheroMutation,
  useAddPictureMutation,
} from "redux/backendApi";

import { useState } from "react";

const MainPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const { data = [], isLoading } = useGetHeroesQuery();
  const [addHero] = useAddSuperheroMutation();
  const [addPicture] = useAddPictureMutation();

  const handleAddHero = async (data) => {
    await addHero(data).unwrap();
  };

  const handlePicture = async (data) => {
    await addPicture(data).unwrap();
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Header onClick={() => setOpenModal(true)} />
      <HeroesList data={data} handlePicture={handlePicture} />
      <ModalCreateHero
        addHero={handleAddHero}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default MainPage;
