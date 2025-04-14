"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    slideToslide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slideToslide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slideToslide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slideToslide: 1,
  },
};
const ReviewSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
    >
      <ReviewCard image="/images/c1.png" name="John Doe" role="Founder Codex" />
      <ReviewCard image="/images/c2.png" name="Jason Doe" role="Founder TechBoxs" />
      <ReviewCard image="/images/c3.png" name="Jane Doe" role="Co-Founder Devex" />
    </Carousel>
  );
};

export default ReviewSlider;
