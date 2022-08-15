import Container from "components/Container";
// import s from "./HeroesList.module.scss";

// const path = "http://localhost:3000/";

const HeroesList = (data) => {
  console.log("🚀 ~ data", data);
  return (
    <main>
      <Container>
        <ul>
          {/* {data.data.map(({ _id: id, images }) => (
            <li key={id}>
              <img src={`${path}${images[0]}`} alt={images[0]} />
            </li>
          ))} */}
        </ul>
      </Container>
    </main>
  );
};

export default HeroesList;
