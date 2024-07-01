import React from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";

const Footer = () => {
    return (
        <>
            <div className="bg-[#E6F4EC] text-[#00932F] mt-4 p-12 px-16 grid md:grid-cols-3 gap-8">
                <div className="flex flex-col md:gap-8 gap-4 font-extrabold">
                    <div className="flex md:flex-row flex-col lg:gap-4 gap-2 md:items-start items-center">
                        <div className="w-20">
                            <ApplicationLogo />
                        </div>
                        <div className="lg:text-2xl text-base flex md:flex-col flex-row md:justify-between lg:gap-2 gap-1">
                            <h1>MAS</h1>
                            <h1 className="whitespace-nowrap">
                                RAUDLATUL IRFAN
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:items-start items-center">
                        <h1 className="lg:text-lg text-base">
                            In Collaboration With
                        </h1>
                        <img
                            src={`/storage/img/umn.png`}
                            alt="UMN LOGO"
                            className="lg:w-44 w-40"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-base md:items-start items-center md:ml-6">
                    <h1 className="lg:text-xl text-lg font-extrabold">LINKS</h1>
                    <Link href="/">Beranda</Link>
                    <Link href="/info">Informasi Sekolah</Link>
                    <Link href="/berita">Berita</Link>
                    <Link href="/galeri">Galeri</Link>
                    <Link href="/ppdb">PPDB</Link>
                    <Link href="/kontak">Kontak Kami</Link>
                </div>
                <div className="flex flex-col gap-2 md:text-start text-center">
                    <h1 className="lg:text-xl text-lg font-extrabold">
                        ALAMAT
                    </h1>
                    <p>
                        Jl. TMP Aria Wangsakara, Kp. Lengkong Ulama Rt.001/001,
                        Lengkong Kulon, Pagedangan, Tangerang Regency, Banten
                        15850
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
