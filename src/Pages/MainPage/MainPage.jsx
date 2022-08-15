// import s from "./MainPage.module.scss"
import Header from "components/Header/Header";
import HeroesList from "components/HeroesList";
import { getHeroes } from "services/backendApi";

const MainPage = () => {
  const { data } = getHeroes();

  return (
    <>
      <Header />
      <HeroesList data={data} />
    </>
  );
};

export default MainPage;
