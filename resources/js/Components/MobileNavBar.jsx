import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import MobilePageLink from "./MobilePageLink";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";

const MobileNavBar = ({ currenPath }) => {
    const [isOpen, setIsOpen] = useState(false);
    const variant = isOpen ? "opened" : "closed";

    console.log(isOpen);

    const top = {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        opened: {
            rotate: 45,
            translateY: 30,
        },
    };

    const center = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    };

    const bottom = {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        opened: {
            rotate: -45,
            translateY: -30,
        },
    };

    return (
        <>
            <div className="fixed w-full px-8 py-[20px] mobile-navbar lg:hidden md:px-12 z-10 bg-white shadow-md">
                <div className="flex justify-between navbar ">
                    <Link href="/">
                        <div className="flex items-center gap-4 nama-logo">
                            <div className="lg:mx-10 lg:w-20 w-12">
                                <Link href="/">
                                    <ApplicationLogo />
                                </Link>
                            </div>
                            <div className="flex flex-col font-bold text-[#00932F]">
                                <h1 className="">MAS</h1>
                                <h1 className="">RAUDLATUL IRFAN</h1>
                            </div>
                        </div>
                    </Link>
                    <div className="menu items-center">
                        <svg
                            viewBox="-20 25 120 20"
                            width="40"
                            height="40"
                            className="text-center duration-1000 rounded-lg"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            <motion.rect
                                initial={"closed"}
                                animate={variant}
                                variants={top}
                                width="80"
                                height="10"
                                rx="10"
                            ></motion.rect>
                            <motion.rect
                                initial={"closed"}
                                animate={variant}
                                variants={center}
                                y="30"
                                width="80"
                                height="10"
                                rx="10"
                            ></motion.rect>
                            <motion.rect
                                initial={"closed"}
                                animate={variant}
                                variants={bottom}
                                y="60"
                                width="80"
                                height="10"
                                rx="10"
                            ></motion.rect>
                        </svg>
                    </div>
                </div>
            </div>
            <div
                className={
                    `fixed flex flex-col px-8 mt-[75px] w-[60%] md:w-full right-0 h-screen bg-white md:px-12 nav-items ` +
                    (isOpen ? "z-20" : "hidden -z-20")
                }
            >
                <div className="flex flex-col gap-10 pt-5 pb-10 nav-link h-max">
                    <MobilePageLink href="/" active={currenPath === "home"}>
                        Beranda
                    </MobilePageLink>
                    <MobilePageLink href="/info" active={currenPath === "info"}>
                        Informasi Sekolah
                    </MobilePageLink>
                    <MobilePageLink
                        href="/berita"
                        active={currenPath === "berita"}
                    >
                        Berita
                    </MobilePageLink>
                    <MobilePageLink
                        href="/galeri"
                        active={currenPath === "galeri"}
                    >
                        Galeri
                    </MobilePageLink>
                    <MobilePageLink href="/ppdb" active={currenPath === "ppdb"}>
                        PPDB
                    </MobilePageLink>
                    <MobilePageLink
                        href="/kontak"
                        active={currenPath === "kontak"}
                    >
                        Kontak Kami
                    </MobilePageLink>
                </div>
            </div>
        </>
    );
};

export default MobileNavBar;
