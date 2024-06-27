const ModalLoading = ({ item }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 modal"
            id="modal"
        >
            <div className="w-11/12 px-6 py-6 bg-white rounded-lg md:w-1/3">
                <div className="flex flex-col items-center justify-between h-full gap-6">
                    <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-[#00923F]"></div>
                    <div className="flex flex-col items-center justify-center gap-2 text">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Mengunggah...
                        </h2>
                        <p className="opacity-50">
                            {item} sedang ditambahkan ke database!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalLoading;
