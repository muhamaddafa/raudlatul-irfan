import { TrashIcon } from "@heroicons/react/24/outline";

const CardDeleteButton = ({ data, loading, setData }) => {
    // delete function
    const deleteData = (e) => {
        e.preventDefault();
        loading("delete");
        setData(data);
    };

    return (
        <button
            onClick={deleteData}
            className="flex items-center justify-center w-full gap-2 p-2 text-white duration-300 bg-red-700 rounded-md hover:scale-[110%] button"
        >
            <TrashIcon className="w-5 h-5" />
            <p>Delete</p>
        </button>
    );
};

export default CardDeleteButton;
