import Layout from "../components/layout";
import { Carousel } from "react-bootstrap";

export default function Home() {
  return (
    <Layout title="HomePage">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://2.bp.blogspot.com/-YZm6RWrpYtI/XFYDSVh1fDI/AAAAAAAAB7A/ZLXWq4EPS1A0z1Vztm0yuemDyo7CuFoKACKgBGAs/w2560-h1440-c/russain-blue-cat-24-4K.jpg"
            alt="First slide"
            style={{ height: 620 }}
          />
          <Carousel.Caption>
            <h3>First cat.</h3>
            <p>Cat 1.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.pixel4k.com/wp-content/uploads/2018/11/kitten-cute-4k_1541973649.jpg"
            alt="Third slide"
            style={{ height: 620 }}
          />

          <Carousel.Caption>
            <h3>Second cat.</h3>
            <p>Cat 2.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdna.artstation.com/p/assets/images/images/021/994/978/large/joe-siu-cat-4k-dof-version-edited.jpg?1573709482"
            alt="Third slide"
            style={{ height: 620 }}
          />

          <Carousel.Caption>
            <h3>Third cat.</h3>
            <p>Cat 3.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Layout>
  );
}
