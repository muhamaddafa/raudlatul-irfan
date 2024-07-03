import React from "react";
import ContainerLayout from "@/Layouts/ContainerLayout";
import PageLayout from "@/Layouts/PageLayout";
import Map from "@/Components/Map";
import Footer from "@/Components/Footer";

const Info = (props) => {
    const ekskul = props.ekskul;
    return (
        <>
            <PageLayout title={"Info"} currentPath={"info"}>
                <ContainerLayout>
                    <div className="Sejarah">
                        <div className="mb-8 flex flex-row lg:gap-8 gap-4 items-center">
                            <h2
                                className="lg:text-3xl md:text-2xl text-xl font-extrabold text-[#00923F] whitespace-nowrap
                        "
                            >
                                Sejarah
                            </h2>
                            <p className="bg-[#FEC301] h-1 flex-grow"></p>
                        </div>
                        <div className="grid md:grid-cols-5 lg:gap-10 gap-8">
                            <div className="w-full md:col-span-2">
                                <img
                                    className="w-full md:h-[340px] h-[150px] object-cover rounded-lg mx-auto"
                                    src={`/storage/img/demo(1).jpg`}
                                    alt="DEMO"
                                />
                            </div>
                            <div className="flex flex-col md:justify-between gap-4 md:col-span-3 lg:text-xl text-base font-extrabold">
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
                    </div>
                    <div className="visi-misi">
                        <div className="my-8 flex flex-row lg:gap-8 gap-4 items-center">
                            <h2
                                className="lg:text-3xl text-2xl font-extrabold text-[#00923F] whitespace-nowrap
                        "
                            >
                                Visi
                            </h2>
                            <p className="bg-[#FEC301] h-1 flex-grow"></p>
                            <h2
                                className="lg:text-3xl text-2xl font-extrabold text-[#00923F] whitespace-nowrap
                        "
                            >
                                Misi
                            </h2>
                            <p className="bg-[#FEC301] h-1 flex-grow"></p>
                        </div>
                        <div className="grid md:grid-cols-5 gap-8">
                            <div className="flex flex-col gap-4 md:col-span-2">
                                <div className="md:h-[195px] h-[150px] ">
                                    <img
                                        src={`/storage/img/demo(1).jpg`}
                                        alt="GALERI"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="flex gap-4 md:h-[195px]">
                                    <div className="md:w-1/2">
                                        <img
                                            src={`/storage/img/demo(1).jpg`}
                                            alt="GALERI"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="md:w-1/2">
                                        <img
                                            src={`/storage/img/demo(1).jpg`}
                                            alt="GALERI"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:gap-0 md:justify-between gap-4 md:col-span-3 lg:text-xl text-base font-extrabold">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Tempor nisi fringilla arcu quam venenatis
                                    arcu. Vitae est ut cursus condimentum
                                    egestas. Odio massa consectetur accumsan
                                    lacus eu rutrum. Adipiscing sed aliquam
                                    posuere mauris non nisi. Tempor risus sed et
                                    vitae viverra volutpat.Adipiscing sed
                                    aliquam posuere mauris non nisi. Tempor
                                    risus sed et vitae viverra volutpat.
                                    Adipiscing sed aliquam posuere mauris non
                                    nisi.
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
                    <div className="Ekskul">
                        <div className="my-8 flex flex-row lg:gap-8 gap-4 items-center">
                            <h2 className="lg:text-3xl text-2xl font-extrabold text-[#00923F] whitespace-nowrap">
                                Ekstrakurikuler
                            </h2>
                            <p className="bg-[#FEC301] h-1 flex-grow"></p>
                        </div>
                        <div className="mt-6 grid lg:grid-cols-8 md:grid-cols-6 gap-4 lg:h-[460px]">
                            <div className="flex flex-col md:col-span-2 md:block">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
                                    <img
                                        src={`/storage/img/demo(1).jpg`}
                                        alt="BASKET"
                                        className="object-cover rounded-lg w-full lg:h-[435px] md:h-[530px]"
                                    />
                                    <div className="absolute inset-0 flex items-end p-4 justify-center text-white text-2xl font-extrabold group-hover:opacity-0 transition-opacity duration-300">
                                        <p>Basket</p>
                                    </div>
                                </div>
                                <div className="relative group mt-4 lg:hidden">
                                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
                                    <img
                                        src={`/storage/img/demo(1).jpg`}
                                        alt="EKSKUL"
                                        className="object-cover rounded-lg w-full h-[250px]"
                                    />
                                    <div className="absolute inset-0 flex items-end p-4 justify-center text-white text-2xl font-extrabold group-hover:opacity-0 transition-opacity duration-300">
                                        <p>Voli</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-3">
                                <div className="relative group ">
                                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
                                    <img
                                        src={`/storage/img/demo(1).jpg`}
                                        alt="FUTSAL"
                                        className="w-full lg:h-[210px] md:h-[250px] h-[150px] object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 flex items-end p-4 justify-center text-white text-2xl font-extrabold group-hover:opacity-0 transition-opacity duration-300">
                                        <p>Futsal</p>
                                    </div>
                                </div>
                                <div className="flex lg:flex-row md:flex-col gap-4 h-[210px]">
                                    <div className="relative group lg:w-1/2">
                                        <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
                                        <img
                                            src={`/storage/img/demo(1).jpg`}
                                            alt="BADMINTON"
                                            className="object-cover rounded-lg w-full lg:h-full md:h-[260px]"
                                        />
                                        <div className="absolute inset-0 flex items-end p-4 justify-center text-white text-2xl font-extrabold group-hover:opacity-0 transition-opacity duration-300">
                                            <p>Badminton</p>
                                        </div>
                                    </div>
                                    <div className="relative group lg:w-1/2 lg:mt-0 md:mt-1">
                                        <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
                                        <img
                                            src={`/storage/img/demo(1).jpg`}
                                            alt="TAEKWONDO"
                                            className="object-cover rounded-lg w-full lg:h-full md:h-[250px]"
                                        />
                                        <div className="absolute inset-0 flex items-end p-4 justify-center text-white text-2xl font-extrabold group-hover:opacity-0 transition-opacity duration-300">
                                            <p>Taekwondo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col  gap-4 lg:col-span-1 md:col-span-2">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
                                    <img
                                        src={`/storage/img/demo(1).jpg`}
                                        alt="EKSKUL"
                                        className="object-cover rounded-lg w-full lg:h-[210px] md:h-[250px]"
                                    />
                                    <div className="absolute inset-0 flex items-end p-4 justify-center text-white text-2xl font-extrabold group-hover:opacity-0 transition-opacity duration-300">
                                        <p>Lari</p>
                                    </div>
                                </div>
                                <div className="relative group block lg:hidden">
                                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
                                    <img
                                        src={`/storage/img/demo(1).jpg`}
                                        alt="EKSKUL"
                                        className="object-cover rounded-lg w-full md:h-[530px] h-[210px]"
                                    />
                                    <div className="absolute inset-0 flex items-end p-4 justify-center text-white text-2xl font-extrabold group-hover:opacity-0 transition-opacity duration-300">
                                        <p>Renang</p>
                                    </div>
                                </div>
                                <div className="relative group hidden lg:block">
                                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
                                    <img
                                        src={`/storage/img/demo(1).jpg`}
                                        alt="EKSKUL"
                                        className="object-cover rounded-lg w-full lg:h-[210px]"
                                    />
                                    <div className="absolute inset-0 flex items-end p-4 justify-center text-white text-2xl font-extrabold group-hover:opacity-0 transition-opacity duration-300">
                                        <p>Voli</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-2 md:col-span-3 hidden lg:block">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
                                    <img
                                        src={`/storage/img/demo(1).jpg`}
                                        alt="EKSKUL"
                                        className="object-cover rounded-lg w-full h-[435px]"
                                    />
                                    <div className="absolute inset-0 flex items-end p-4 justify-center text-white text-2xl font-extrabold group-hover:opacity-0 transition-opacity duration-300">
                                        <p>Renang</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Lokasi">
                            <div className="my-8 flex flex-row lg:gap-8 gap-4 items-center">
                                <p className="bg-[#FEC301] h-1 flex-grow"></p>
                                <h2 className="lg:text-3xl text-2xl font-extrabold text-[#00923F] whitespace-nowrap">
                                    Lokasi
                                </h2>
                            </div>
                            <div className="grid lg:grid-cols-3 gap-8">
                                <div>
                                    <div className="flex flex-col lg:col-span-1 bg-[#F8F8F8] shadow-2xl p-8 rounded-lg border-2">
                                        <div className="flex flex-col items-center font-extrabold text-[#00932F]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="2em"
                                                height="3em"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="#FEC301"
                                                    d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8m0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"
                                                />
                                            </svg>
                                            <div className="flex lg:flex-col md:flex-row flex-col lg:gap-0 md:gap-1 text-center">
                                                <p className="lg:text-2xl text-xl">
                                                    MAS RAUDLATUL IRFAN
                                                </p>
                                                <p className="lg:text-2xl text-xl">
                                                    TANGERANG
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-[#FEC301] h-1 w-full my-4"></div>
                                        <div className="text-center">
                                            <p className="lg:text-xl text-lg">
                                                Jl. TMP Aria Wangsakara, Kp.
                                                Lengkong Ulama Rt.001/001,
                                                Lengkong Kulon, Pagedangan,
                                                Tangerang Regency, Banten 15850
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[550px] lg:col-span-2">
                                    <Map />
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
                <Footer />
            </PageLayout>
        </>
    );
};

export default Info;
