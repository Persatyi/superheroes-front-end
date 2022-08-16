import s from "./ModalEdit.module.scss";
import ModalWrapper from "components/ModalWrapper";
import { useRemovePictureMutation } from "redux/backendApi";
import { useState } from "react";
import { FcRemoveImage, FcNext, FcPrevious } from "react-icons/fc";
import unknown from "assets/images/unknown.jpg";

const PATH = "https://persatyi-superheroes.herokuapp.com/avatars/";

const ModalEdit = ({ open, info, onClose }) => {
  const { id, images } = info;
  const [counter, setCounter] = useState(0);
  const [removePicture] = useRemovePictureMutation();

  const nextImage = () => {
    if (counter === images.length - 1) {
      return;
    }
    setCounter((counter) => (counter += 1));
  };

  const prevImage = () => {
    if (counter === 0) {
      return;
    }
    setCounter((counter) => (counter -= 1));
  };

  const removeImage = async () => {
    if (images.length === 0) {
      return;
    }
    await removePicture({ id, image: images[counter].name }).unwrap();
  };

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <div className={s.imgWrapper}>
        <img
          src={!!images.length ? `${PATH}${images[counter].name}` : unknown}
          alt={!!images.length ? images[counter].name : "unknown hero"}
          className={s.img}
        />
        <FcPrevious className={s.prevBtn} onClick={prevImage} />
        <FcNext className={s.nextBtn} onClick={nextImage} />
        <FcRemoveImage className={s.removeImage} onClick={removeImage} />
      </div>
    </ModalWrapper>
  );
};

export default ModalEdit;
