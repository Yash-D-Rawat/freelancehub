import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = [
    {
        id: 1,
        comment: "As a startup founder, I needed quality freelancers fast. This platform made hiring a seamless experience with incredible talent at my fingertips.",
        name: "Manav Shah",
        role: "Startup CEO",
        img: "/images/person/m1.jpg",
    },
    {
        id: 2,
        comment: "This platform transformed my freelancing career. I went from struggling to find clients to landing high-paying projects every month!",
        name: "Shravani Nikam",
        role: "Digital Marketer",
        img: "/images/shravani.jpeg",
    },
    {
        id: 3,
        comment: "The bidding system is amazing! It allowed me to showcase my skills competitively, and now I have a steady stream of work.",
        name: "Mridula Raul",
        role: "Web Developer",
        img: "/images/mridula.jpeg",
    },
];

function Testimonials() {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <div className="relative h-fit w-full overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/videos/testimonial.mp4"
                autoPlay
                loop
                muted
            />

            <div className="absolute top-0 left-0 w-full h-full bg-green-950 bg-opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-4xl md:text-5xl font-bold text-center my-10">
                    What Our Users Say
                </h1>
                <div className="w-full md:w-[80%] px-2 md:px-3">
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex flex-col justify-center items-center p-4 h-full"
                            >
                                <div className="flex flex-col justify-around bg-white bg-opacity-10 shadow-lg rounded-[10%] p-6 text-center transform transition duration-300 hover:scale-105 h-[450px] md:h-[500px]">
                                    <p className="italic text-white text-lg md:text-2xl lg:text-3xl mb-4">
                                        "{testimonial.comment}"
                                    </p>
                                    <div className="flex flex-col md:flex-row w-full justify-center gap-4 items-center">
                                        <img
                                            src={testimonial.img}
                                            alt={testimonial.name}
                                            className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4 md:mb-0"
                                        />
                                        <div className="flex flex-col items-center md:items-start">
                                            <h2 className="font-bold text-lg md:text-xl lg:text-3xl text-green-400 text-center md:text-start">
                                                {testimonial.name}
                                            </h2>
                                            <p className="text-sm md:text-lg">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
