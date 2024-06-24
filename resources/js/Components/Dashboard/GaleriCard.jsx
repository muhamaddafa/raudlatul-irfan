import CardDeleteButton from "./CardDeleteButton";

const GaleriCard = ({ data, key }) => {
    return (
        <div
            className="col-span-3 border-[#00923F] border-opacity-35 border hover:border-2 hover:border-opacity-100 hover:-translate-y-2 duration-300 rounded-lg shadow-xl artikel-card"
            key={key}
        >
            <div className="flex flex-col gap-3 p-4 card-content">
                <img
                    src={`../../../../storage/img/${data.gambar_galeri}`}
                    alt="artikel-image"
                    className="object-cover w-full h-48 rounded-md"
                />
                <div className="flex gap-3 pt-2 edit-delete">
                    <CardDeleteButton />
                </div>
            </div>
        </div>
    );
};

export default GaleriCard;