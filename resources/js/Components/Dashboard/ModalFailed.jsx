import { XCircleIcon } from "@heroicons/react/24/outline";

const ModalFailed = ({ item, message }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 modal"
            id="modal"
        >
            <div className="w-11/12 px-6 py-6 bg-white rounded-lg md:w-1/3">
                <div className="flex flex-col items-center justify-between h-full gap-6">
                    <XCircleIcon className="w-32 h-32 text-red-500" />
                    <div className="flex flex-col items-center justify-center gap-5 text">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Gagal
                        </h2>
                        <div className="text-center pesan">
                            <p>{item} Gagal Ditambahkan!</p>
                            <p className="opacity-50">{message}</p>
                        </div>
                    </div>
                    <div className="flex w-full gap-2 button">
                        <a
                            href={route("form.artikel")}
                            className="w-2/5 py-2 text-white justify-center items-center flex bg-[#00923F] rounded-md hover:bg-[#007429]"
                        >
                            Ulangi
                        </a>
                        <a
                            href={route("dashboard.artikel")}
                            className="w-full py-2 text-[#00923F] hover:text-white text-center border-[#00923F] border-2 rounded-md hover:bg-[#007429]"
                        >
                            Kembali ke Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalFailed;
