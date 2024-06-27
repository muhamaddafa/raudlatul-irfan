import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const ModalSuccess = ({ item }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 modal"
            id="modal"
        >
            <div className="w-11/12 px-6 py-6 bg-white rounded-lg md:w-1/3">
                <div className="flex flex-col items-center justify-between h-full gap-6">
                    <CheckBadgeIcon className="w-32 h-32 text-green-500" />
                    <div className="flex flex-col items-center justify-center gap-2 text">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Sukses
                        </h2>
                        <p className="opacity-50">
                            {item} Berhasil Ditambahkan!
                        </p>
                    </div>
                    <a
                        href={route("dashboard.artikel")}
                        className="w-full py-2 text-white text-center bg-[#00923F] rounded-md hover:bg-[#007429]"
                    >
                        Kembali ke Dashboard
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ModalSuccess;
