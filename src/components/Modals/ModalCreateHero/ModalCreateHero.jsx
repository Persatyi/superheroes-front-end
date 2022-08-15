import s from "./ModalCreateHero.module.scss";
import ModalWrapper from "components/ModalWrapper";
import Button from "components/Button";
import heroSchema from "assets/schemas/heroSchema";
import { addSuperhero } from "services/backendApi";

import { useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";

const initialValues = {
  nickname: "",
  realName: "",
  originDescription: "",
  superpowers: "",
  catchPhrase: "",
};

const ModalCreateHero = ({ open, onClose }) => {
  const [files, setFile] = useState([]);

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <Formik
        initialValues={initialValues}
        validateOnBlur
        onSubmit={async (values) => {
          try {
            const data = new FormData();

            for (let [key, value] of Object.entries(values)) {
              data.append(`${key}`, value);
            }

            if (files.length === 0) {
              data.append("images", []);
            } else {
              for (let i = 0; i <= files.length; i += 1) {
                data.append("images", files[i]);
              }
            }

            await addSuperhero(data);
          } catch (error) {
            console.log(error.message);
          }
        }}
        validationSchema={heroSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <form
            id="add-superhero-form"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <h3>Register new character</h3>
            <ul>
              <li>
                <label htmlFor="nickname">
                  Nickname<span>*</span>
                </label>
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  placeholder="Type a nickname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nickname}
                />
                {touched.nickname && errors.nickname && (
                  <div className={s.errorWrapper}>
                    <p className={s.error}>{errors.nickname}</p>
                  </div>
                )}
              </li>
              <li>
                <label htmlFor="realName">
                  Real Name<span>*</span>
                </label>
                <input
                  id="realName"
                  name="realName"
                  type="text"
                  placeholder="Type a real name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.realName}
                />
                {touched.realName && errors.realName && (
                  <div className={s.errorWrapper}>
                    <p className={s.error}>{errors.realName}</p>
                  </div>
                )}
              </li>
              <li>
                <label htmlFor="originDescription">
                  Origin description<span>*</span>
                </label>
                <input
                  id="originDescription"
                  name="originDescription"
                  type="textarea"
                  placeholder="Write here origin description"
                  onChange={handleChange}
                  value={values.originDescription}
                />
                {touched.originDescription && errors.originDescription && (
                  <div className={s.errorWrapper}>
                    <p className={s.error}>{errors.originDescription}</p>
                  </div>
                )}
              </li>
              <li>
                <label htmlFor="superpowers">
                  Superpowers<span>*</span>
                </label>
                <input
                  id="superpowers"
                  name="superpowers"
                  type="textarea"
                  placeholder="Describe superpowers"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.superpowers}
                />
                {touched.superpowers && errors.superpowers && (
                  <div className={s.errorWrapper}>
                    <p className={s.error}>{errors.superpowers}</p>
                  </div>
                )}
              </li>
              <li>
                <label htmlFor="catchPhrase">
                  Catch phrase<span>*</span>
                </label>
                <input
                  id="catchPhrase"
                  name="catchPhrase"
                  type="textarea"
                  placeholder="Type catch phrase"
                  onChange={handleChange}
                  value={values.catchPhrase}
                />
                {touched.catchPhrase && errors.catchPhrase && (
                  <div className={s.errorWrapper}>
                    <p className={s.error}>{errors.catchPhrase}</p>
                  </div>
                )}
              </li>
              <li>
                <label htmlFor="images">Add pictures</label>
                <input
                  id="images"
                  name="images"
                  type="file"
                  multiple
                  onChange={(e) => {
                    setFile(e.target.files);
                  }}
                />
              </li>
            </ul>

            <Button
              className={s.submitBtn}
              type="submit"
              text="Submit"
              disabled={!isValid && !dirty}
            />
            <Button className={s.closeBtn} text="Cancel" onClick={onClose} />
          </form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

ModalCreateHero.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalCreateHero;
