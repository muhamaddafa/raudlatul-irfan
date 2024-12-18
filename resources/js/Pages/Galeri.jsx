import React, { useEffect, useState } from "react";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ContainerLayout from "@/Layouts/ContainerLayout";
import PageLayout from "@/Layouts/PageLayout";
import Footer from "@/Components/Footer";
import Pagination from "@/Components/Pagination";

const Galeri = () => {
    const [galeri, setGaleri] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // request galeri data
    const getGaleri = async (page = 1) => {
        try {
            const response = await axios.get(`/api/galeri?page=${page}`);
            setGaleri(response.data.data);
            setTotalPages(response.data.last_page); // Update total pages from API response
            setCurrentPage(page); // Update current page
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

    // pagination
    const onPageChange = (page) => {
        getGaleri(page);
    };

    return (
        <>
            <PageLayout title={"Galeri"} currentPath={"galeri"}>
                <ContainerLayout className="flex-grow">
                    <div className="relative w-full h-auto">
                        <div className="absolute inset-0 bg-black opacity-70 rounded-3xl"></div>
                        <img
                            src={`/storage/img/header.jpg`}
                            alt="HOME"
                            className="absolute inset-0 w-full h-full object-cover rounded-3xl -z-10"
                        />
                        <div className="relative md:p-32 p-16">
                            <p className="md:text-6xl text-4xl text-center text-white font-extrabold ">
                                GALLERY
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-row lg:gap-8 gap-4 items-center">
                        <p className="bg-[#FEC301] h-1 md:w-28 w-12"></p>
                        <h2 className="lg:text-2xl text-xl font-extrabold text-[#00923F] whitespace-nowrap">
                            Galeri
                        </h2>
                        <p className="bg-[#FEC301] h-1 flex-grow"></p>
                    </div>

                    {/* Gallery Masonry */}
                    <div className="mt-4">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
                        >
                            <Masonry>
                                {galeri.map((item) => (
                                    <div
                                        key={item.id}
                                        className="m-4 shadow-xl rounded-xl"
                                    >
                                        <img
                                            src={`/storage/galeri/${item.gambar_galeri}`}
                                            alt=""
                                            className="w-full h-auto rounded-xl"
                                        />
                                    </div>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                    <div className="flex justify-center">
                        {/* Pagination */}
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

export default Galeri;
