import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AddButton from "@/Components/Dashboard/AddButton";
import GaleriCard from "@/Components/Dashboard/GaleriCard";
import { useEffect, useState } from "react";
import ModalLoading from "@/Components/Dashboard/ModalLoading";
import ModalSuccess from "@/Components/Dashboard/ModalSuccess";

const DashboardGaleri = (props) => {
    const [galeriData, setGaleriData] = useState([]);
    const [status, setStatus] = useState("");

    // request galeri data
    const getGaleri = async () => {
        try {
            const response = await axios.get(route("galeri.index"));
            setGaleriData(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    // get galeri data
    useEffect(() => {
        getGaleri();
    }, []);

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Galeri MAS Raudlatul Irfan
                </h2>
            }
        >
            <Head title="Galeri Dashboard" />

            {/* Modal Status */}
            {status === "loading" && (
                <ModalLoading
                    item="Galeri"
                    status={"Menghapus..."}
                    message={"sedang dihapus dari database!"}
                />
            )}
            {status === "success" && (
                <ModalSuccess item="Galeri" feature={"hapus"} />
            )}

            <div className="py-5">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Dashboard Content */}
                    <div className="flex flex-col gap-5 py-5 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        {/* add button */}
                        <div className="grid grid-cols-12 px-6">
                            <AddButton title="Foto" href={"form.galeri"} />
                        </div>

                        {/* content */}
                        <div className="grid grid-cols-12 gap-4 px-6 content">
                            {!galeriData || galeriData.length === 0 ? (
                                <p className="col-span-12 p-24 text-2xl text-center opacity-25">
                                    Belum ada foto yang diunggah..
                                </p>
                            ) : (
                                galeriData.map((data, index) => (
                                    <GaleriCard
                                        data={data}
                                        index={index}
                                        loading={setStatus}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default DashboardGaleri;
