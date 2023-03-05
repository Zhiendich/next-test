import A from "../components/A";
import Container from "../components/Container";
import { IUsers } from "../types/user";
const Users = ({ users }: IUsers) => {
  return (
    <Container>
      <div>
        <h1>Пoльзователи :</h1>
        <ul>
          {users.map((user) => (
            <A key={user.id} href={`users/${user.id}`} text={user.name} />
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Users;

export const getStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
};
