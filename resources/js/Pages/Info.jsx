import React, { useEffect, useState } from "react";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ContainerLayout from "@/Layouts/ContainerLayout";
import PageLayout from "@/Layouts/PageLayout";
import Map from "@/Components/Map";
import Footer from "@/Components/Footer";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Info = (props) => {
    const [ekskul, setEkskul] = useState([]);
    const [galeri, setGaleri] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // request galeri data
    const getEkskul = async (page = 1) => {
        try {
            const response = await axios.get(`/api/ekskul?page=${page}`);
            setEkskul(response.data.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    // request galeri data
    const getGaleri = async () => {
        try {
            const response = await axios.get(`/api/galeri`);
            setGaleri(response.data.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    // get ekskul and galeri data
    useEffect(() => {
        getEkskul();
        getGaleri();
    }, []);

    return (
        <>
            <PageLayout title={"Info"} currentPath={"info"}>
                <ContainerLayout>
                    <section className="Sejarah">
                        <div className="flex flex-row items-center gap-4 mb-8 lg:gap-8">
                            <h2 className="lg:text-3xl md:text-2xl text-xl font-extrabold text-[#00923F] whitespace-nowrap">
                                Sejarah
                            </h2>
                            <p className="bg-[#FEC301] h-1 flex-grow"></p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-5 lg:gap-10">
                            <div className="w-full md:col-span-2">
                                <img
                                    className="w-full md:h-[340px] h-[150px] object-cover rounded-lg mx-auto"
                                    src={`/storage/galeri/${galeri[6]?.gambar_galeri}`}
                                    alt="Sejarah"
                                />
                            </div>
                            <div className="flex flex-col gap-4 text-base font-extrabold md:justify-between md:col-span-3 lg:text-xl">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Tempor nisi fringilla arcu quam venenatis
                                    arcu. Vitae est ut cursus condimentum
                                    egestas. Odio massa consectetur accumsan
                                    lacus eu rutrum. Adipiscing sed aliquam
                                    posuere mauris non nisi. Tempor risus sed et
                                    vitae viverra volutpat. Adipiscing sed
                                    aliquam posuere mauris non nisi. Tempor
                                    risus sed et vitae viverra volutpat.
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
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="visi-misi">
                        <div className="flex flex-row items-center gap-4 my-8 lg:gap-8">
                            <h2 className="lg:text-3xl text-2xl font-extrabold text-[#00923F] whitespace-nowrap">
                                Visi
                            </h2>
                            <p className="bg-[#FEC301] h-1 flex-grow"></p>
                            <h2 className="lg:text-3xl text-2xl font-extrabold text-[#00923F] whitespace-nowrap">
                                Misi
                            </h2>
                            <p className="bg-[#FEC301] h-1 flex-grow"></p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-5">
                            <div className="flex flex-col gap-4 md:col-span-2">
                                <div className="md:h-[195px] h-[150px] ">
                                    <img
                                        src={`/storage/galeri/${galeri[6]?.gambar_galeri}`}
                                        alt="Visi"
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                </div>
                                <div className="flex gap-4 md:h-[195px]">
                                    <div className="md:w-1/2">
                                        <img
                                            src={`/storage/galeri/${galeri[6]?.gambar_galeri}`}
                                            alt="Misi"
                                            className="object-cover w-full h-full rounded-lg"
                                        />
                                    </div>
                                    <div className="md:w-1/2">
                                        <img
                                            src={`/storage/galeri/${galeri[6]?.gambar_galeri}`}
                                            alt="Misi"
                                            className="object-cover w-full h-full rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 text-base font-extrabold lg:gap-0 md:justify-between md:col-span-3 lg:text-xl">
                                <div className="flex flex-col gap-2">
                                    <p className="text-3xl font-bold text-[#00923F]">
                                        Visi
                                    </p>
                                    <p>
                                        Terwujudnya siswa yang cerdas, trampil
                                        dan berakhlak mulia
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="text-3xl font-bold text-[#00923F]">
                                        Misi
                                    </p>
                                    <p>
                                        Dalam mewujudkan visi MAS Raudlatul
                                        Irfan, maka kami memiliki Misi sebagai
                                        berikut
                                    </p>
                                    <ol className="list-outside">
                                        <li>
                                            1. Membentuk siswa yang memiliki
                                            kualitas moral yang akuntabel
                                        </li>
                                        <li>
                                            2. Menciptakan siswa yang cerdas,
                                            terampil dan berwawasan global
                                        </li>
                                        <li>
                                            3. Meningkatkan dan mengembangkan
                                            potensi SDM yang kompetitif sebagai
                                            subjek untuk mecapai tujuan
                                            pembangunan nasional
                                        </li>
                                        <li>
                                            4. Mengantarkan siswa didik menjadi
                                            sumber daya bangsa yang potensial
                                            dan siap pakai dalam menyikapi masa
                                            depannya.
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="Ekskul">
                        <div className="flex flex-row items-center gap-4 my-8 lg:gap-8">
                            <h2 className="lg:text-3xl text-2xl font-extrabold text-[#00923F] whitespace-nowrap">
                                Ekstrakurikuler
                            </h2>
                            <p className="bg-[#FEC301] h-1 flex-grow"></p>
                        </div>

                        <ResponsiveMasonry
                            columnsCountBreakPoints={{
                                350: 2,
                                750: 2,
                                900: 4,
                            }}
                        >
                            <Masonry>
                                {ekskul.map((ekskul) => (
                                    <div
                                        key={ekskul.id}
                                        className="m-2 shadow-xl md:m-4 rounded-xl"
                                    >
                                        <div className="relative group">
                                            <div className="absolute inset-0 transition-opacity duration-300 bg-black rounded-lg opacity-60 group-hover:opacity-0"></div>
                                            <img
                                                src={`/storage/ekskul/${ekskul.gambar_ekskul}`}
                                                alt={ekskul.nama_ekskul}
                                                className="w-full h-auto rounded-lg"
                                            />
                                            <div className="absolute inset-0 flex items-end justify-center p-4 text-base font-extrabold text-white transition-opacity duration-300 md:text-2xl group-hover:opacity-0">
                                                <p>{ekskul.nama_ekskul}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </section>
                    <section className="Lokasi">
                        <div className="flex flex-row items-center gap-4 mt-4 mb-8 lg:gap-8">
                            <p className="bg-[#FEC301] h-1 flex-grow"></p>
                            <h2 className="lg:text-3xl text-2xl font-extrabold text-[#00923F] whitespace-nowrap">
                                Lokasi
                            </h2>
                        </div>
                        <div className="grid gap-8 lg:grid-cols-3">
                            <div>
                                <div className="flex flex-col lg:col-span-1 bg-[#F8F8F8] shadow-2xl p-8 rounded-lg border-2">
                                    <div className="flex flex-col items-center font-extrabold text-[#00932F]">
                                        <MapPinIcon className="size-9 mb-3 text-[#FEC301]" />
                                        <div className="flex flex-col text-center lg:flex-col md:flex-row lg:gap-0 md:gap-1">
                                            <p className="text-xl lg:text-2xl">
                                                MAS RAUDLATUL IRFAN
                                            </p>
                                            <p className="text-xl lg:text-2xl">
                                                TANGERANG
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-[#FEC301] h-1 w-full my-4"></div>
                                    <div className="text-center">
                                        <p className="text-lg lg:text-xl">
                                            Jl. TMP Aria Wangsakara, Kp.
                                            Lengkong Ulama Rt.001/001, Lengkong
                                            Kulon, Pagedangan, Tangerang
                                            Regency, Banten 15850
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[550px] lg:col-span-2">
                                <Map />
                            </div>
                        </div>
                    </section>
                </ContainerLayout>
                <Footer />
            </PageLayout>
        </>
    );
};

export default Info;
