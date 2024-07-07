import React, { useState } from "react";
import ContainerLayout from "@/Layouts/ContainerLayout";
import PageLayout from "@/Layouts/PageLayout";
import Button from "@/Components/Button";
import Footer from "@/Components/Footer";
import Pagination from "@/Components/Pagination";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Berita = (props) => {
    const { artikel } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(artikel.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const slicedArtikel = artikel.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: (dots) => (
            <ul style={{ margin: "0px" }}>
                {[...Array(5)].map((_, index) => (
                    <li key={index}>{dots[index]}</li>
                ))}
            </ul>
        ),
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false, //  dots on mobile
                    infinite: true,
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
                            src={`/storage/img/demo(1).jpg`}
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
                    <div className="hidden lg:block md:block">
                        {/* Tampilkan grid di layar besar */}
                        <div className="grid lg:grid-cols-3 gap-8 lg:mt-8 mt-6">
                            {slicedArtikel.map((artikel) => (
                                <div
                                    key={artikel.id}
                                    className="flex lg:flex-col rounded-lg bg-white shadow-xl border-gray-500"
                                >
                                    <img
                                        src={`/storage/img/${artikel.gambar_artikel}`}
                                        alt={artikel.judul_artikel}
                                        className="w-full h-[240px] object-cover rounded-t-lg"
                                    />
                                    <div className="flex flex-col gap-2 p-4">
                                        <h3 className="lg:text-xl text-base font-extrabold text-[#00923F]">
                                            {artikel.kategori_artikel}
                                        </h3>
                                        <h3 className="lg:text-3xl text-lg font-extrabold">
                                            {artikel.judul_artikel}
                                        </h3>
                                        <p className="text-gray-500 font-extrabold lg:text-base text-sm">
                                            {artikel.isi_artikel.substring(
                                                0,
                                                500
                                            )}
                                            ...
                                        </p>
                                        <div className="flex justify-end">
                                            <a href={artikel.link_artikel}>
                                                <Button className="px-4 py-1 mt-2 lg:text-lg text-base font-semibold">
                                                    Selengkapnya
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="block md:hidden">
                        <Slider {...settings}>
                            {artikel.map((artikel) => (
                                <div
                                    key={artikel.id}
                                    className="flex flex-col rounded-lg bg-white border-2 border-green-700"
                                >
                                    <img
                                        src={`/storage/img/${artikel.gambar_artikel}`}
                                        alt={artikel.judul_artikel}
                                        className="h-[220px] w-full object-cover rounded-t-lg"
                                    />
                                    <div className="flex flex-col gap-2 p-4">
                                        <h3 className="lg:text-xl text-base font-extrabold text-[#00923F]">
                                            {artikel.kategori_artikel}
                                        </h3>
                                        <h3 className="lg:text-3xl text-lg font-extrabold">
                                            {artikel.judul_artikel}
                                        </h3>
                                        <p className="text-gray-500 font-extrabold lg:text-base text-sm">
                                            {artikel.isi_artikel.substring(
                                                0,
                                                350
                                            )}
                                            ...
                                        </p>
                                        <div className="flex justify-end">
                                            <a href={artikel.link_artikel}>
                                                <Button className="px-4 py-1 mt-2 lg:text-lg text-base font-semibold">
                                                    Selengkapnya
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="hidden md:block">
                        {/* Pagination controls */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </ContainerLayout>
                <Footer />
            </PageLayout>
        </>
    );
};

export default Berita;
