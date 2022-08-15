import * as yup from "yup";

const heroSchema = yup.object().shape({
  nickname: yup.string().required("Nickname is required"),
  realName: yup.string().required("Real name is required"),
  superpowers: yup.string().required("Superpowers is required"),
});

export default heroSchema;
