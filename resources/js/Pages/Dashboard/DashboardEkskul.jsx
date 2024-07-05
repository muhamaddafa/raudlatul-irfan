import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AddButton from "@/Components/Dashboard/AddButton";
import EkskulCard from "@/Components/Dashboard/Card/EkskulCard";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalStatus from "@/Components/Dashboard/ModalStatus";
import Paginator from "@/Components/Dashboard/Paginator";

const DashboardEkskul = (props) => {
    const [ekskulData, setEkskulData] = useState([]);
    const [status, setStatus] = useState("");
    const [data, setData] = useState({});

    // pagination
    const [meta, setMeta] = useState({});
    const [page, setPage] = useState(1);

    // request ekskul data
    const getEkskul = async () => {
        try {
            const response = await axios.get(route("ekskul.index", { page }));
            setEkskulData(response.data.data);
            setMeta(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    // get ekskul data
    useEffect(() => {
        getEkskul();
    }, [page]);

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Ekstrakurikuler MAS Raudlatul Irfan
                </h2>
            }
        >
            <Head title="Ekstrakurikuler Dashboard" />

            {/* Modal Status */}
            <ModalStatus
                status={status}
                item={"Ekskul"}
                statusMessage={"Menghapus..."}
                messageLoading={"sedang dihapus dari database!"}
                feature={"hapus"}
                data={data}
                linkDelete={"ekskul.destroy"}
                setStatus={setStatus}
            />

            <div className="py-5">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Dashboard Content */}
                    <div className="flex flex-col gap-5 py-5 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        {/* add button */}
                        <div className="grid grid-cols-12 px-6">
                            <AddButton
                                title="Ekstrakurikuler"
                                href={"form.ekskul"}
                            />
                        </div>

                        {/* content */}
                        <div className="grid grid-cols-12 gap-4 px-6 content">
                            {!ekskulData || ekskulData.length === 0 ? (
                                <p className="col-span-12 p-24 text-2xl text-center opacity-25">
                                    Belum ada ekskul yang diunggah..
                                </p>
                            ) : (
                                ekskulData.map((data, index) => (
                                    <EkskulCard
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

export default DashboardEkskul;
