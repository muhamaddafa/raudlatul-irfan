import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import moment from "moment";
import "moment/locale/id";
import ContainerLayout from "@/Layouts/ContainerLayout";
import PageLayout from "@/Layouts/PageLayout";
import Card from "@/Components/Card";
import Footer from "@/Components/Footer";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";

const DetailArtikel = ({ artikel, previous_articles }) => {
    const { props } = usePage();
    const [currentArtikel, setCurrentArtikel] = useState(artikel);
    const [artikels, setArtikels] = useState(previous_articles);

    useEffect(
        () => {
            setCurrentArtikel(props.artikel);
            setArtikels(props.previous_articles);
        },
        [props.artikel],
        [props.previous_articles]
    );

    // Format tanggal
    const formattedDate = moment(currentArtikel.created_at)
        .locale("id")
        .format("dddd, DD MMM YYYY HH:mm [WIB]");

    return (
        <>
            <PageLayout
                title={currentArtikel.judul_artikel}
                currentPath={`berita/${currentArtikel.link_artikel}`}
            >
                <ContainerLayout className="flex-grow">
                    <div className="headline">
                        <div className="flex items-center mb-4 font-semibold text-gray-500 md:text-lg text-base">
                            <Link
                                href="/"
                                className="hover:text-[#00932F] transition duration-300"
                            >
                                Beranda
                            </Link>
                            <ChevronRightIcon className="size-4 mx-2" />
                            <Link
                                href="/berita"
                                className="hover:text-[#00932F] transition duration-300"
                            >
                                Berita
                            </Link>
                            <ChevronRightIcon className="size-4 mx-2" />
                            <p className="text-[#00932F]">
                                {currentArtikel.kategori_artikel}
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="md:text-4xl text-2xl font-extrabold">
                                {currentArtikel.judul_artikel}
                            </h1>
                            <div className="md:text-xl text-lg">
                                <div className="flex gap-2">
                                    <p>Oleh</p>
                                    <h2 className="text-[#00932F] font-extrabold">
                                        {currentArtikel.penulis}
                                    </h2>
                                </div>
                                <p className="text-bold text-gray-500">
                                    {formattedDate}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:grid grid-cols-9 gap-8">
                        <div className="lg:col-span-6">
                            <div className="w-full lg:mt-8 mt-4">
                                <img
                                    src={`/storage/artikel/${currentArtikel.gambar_artikel}`}
                                    alt={currentArtikel.judul_artikel}
                                />
                            </div>
                            <div className="mt-10">
                                <ReactMarkdown className="md:text-lg text-base flex flex-col gap-2">
                                    {currentArtikel.isi_artikel}
                                </ReactMarkdown>
                            </div>
                        </div>
                        <div className="mt-6 mb-8 flex lg:gap-8 gap-4 items-center lg:hidden">
                            <p className="bg-[#FEC301] h-1 flex-grow"></p>
                            <h2 className="lg:text-2xl text-xl font-extrabold text-[#00923F] whitespace-nowrap">
                                Artikel Sebelumnya
                            </h2>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="mt-8">
                                {artikels.map((artikels) => (
                                    <Card
                                        key={artikels.id}
                                        artikel={artikels}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
                <Footer />
            </PageLayout>
        </>
    );
};

export default DetailArtikel;
