import ModalStatus from "@/Components/Dashboard/ModalStatus";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";

const StoreGaleri = (props) => {
    // status state
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    // data state
    const { data, setData } = useForm({
        gambar_galeri: null,
    });

    // store function
    const store = (e) => {
        e.preventDefault();
        setStatus("loading");
        axios
            .post(route("galeri.store"), data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    setStatus("success");
                }
            })
            .catch((error) => {
                setMessage(error.response.data.errors.gambar_galeri[0]);
                setStatus("failed");
            });
    };

    // image preview
    const [preview, setPreview] = useState(null);
    const [fileName, setFileName] = useState("");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("gambar_galeri", file);
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
            setFileName(file.name);
        }
    };

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-center text-gray-800">
                    Tambah Galeri MAS Raudlatul Irfan
                </h2>
            }
        >
            <Head title="Tambah Galeri" />

            {/* Modal Status */}
            <ModalStatus
                status={status}
                item={"Galeri"}
                statusMessage={"Mengunggah..."}
                messageLoading={"sedang ditambahkan ke database!"}
                messageError={message}
                feature={"tambah"}
            />

            <div className="container relative w-3/5 px-4 mx-auto mt-5 max-w-7xl sm:px-6 lg:px-8">
                <form onSubmit={store} className="flex flex-col gap-3">
                    {/* gambar artikel */}
                    <div className="-mt-2 gambar-galeri">
                        <label
                            htmlFor="gambar_galeri"
                            className="text-lg font-semibold"
                        >
                            Upload Gambar Galeri:{" "}
                        </label>
                        <div className="flex items-center justify-center w-full mt-1">
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    {preview ? (
                                        <>
                                            <img
                                                src={preview}
                                                alt="Preview"
                                                className="object-cover h-32 mb-4"
                                            />
                                            <p>{fileName}</p>
                                        </>
                                    ) : (
                                        <>
                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">
                                                    Unggah Gambar
                                                </span>{" "}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                JPEG, PNG, or JPG (Maks. 2MB)
                                            </p>
                                        </>
                                    )}
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-[#00923F] rounded-md hover:bg-[#007429]"
                    >
                        Tambah Galeri
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default StoreGaleri;
