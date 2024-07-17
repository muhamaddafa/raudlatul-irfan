import React from "react";
import PageLink from "./PageLink";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";

const NavBar = ({ currentPath }) => {
    return (
        <>
            <div className="Navbar fixed w-screen h-20 bg-[#FAFAFA] hidden lg:block shadow-md z-20">
                <div className="flex mx-8 items-center justify-between h-full items">
                    <Link href="/" className="flex items-center ml-10 ">
                        <div className="w-20">
                            <ApplicationLogo />
                        </div>
                        <div className="ml-4 text-xl text-[#00923F] font-extrabold ">
                            <h1>MAS</h1>
                            <h1 className="whitespace-nowrap">
                                RAUDLATUL IRFAN
                            </h1>
                        </div>
                    </Link>
                    <div className="flex justify-end w-full gap-6 text-center nav-items mx-14">
                        <PageLink href="/" active={currentPath === "home"}>
                            Beranda
                        </PageLink>
                        <PageLink href="/info" active={currentPath === "info"}>
                            Informasi Sekolah
                        </PageLink>
                        <PageLink
                            href="/berita"
                            active={currentPath === "berita"}
                        >
                            Berita
                        </PageLink>
                        <PageLink
                            href="/galeri"
                            active={currentPath === "galeri"}
                        >
                            Galeri
                        </PageLink>
                        <PageLink href="" active={currentPath === "ppdb"}>
                            PPDB
                        </PageLink>
                        <PageLink
                            href="/kontak"
                            active={currentPath === "kontak"}
                        >
                            Kontak Kami
                        </PageLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
