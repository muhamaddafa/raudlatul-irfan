import CardDeleteButton from "../CardDeleteButton";

const GaleriCard = ({ data, loading, setData }) => {
    // img src
    const src = import.meta.env.VITE_GALERI_IMAGE_URL;

    return (
        <div className="col-span-3 border-[#00923F] border-opacity-35 border hover:border-2 hover:border-opacity-100 hover:-translate-y-2 duration-300 rounded-lg shadow-xl artikel-card">
            <div className="flex flex-col gap-3 p-4 card-content">
                <img
                    src={src + data.gambar_galeri}
                    alt="galeri-image"
                    loading="lazy"
                    className="object-cover w-full h-48 rounded-md"
                />
                <div className="flex gap-3 pt-2 edit-delete">
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

export default GaleriCard;
