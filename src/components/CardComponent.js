import { Card, Button } from "react-bootstrap";
import menu1 from "../assets/Images/menu1.jpg";
import menu2 from "../assets/Images/menu2.jpg";
import menu3 from "../assets/Images/menu3.jpg";
import menu4 from "../assets/Images/menu4.jpg";

function CardComponent() {
  const cardTextStyle = {
    fontFamily: "Times New Roman",
  };

  return (
    <div className="container p-5">
      <h1 className="text-left p-3 text-white">Our Menu</h1>
      <div className="d-flex">
        <Card style={{ width: "18rem" }} className="mx-3">
          <Card.Img variant="top" src={menu1} />
          <Card.Body>
            <Card.Title style={cardTextStyle}>Margenrita Pizza</Card.Title>
            <Card.Text style={cardTextStyle}>Price: $19.99</Card.Text>
            <Button variant="dark"  className="w-100 text-center">Buy</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3">
          <Card.Img variant="top" src={menu2} />
          <Card.Body>
            <Card.Title style={cardTextStyle}>Mushroom Pizza</Card.Title>
            <Card.Text style={cardTextStyle}>Price: $19.99</Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3">
          <Card.Img variant="top" src={menu3} />
          <Card.Body>
            <Card.Title style={cardTextStyle}>Hawaiian Pizza</Card.Title>
            <Card.Text style={cardTextStyle}>Price: $19.99</Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3">
          <Card.Img variant="top" src={menu4} />
          <Card.Body>
            <Card.Title style={cardTextStyle}>Pesto Pizza</Card.Title>
            <Card.Text style={cardTextStyle}>Price: $19.99</Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardComponent;
