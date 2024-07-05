import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const ModalConfirmDelete = ({ item, data, link, loading }) => {
    // delete function
    const deleteData = (e) => {
        e.preventDefault();
        loading("loading");

        const href = link.split(".")[0];
        const parameter = { [href]: data };

        const url = route(link, parameter);
        axios.delete(url).then((response) => {
            if (response.status === 200) {
                loading("success");
            }
        });
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 modal"
            id="modal"
        >
            <div className="w-11/12 px-6 py-6 bg-white rounded-lg md:w-1/3">
                <div className="flex flex-col items-center justify-between h-full gap-6">
                    <ExclamationTriangleIcon className="w-32 h-32 text-red-500" />
                    <div className="flex flex-col items-center justify-center gap-2 text">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Hapus {item}
                        </h2>
                        <p className="opacity-50">
                            Yakin ingin menghapus {item}?
                        </p>
                    </div>
                    <div className="flex w-full gap-2 button">
                        <a
                            onClick={() => {
                                loading("");
                            }}
                            className="w-2/5 py-2 hover:cursor-pointer text-[#00923F] hover:text-white text-center border-[#00923F] border-2 rounded-md hover:bg-[#007429]"
                        >
                            Batal
                        </a>
                        <a
                            onClick={deleteData}
                            className="flex items-center justify-center w-full py-2 text-white bg-red-700 rounded-md hover:cursor-pointer hover:bg-red-800"
                        >
                            Hapus
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalConfirmDelete;
