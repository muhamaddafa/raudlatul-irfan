import React from "react";
import PageLink from "./PageLink";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";

const NavBar = ({ currentPath }) => {
    return (
        <>
            <div className="Navbar fixed w-screen h-20 bg-[#FAFAFA] hidden lg:block shadow-md z-20">
                <div className="flex mx-8 items-center justify-between h-full items">
                    <div className="mx-10 w-20">
                        <Link href="/">
                            <ApplicationLogo />
                        </Link>
                    </div>
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
                            href="/contact"
                            active={currentPath === "contact"}
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
