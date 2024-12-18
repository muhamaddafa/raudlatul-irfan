import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import PageLayout from "@/Layouts/PageLayout";
import ContainerLayout from "@/Layouts/ContainerLayout";
import Card from "@/Components/Card";
import Button from "@/Components/Button";
import Footer from "@/Components/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Home = (props) => {
    // artikel data
    const artikel = props.artikel;

    // galeri data
    const [galeri, setGaleri] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // request galeri data
    const getGaleri = async (page = 1) => {
        try {
            const response = await axios.get(`/api/galeri?page=${page}`);
            setGaleri(response.data.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    // get galeri data
    useEffect(() => {
        getGaleri();
    }, []);

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

    return (
        <>
            <PageLayout title={"Home"} currentPath={"home"}>
                <ContainerLayout className="flex-grow">
                    <section className="relative w-full h-auto">
                        <div className="absolute inset-0 bg-black opacity-70 rounded-3xl"></div>
                        <img
                            src={`/storage/img/header.jpg`}
                            alt="HOME"
                            className="absolute inset-0 w-full h-full object-cover rounded-3xl -z-10"
                        />
                        <div className="relative flex flex-col lg:gap-10 gap-6 p-10 lg:mr-82">
                            <h1 className="lg:text-4xl text-lg font-extrabold text-[#00923F] whitespace-nowrap ">
                                MAS Raudlatul Irfan
                            </h1>
                            <p className="lg:text-5xl text-xl text-white font-extrabold ">
                                Lorem ipsum dolor sit amet consectetur.
                                Pellentesque a cum mattis fames malesuada.
                                Consectetur sed Pellentesque a cum mattis fames
                            </p>
                            <div>
                                <a
                                    href="https://linktr.ee/masraudlatulirfan.tng"
                                    target="_blank"
                                >
                                    <Button className="px-4 py-2 lg:text-2xl text-base font-extrabold whitespace-nowrap">
                                        Daftar Sekarang
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="Sambutan">
                        <div className="my-8 flex flex-row lg:gap-8 gap-4 items-center">
                            <h2
                                className="lg:text-2xl text-xl font-extrabold text-[#00923F] whitespace-nowrap
                        "
                            >
                                Sambutan Kepala Madrasah
                            </h2>
                            <p className="bg-[#FEC301] h-1 flex-grow"></p>
                        </div>
                        <div className="mt-4 flex lg:flex-row flex-col lg:gap-2 gap-8 justify-center">
                            <div className="w-full flex justify-center">
                                <div className="relative">
                                    <img
                                        className="lg:w-[280px] lg:h-full w-[240px] h-full object-cover rounded-lg mx-auto"
                                        src={`/storage/img/kamad.jpg`}
                                        alt="KEPALA MADRASAH"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full bg-[#00923F] text-white lg:text-xl text-lg px-2 py-2 rounded-lg">
                                        <p className="text-center whitespace-nowrap">
                                            Muhibudin, S.Th.I., M.M.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:text-xl text-base justify-center font-extrabold gap-2 ms-4 text-justify">
                                <p>
                                    Teriring puja dan puji syukur kepada Allah
                                    SWT, atas segala karunia dan kelimpahan
                                    rizeki yang telah diberikan kepada kita
                                    semua. Shalawat teriring salam terlimpah
                                    kepada Nabi Muhammad SAW.
                                </p>
                                <p>
                                    Merupakan suatu kehormatan bagi saya untuk
                                    mengemban tanggung jawab dalam merintis dan
                                    memimpin sekolah yang bernama MAS Raudlatul
                                    Irfan Kec. Pagedangan Kabupaten Tangerang.
                                    Sekolah ini memiliki visi yang luar biasa
                                    yaitu terwujudnya siswa yang cerdas, trampil
                                    dan berakhlak mulia.
                                </p>
                                <p>
                                    Salam sambutan kami tidak akan pernah cukup
                                    untuk menjelaskan semua informasi tentang
                                    sekolah. Sejak berdiri tahun 1987, MAS
                                    Raudlatul Irfan berkomitmen untuk terus
                                    meningkatkan kualitas dan standarnya.
                                </p>
                                <p>
                                    Sebagai komunitas orang tua, siswa, guru,
                                    dan staf, kami yakin mampu mempromosikan
                                    kemitraan yang efektif untuk mendorong
                                    lingkungan belajar yang aman dan produktif
                                    dalam pendidikan. Kolaborasi tersebut
                                    bertujuan untuk memfasilitasi lebih jauh
                                    peluang setiap orang untuk mencapai yang
                                    terbaik dan sukses dalam perjalanan
                                    pembelajaran serta mengembangkan kemampuan
                                    kreatif individu. Memiliki dukungan kuat
                                    dari pendiri sekolah dan kombinasi kemitraan
                                    yang efektif, kami berharap dapat dipercaya
                                    dilingkungan kami. Marilah bergabung menjadi
                                    bagian dari MAS Raudlatul Irfan, di mana
                                    kami dapat berbagi semangat untuk mendidik
                                    calon pemimpin masa depan dengan karakter
                                    Islami yang kokoh yang akan memberikan
                                    kontribusi yang signifikan dan positif bagi
                                    masyarakat, insyaAllah. Semoga Allah
                                    meridhoi setiap langkah kita dengan berkah
                                    dengan ketentuan-Nya. Aamiin.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="Artikel">
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
                            className="flex items-center gap-2 mb-6 text-[#00923F] lg:text-xl text-lg font-extrabold hover:text-green-500 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
                        >
                            Lihat Semua Artikel
                            <ChevronRightIcon className="size-4" />
                        </Link>
                        {/* desktop and tablet view*/}
                        <div className="hidden lg:block md:block">
                            <div className="grid lg:grid-cols-4 gap-8 lg:mt-8 mt-6">
                                {artikel.map((artikel) => (
                                    <Card key={artikel.id} artikel={artikel} />
                                ))}
                            </div>
                        </div>
                        {/* mobile view */}
                        <div className="block md:hidden">
                            <Slider {...settings}>
                                {artikel.map((artikel) => (
                                    <Card key={artikel.id} artikel={artikel} />
                                ))}
                            </Slider>
                        </div>
                    </section>
                    <section className="Galeri">
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
                            <ChevronRightIcon className="size-4" />
                        </Link>
                        <div className="mt-5">
                            <ResponsiveMasonry
                                columnsCountBreakPoints={{
                                    350: 2,
                                    750: 3,
                                    900: 4,
                                }}
                            >
                                <Masonry>
                                    {galeri.map((galeri) => (
                                        <div
                                            key={galeri.id}
                                            className="md:m-4 m-2 shadow-xl rounded-xl"
                                        >
                                            <img
                                                src={`/storage/galeri/${galeri.gambar_galeri}`}
                                                className="w-full h-auto rounded-xl"
                                            />
                                        </div>
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>
                        </div>
                    </section>
                </ContainerLayout>
                <Footer />
            </PageLayout>
        </>
    );
};

export default Home;
