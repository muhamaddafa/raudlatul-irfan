import { UserIcon, ClockIcon } from "@heroicons/react/24/outline";
import CardEditButton from "./CardEditButton";
import CardDeleteButton from "./CardDeleteButton";

const EkskulCard = ({ data, loading, setData }) => {
    // format date and time
    const dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Jakarta",
    };

    const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Jakarta",
        hour12: false,
    };
    return (
        <div className="col-span-3 border-[#00923F] border-opacity-35 border hover:border-2 hover:border-opacity-100 hover:-translate-y-2 duration-300 rounded-lg shadow-xl artikel-card">
            <div className="flex flex-col gap-3 p-4 card-content">
                <img
                    src={`../storage/ekskul/${data.gambar_ekskul}`}
                    alt="artikel-image"
                    className="object-cover w-full h-48 rounded-md"
                />
                <div className="judul-artikel">
                    <p className="text-xl font-bold text-center line-clamp-2">
                        {data.nama_ekskul}
                    </p>
                </div>
                <div className="flex flex-col items-center gap-1 opacity-30 upload-info">
                    <div className="flex items-center gap-1 user">
                        <UserIcon className="w-4 h-4" />
                        <p className="text-sm">{data.pembuat}</p>
                    </div>
                    <div className="flex items-center gap-1 timestamp">
                        <ClockIcon className="w-4 h-4" />
                        <p className="text-sm">
                            {new Date(data.created_at).toLocaleDateString(
                                "id-ID",
                                dateOptions
                            ) +
                                ", " +
                                new Date(data.created_at).toLocaleTimeString(
                                    "id-ID",
                                    timeOptions
                                )}
                        </p>
                    </div>
                </div>
                <div className="flex gap-3 pt-2 edit-delete">
                    <CardEditButton data={data.nama_ekskul} item={"ekskul"} />
                    <CardDeleteButton
                        data={data}
                        loading={loading}
                        setData={setData}
                    />
                </div>
            </div>
        </div>
    );
};

export default EkskulCard;
