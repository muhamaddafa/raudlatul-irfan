import { TrashIcon } from "@heroicons/react/24/outline";

const CardDeleteButton = ({ href, data, loading }) => {
    // delete function
    const deleteData = (e) => {
        e.preventDefault();
        loading("loading");

        const item = href.split(".")[0];
        const parameter = { [item]: data };

        const url = route(href, parameter);
        axios.delete(url).then((response) => {
            if (response.status === 200) {
                loading("success");
            }
        });
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
