import React from "react";
import { Link } from "@inertiajs/react";
import Button from "@/Components/Button";

const Card = ({ artikel, className = "" }) => {
    return (
        <div
            className={
                "card lg:flex lg:flex-col md:grid md:grid-cols-5 rounded-lg bg-white border md:border-gray-200 border-green-700 md:shadow-xl " +
                className
            }
        >
            <div className="col-span-2">
                <img
                    src={`/storage/artikel/${artikel.gambar_artikel}`}
                    alt={artikel.judul_artikel}
                    className="w-full lg:h-[240px] md:h-[270px] h-[200px] object-cover lg:rounded-t-lg lg:rounded-b-none md:rounded-l-lg md:rounded-r-none rounded-t-lg"
                />
            </div>
            <div className="col-span-3 flex flex-col justify-between p-4">
                <div className="flex flex-col gap-2">
                    <h3 className="lg:text-lg text-base font-extrabold text-[#00923F]">
                        {artikel.kategori_artikel}
                    </h3>
                    <h3 className="lg:text-xl text-lg font-extrabold line-clamp-2">
                        {artikel.judul_artikel}
                    </h3>
                    <p className="text-gray-500 font-extrabold lg:text-base text-sm line-clamp-4">
                        {artikel.isi_artikel}
                    </p>
                </div>
                <div className="flex justify-end my-2">
                    <Link href={`/berita/${artikel.link_artikel}`}>
                        <Button className="px-4 py-1 mt-2 lg:text-lg text-base font-semibold">
                            Selengkapnya
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
