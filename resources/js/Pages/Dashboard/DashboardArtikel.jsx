import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AddButton from "@/Components/Dashboard/AddButton";
import ArtikelCard from "@/Components/Dashboard/ArtikelCard";

const DashboardArtikel = (props) => {
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Artikel MAS Raudlatul Irfan
                </h2>
            }
        >
            <Head title="Artikel Dashboard" />

            <div className="py-5">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Dashboard Content */}
                    <div className="flex flex-col gap-5 py-5 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        {/* add button */}
                        <div className="grid grid-cols-12 px-6">
                            <AddButton title="Artikel" />
                        </div>

                        {/* content */}
                        <div className="grid grid-cols-12 gap-4 px-6 content">
                            {!props.data || props.data.length === 0 ? (
                                <p className="col-span-12 p-24 text-2xl text-center opacity-25">
                                    Belum ada artikel yang diunggah..
                                </p>
                            ) : (
                                props.data.map((data, key) => (
                                    <ArtikelCard data={data} key={key} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default DashboardArtikel;