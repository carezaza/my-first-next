import { Card } from "react-bootstrap";

export default function memberCard({ item }) {
  return (
    <Card style={{ height: "100%", width: "auto" }}>
      <Card.Img
        variant="top"
        src={`https://robohash.org/cat/${item.id}?set=set4`}
      />
      <Card.Body style={{ borderTop: "1px solid #ccc" }}>
        <Card.Title>{item.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
