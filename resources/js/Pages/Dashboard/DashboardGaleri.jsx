import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AddButton from "@/Components/Dashboard/AddButton";
import GaleriCard from "@/Components/Dashboard/Card/GaleriCard";
import { useEffect, useState } from "react";
import ModalStatus from "@/Components/Dashboard/ModalStatus";
import Paginator from "@/Components/Dashboard/Paginator";

const DashboardGaleri = (props) => {
    const [galeriData, setGaleriData] = useState([]);
    const [status, setStatus] = useState("");
    const [data, setData] = useState({});

    // pagination
    const [meta, setMeta] = useState({});
    const [page, setPage] = useState(1);

    // request galeri data
    const getGaleri = async () => {
        try {
            const response = await axios.get(route("galeri.index", { page }));
            setGaleriData(response.data.data);
            setMeta(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    // get galeri data
    useEffect(() => {
        getGaleri();
    }, [page]);

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
            <ModalStatus
                status={status}
                item={"Galeri"}
                statusMessage={"Menghapus..."}
                messageLoading={"sedang dihapus dari database!"}
                feature={"hapus"}
                data={data}
                linkDelete={"galeri.destroy"}
                setStatus={setStatus}
            />

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
                                        key={index}
                                        setData={setData}
                                        loading={setStatus}
                                    />
                                ))
                            )}
                        </div>
                        <Paginator meta={meta} setPage={setPage} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default DashboardGaleri;
