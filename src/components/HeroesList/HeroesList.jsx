import Container from "components/Container";
import s from "./HeroesList.module.scss";
import unknown from "assets/images/unknown.jpg";
import { ModalEdit, ModalAddPicture } from "components/Modals";

import { useState } from "react";
import { FcAddImage } from "react-icons/fc";

const PATH = "https://persatyi-superheroes.herokuapp.com/avatars/";

const HeroesList = ({ data = [], handlePicture }) => {
  const [heroInfo, setHeroInfo] = useState(null);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalAddPicture, setModalAddPicture] = useState(false);

  const onClickHeroEdit = ({ id, images }) => {
    setHeroInfo({ id, images });
    setModalEdit(true);
  };

  return (
    <main className={s.main}>
      <Container>
        {data.length !== 0 && (
          <ul className={s.list}>
            {data.map(
              ({
                _id: id,
                images,
                nickname,
                realName,
                superpowers,
                originDescription,
                catchPhrase,
              }) => (
                <li className={s.item} key={id}>
                  <img
                    onClick={() => onClickHeroEdit({ id, images })}
                    src={!!images ? `${PATH}${images[0].name}` : unknown}
                    alt={images[0].name}
                    className={s.img}
                  />
                  <ul>
                    <li className={s.textList}>
                      <p className={s.description}>Nickname: </p>
                      <span>{nickname}</span>
                    </li>
                    <li className={s.textList}>
                      <p className={s.description}>Real name: </p>
                      <span>{realName}</span>
                    </li>
                    <li className={s.textList}>
                      <p className={s.description}>Superpowers: </p>
                      <span>{superpowers}</span>
                    </li>
                    <li className={s.textList}>
                      <p className={s.description}>Origin description: </p>
                      <span>{originDescription}</span>
                    </li>
                    <li className={s.textList}>
                      <p className={s.description}>Catch phrase: </p>
                      <span>{catchPhrase}</span>
                    </li>
                  </ul>
                  <div>
                    <button onClick={() => setModalAddPicture(true)}>
                      Add new picture: <FcAddImage id={id} />
                    </button>
                    <ModalAddPicture
                      id={id}
                      open={modalAddPicture}
                      onClose={() => setModalAddPicture(false)}
                      submit={handlePicture}
                    />
                  </div>
                </li>
              )
            )}
          </ul>
        )}
      </Container>
      {modalEdit && (
        <ModalEdit
          info={heroInfo}
          open={modalEdit}
          onClose={() => setModalEdit(false)}
        />
      )}
    </main>
  );
};

export default HeroesList;
