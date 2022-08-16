import s from "./ModalAddPicture.module.scss";
import ModalWrapper from "components/ModalWrapper";
import Button from "components/Button";
import { useState } from "react";

const ModalAddPicture = ({ open, onClose, submit, id }) => {
  const [picture, setPicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", picture);

    submit({ id, data });

    onClose();
  };

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <form
        id="add-picture-form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className={s.form}
      >
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="image">
            Select your picture
          </label>
          <input
            id="image"
            name="image"
            type="file"
            onChange={(e) => {
              setPicture(e.target.files[0]);
            }}
          />
        </div>
        <Button className={s.submitBtn} type="submit" text="Submit" />
        <Button
          className={s.closeBtn}
          text="Cancel"
          styleType="secondary"
          onClick={onClose}
        />
      </form>
    </ModalWrapper>
  );
};

export default ModalAddPicture;
