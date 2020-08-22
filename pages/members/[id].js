import Layout from "../../components/layout";
import React from "react";
import styled from "styled-components";
import { ListGroup } from "react-bootstrap";

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 3px;
  border: 2px solid #ccc;
  padding: 10px;
`;

function member({ user }) {
  return (
    <Layout>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: "auto",
          gridGap: 20,
          marginTop: 50,
        }}
      >
        <Avatar
          src={`https://robohash.org/cat/${user.id}?set=set4`}
          alt={user.name}
        />
        <ListGroup>
          <ListGroup.Item>Name: {user.name}</ListGroup.Item>
          <ListGroup.Item variant="primary">Email: {user.email}</ListGroup.Item>
          <ListGroup.Item variant="secondary">
            Phone: {user.phone}
          </ListGroup.Item>
          <ListGroup.Item variant="success">
            Website: {user.website}
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            Address:
            {` ${user.address.city} ${user.address.suite} ${user.address.street} ${user.address.zipcode}`}
          </ListGroup.Item>
          <ListGroup.Item variant="danger">
            Geo:
            {` ${user.address.geo.lat} lat, ${user.address.geo.lng} lng`}
          </ListGroup.Item>
          <ListGroup.Item variant="warning">
            Company: {user.company.name}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = [];

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const users = await res.json();

  users.forEach((user) => {
    paths.push({ params: { id: user.id.toString() } });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );

  const user = await res.json();

  return { props: { user } };
}

export default member;
