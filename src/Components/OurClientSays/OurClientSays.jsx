import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../CSS/Slider.css";
import { BsFillArrowRightCircleFill ,BsFillArrowLeftCircleFill} from "react-icons/bs";


const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BsFillArrowLeftCircleFill style={{ color: "#024d81", fontSize: "45px" }}/>
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BsFillArrowRightCircleFill style={{ color: "#024d81", fontSize: "45px" }}/>
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h3 style={{ marginBottom: 20 }}>TESTIMONIALS</h3>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} style={{position:"normal"}} dots>
          <Card style={{ border: '1px solid black'}} img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card style={{ border: '1px solid black'}} img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
          <Card style={{ border: '1px solid black'}} img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
          <Card style={{ border: '1px solid black'}} img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
          <Card style={{ border: '1px solid black'}} img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
          <Card style={{ border: '1px solid black'}} img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
          <Card style={{ border: '1px solid black'}} img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
          <Card style={{ border: '1px solid black'}} img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
        padding:"0.3rem",
        borderRadius:"20px",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        margin:"0.3rem"
      }}
    >
      <img src={img}  style={{
          borderRadius:"50%",
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
          
        }} alt="" />
      <p>
        Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
        Media Analyst
      </p>
    </div>
  );
};

export default Testimonial;
