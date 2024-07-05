import { Link } from "@inertiajs/react";
import PageLayout from "@/Layouts/PageLayout";
import ContainerLayout from "@/Layouts/ContainerLayout";
import React from "react";
import Button from "@/Components/Button";
import Footer from "@/Components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480, // Hanya berlaku di layar <= 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                },
            },
        ],
    };

    const artikel = props.artikel;

    return (
        <>
            <PageLayout title={"Home"} currentPath={"home"}>
                <ContainerLayout className="flex-grow">
                    <div className="relative w-full h-auto">
                        <div className="absolute inset-0 bg-black opacity-70 rounded-3xl"></div>
                        <img
                            src={`/storage/img/demo(1).jpg`}
                            alt="HOME"
                            className="absolute inset-0 w-full h-full object-cover rounded-3xl -z-10"
                        />
                        <div className="relative flex flex-col lg:gap-14 gap-8 p-8 lg:mr-82">
                            <h1 className="lg:text-4xl text-lg font-extrabold text-[#00923F] whitespace-nowrap ">
                                MAS Raudlatul Irfan
                            </h1>
                            <p className="lg:text-5xl text-xl text-white font-extrabold ">
                                Lorem ipsum dolor sit amet consectetur.
                                Pellentesque a cum mattis fames malesuada.
                                Consectetur sed Pellentesque a cum mattis fames
                            </p>
                            <div>
                                <Link href="/ppdb">
                                    <Button className="px-4 py-2 lg:text-2xl text-base font-extrabold whitespace-nowrap">
                                        Daftar Sekarang
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="Sambutan">
                        <div className="my-8 flex flex-row lg:gap-8 gap-4 items-center">
                            <h2
                                className="lg:text-2xl text-xl font-extrabold text-[#00923F] whitespace-nowrap
                        "
                            >
                                Sambutan Kepala Madrasah
                            </h2>
                            <p className="bg-[#FEC301] h-1 flex-grow"></p>
                        </div>
                        <div className="mt-4 flex lg:flex-row flex-col lg:gap-32 gap-14 justify-center">
                            <div className="w-full flex justify-center">
                                <div className="relative">
                                    <img
                                        className="lg:w-[260px] lg:h-[300px] w-[240px] h-[250px] object-cover rounded-lg mx-auto"
                                        src={`/storage/img/kamad.jpg`}
                                        alt="KEPALA MADRASAH"
                                    />
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#00923F] text-white lg:text-xl text-lg px-2 py-2 rounded-lg w-full">
                                        <p className="text-center whitespace-nowrap">
                                            Muhibudin, S.Th.I., M.M.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:text-xl text-base font-extrabold gap-6">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Tempor nisi fringilla arcu quam venenatis
                                    arcu. Vitae est ut cursus condimentum
                                    egestas. Odio massa consectetur accumsan
                                    lacus eu rutrum. Adipiscing sed aliquam
                                    posuere mauris non nisi. Tempor risus sed et
                                    vitae viverra volutpat
                                </p>
                                <p>
                                    Velit vitae ut adipiscing ac quis sed.
                                    Tempor gravida sit sed nulla ipsum aliquet
                                    sagittis enim eu. Duis faucibus at non
                                    feugiat. Fermentum scelerisque pulvinar
                                    vestibulum vitae faucibus at ipsum eu
                                    auctor. Nullam sit scelerisque facilisis
                                    euismod scelerisque. Urna volutpat mauris
                                    blandit malesuada at non eleifend blandit.
                                    Nisl nunc in quis magna dignissim. Fermentum
                                    scelerisque pulvinar vestibulum vitae
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="Artikel">
                        <div className="mt-8 mb-4 flex flex-row gap-8 items-center">
                            <p className="bg-[#FEC301] h-1 flex-grow"></p>
                            <h2
                                className="lg:text-2xl text-xl font-extrabold text-[#00923F] whitespace-nowrap
                        "
                            >
                                Artikel Terbaru
                            </h2>
                        </div>
                        <Link
                            href="/berita"
                            className="flex items-center gap-2 text-[#00923F] lg:text-xl text-lg font-extrabold hover:text-green-500 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
                        >
                            Lihat Semua Artikel
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m10 17l5-5m0 0l-5-5"
                                ></path>
                            </svg>
                        </Link>
                        <div className="hidden lg:block md:block">
                            {/* Tampilkan grid di layar besar */}
                            <div className="grid lg:grid-cols-3 gap-8 lg:mt-8 mt-6">
                                {artikel.map((artikel) => (
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
                                        className="flex flex-col rounded-lg bg-white mt-6 border border-2 border-green-700"
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
                    </div>
                    <div className="Galeri">
                        <div className="mt-10 mb-4 flex flex-row gap-8 items-center">
                            <h2
                                className="lg:text-2xl text-xl font-extrabold text-[#00923F] whitespace-nowrap
                        "
                            >
                                Galeri
                            </h2>
                            <p className="bg-[#FEC301] h-1 flex-grow"></p>
                        </div>
                        <Link
                            href="/galeri"
                            className="text-[#00923F] lg:text-xl text-lg font-extrabold flex justify-end items-center gap-2 hover:text-green-500 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
                        >
                            Lihat Semua Galeri
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m10 17l5-5m0 0l-5-5"
                                ></path>
                            </svg>
                        </Link>
                        <div className="mt-6 grid md:grid-cols-8 md:gap-8 gap-4 lg:h-[460px]">
                            <div className="flex flex-col lg:gap-8 gap-4 md:col-span-3">
                                <div className="h-[210px]">
                                    <img
                                        src={`/storage/img/demo(1).jpg`}
                                        alt="GALERI"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="flex lg:gap-8 gap-4 h-[210px]">
                                    <div className="w-1/2">
                                        <img
                                            src={`/storage/img/demo(1).jpg`}
                                            alt="GALERI"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <img
                                            src={`/storage/img/demo(1).jpg`}
                                            alt="GALERI"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:gap-8 gap-4 md:col-span-2">
                                <img
                                    src={`/storage/img/demo(1).jpg`}
                                    alt="GALERI"
                                    className="object-cover rounded-lg w-full h-[210px]"
                                />
                                <img
                                    src={`/storage/img/demo(1).jpg`}
                                    alt="GALERI"
                                    className="object-cover rounded-lg w-full h-[210px] hidden md:block"
                                />
                            </div>
                            <div className="md:col-span-1 block md:hidden lg:block">
                                <img
                                    src={`/storage/img/demo(1).jpg`}
                                    alt="GALERI"
                                    className="object-cover rounded-lg w-full h-[452px]"
                                />
                            </div>
                            <div className="lg:col-span-2 md:col-span-3 hidden md:block">
                                <img
                                    src={`/storage/img/demo(1).jpg`}
                                    alt="GALERI"
                                    className="object-cover rounded-lg w-full lg:h-[452px] md:h-[438px]"
                                />
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
                <Footer></Footer>
            </PageLayout>
        </>
    );
};

export default Home;
