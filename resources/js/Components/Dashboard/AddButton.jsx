import { PlusCircleIcon } from "@heroicons/react/24/outline";

const AddButton = ({ title }) => {
    return (
        <div className="flex w-full col-span-12 text-[#00923F] font-semibold hover:bg-[#00923F] duration-300 hover:text-gray-200 text-xl border-2 border-dashed rounded-md border-[#00923F] hover:border-solid">
            <button className="flex items-center justify-center w-full gap-2 p-6 duration-300 item hover:-translate-y-0.5">
                <PlusCircleIcon className="w-8 h-8" />
                Tambah {title}
            </button>
        </div>
    );
};

export default AddButton;