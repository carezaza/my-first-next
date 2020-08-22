import Layout from "../../components/layout";
import MemberCard from "../../components/memberCard";
import StyledLink from "../../components/styledLink";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px auto;
  border-radius: 3px;
  display: grid;
  max-width: 900px;
  border: 1px solid #ccc;
  padding: 8px;
  grid-gap: 2px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

function members({ users }) {
  return (
    <Layout title="Members">
      <h4 style={{ margin: 10 }} align="center">
        Members
      </h4>
      <Container>
        {users.map((item) => (
          <StyledLink key={item.id} href={`/members/${item.id}`}>
            <MemberCard item={item} />
          </StyledLink>
        ))}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);

  const users = await res.json();

  return { props: { users } };
}

export default members;
