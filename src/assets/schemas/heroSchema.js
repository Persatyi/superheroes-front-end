import * as yup from "yup";

const regexSchema = /^([a-zA-ZА-ЯҐЄІЇа-яґєії0-9 ]+)$/;

const heroSchema = yup.object().shape({
  nickname: yup.string().matches(regexSchema).required("Nickname is required"),
  realName: yup.string().matches(regexSchema).required("Real name is required"),
  superpowers: yup
    .string()
    .matches(regexSchema)
    .required("Superpowers is required"),
});

export default heroSchema;
