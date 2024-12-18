import React, { useState, useEffect } from "react";
import axios from "axios";
import ContainerLayout from "@/Layouts/ContainerLayout";
import PageLayout from "@/Layouts/PageLayout";
import Card from "@/Components/Card";
import Footer from "@/Components/Footer";
import Pagination from "@/Components/Pagination";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Berita = (props) => {
    const [artikel, setArtikel] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // request artikel data
    const getArtikel = async (page = 1) => {
        try {
            const response = await axios.get(`/api/artikel?page=${page}`);
            setArtikel(response.data.data);
            setTotalPages(response.data.last_page); // Update total pages from API response
            setCurrentPage(page); // Update current page
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    // get artikel data
    useEffect(() => {
        getArtikel();
    }, []);

    // pagination
    const onPageChange = (page) => {
        getArtikel(page);
    };

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true, // dots on mobile devices
                    infinite: artikel.length > 1,
                },
            },
        ],
    };

    return (
        <>
            <PageLayout title={"Berita"} currentPath={"berita"}>
                <ContainerLayout className="flex-grow">
                    <div className="relative w-full h-auto">
                        <div className="absolute inset-0 bg-black opacity-70 rounded-3xl"></div>
                        <img
                            src={`/storage/img/header.jpg`}
                            alt="HOME"
                            className="absolute inset-0 w-full h-full object-cover rounded-3xl -z-10"
                        />
                        <div className="relative flex flex-col gap-4 md:py-20 md:px-16 py-10 px-8 lg:mr-82">
                            <h1 className="lg:text-3xl text-lg font-extrabold text-[#00923F] whitespace-nowrap ">
                                MAS Raudlatul Irfan
                            </h1>
                            <p className="lg:text-4xl text-xl text-white font-extrabold ">
                                Lorem ipsum dolor sit amet consectetur.
                                Pellentesque a cum mattis fames malesuada.
                                Consectetur sed Pellentesque a cum mattis fames
                            </p>
                        </div>
                    </div>
                    <div className="my-8 flex flex-row lg:gap-8 gap-4 items-center">
                        <p className="bg-[#FEC301] h-1 flex-grow"></p>
                        <h2 className="lg:text-2xl text-xl font-extrabold text-[#00923F] whitespace-nowrap">
                            Artikel Terbaru
                        </h2>
                    </div>
                    {/* desktop and tablet view*/}
                    <div className="hidden lg:block md:block">
                        <div className="grid lg:grid-cols-4 gap-8 lg:mt-8 mt-6">
                            {artikel.map((artikel) => (
                                <Card
                                    key={artikel.id}
                                    artikel={artikel}
                                    className="shadow-xl"
                                />
                            ))}
                        </div>
                    </div>
                    {/* mobile view */}
                    <div className="block md:hidden">
                        <Slider {...settings}>
                            {artikel.map((artikel) => (
                                <Card
                                    key={artikel.id}
                                    artikel={artikel}
                                    className="border-green-700"
                                />
                            ))}
                        </Slider>
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-center">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={onPageChange}
                        />
                    </div>
                </ContainerLayout>
                <Footer />
            </PageLayout>
        </>
    );
};

export default Berita;
