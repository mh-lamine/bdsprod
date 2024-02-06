import { useEffect } from 'react'

export default function Gallery() {
    useEffect(() => {
        const images = document.querySelectorAll(".gallery-image");

        images.forEach((image) => {
          image.animate(
            {
              opacity: [0, 1],
              clipPath: ["inset(45% 20% 45% 20%)", "inset(0% 0% 0% 0%)"],
            },
            {
              fill: "both",
              timeline: new ViewTimeline({
                subject: image,
              }),
              rangeStart: "entry 25%",
              rangeEnd: "cover 50%",
            }
          );
        });
    }, []);
  return (
    <div className="grid gap-4 py-6 border-b-2">
      <img
        src="src/assets/images/nosrea/pic4.JPG"
        className="gallery-image rounded-lg hover:scale-105 transition-transform duration-500"
      />
      <img
        src="src/assets/images/nosrea/pic7.JPG"
        className="gallery-image rounded-lg hover:scale-105 transition-transform duration-500"
      />
      <img
        src="src/assets/images/nosrea/pic14.JPG"
        className="gallery-image rounded-lg hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
}
