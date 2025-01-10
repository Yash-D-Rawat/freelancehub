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
        img: "/images/account.png",
    },
    {
        id: 2,
        comment: "This platform completely transformed my freelancing career. I went from struggling to find clients to landing high-paying projects every month!",
        name: "Shravani Nikam",
        role: "Digital Marketer",
        img: "/images/account.png",
    },
    {
        id: 3,
        comment: "The bidding system is amazing! It allowed me to showcase my skills competitively, and now I have a steady stream of work.",
        name: "Mridula Raul",
        role: "Web Developer",
        img: "/images/account.png",
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
        // centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
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
                <h1 className="text-4xl font-bold text-center mb-10">
                    What Our Users Say
                </h1>
                <div className="w-[80%] md:px-5">
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex flex-col justify-center items-center md:p-5 h-full"
                            >
                                <div className="flex flex-col justify-around bg-white bg-opacity-10 shadow-lg rounded-[10%] p-6 text-center transform transition duration-300 hover:scale-105 h-[500px]">
                                    <p className="italic text-white text-3xl mb-4">
                                        "{testimonial.comment}"
                                    </p>

                                    <div className="flex w-full justify-center gap-4">
                                        <img
                                            src={testimonial.img}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full mb-4"
                                        />
                                        <div className="flex flex-col items-start">
                                            <h2 className="font-bold text-3xl text-green-400 text-start">{testimonial.name}</h2>
                                            <p className="text-lg ">{testimonial.role}</p>
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
