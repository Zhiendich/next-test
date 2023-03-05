import Container from "../../components/Container";

const User = ({ user }) => {
  return (
    <Container>
      <p>
        Пользователь с именем :<span>{user.name}</span>
      </p>
      <p>
        {" "}
        Пользователь с ником :<span>{user.username}</span>
      </p>
    </Container>
  );
};

export default User;

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user },
  };
};
