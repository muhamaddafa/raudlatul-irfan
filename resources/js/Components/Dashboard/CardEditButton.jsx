import { PencilSquareIcon } from "@heroicons/react/24/outline";

const CardEditButton = () => {
    return (
        <button className="flex items-center justify-center w-full gap-2 p-2 rounded-md button border-[#00923F] hover:scale-[110%] hover:border-opacity-100 text-[#00923F] duration-300 border-opacity-35 border">
            <PencilSquareIcon className="w-5 h-5" />
            <p>Edit</p>
        </button>
    );
};

export default CardEditButton;
