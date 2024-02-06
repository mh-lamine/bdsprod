import { useEffect } from 'react'
import pic4 from '../assets/images/nosrea/pic4.png'
import pic7 from '../assets/images/nosrea/pic7.png'
import pic14 from '../assets/images/nosrea/pic14.png'

export default function Gallery() {
    // useEffect(() => {
    //     const images = document.querySelectorAll(".gallery-image");

    //     images.forEach((image) => {
    //       image.animate(
    //         {
    //           opacity: [0, 1],
    //           clipPath: ["inset(45% 20% 45% 20%)", "inset(0% 0% 0% 0%)"],
    //         },
    //         {
    //           fill: "both",
    //           timeline: new ViewTimeline({
    //             subject: image,
    //           }),
    //           rangeStart: "entry 25%",
    //           rangeEnd: "cover 50%",
    //         }
    //       );
    //     });
    // }, []);
  return (
    <div className="grid gap-4 py-6 border-b-2">
      <img
        src={pic4}
        className="gallery-image rounded-lg hover:scale-105 transition-transform duration-500"
      />
      <img
        src={pic7}
        className="gallery-image rounded-lg hover:scale-105 transition-transform duration-500"
      />
      <img
        src={pic14}
        className="gallery-image rounded-lg hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
}
