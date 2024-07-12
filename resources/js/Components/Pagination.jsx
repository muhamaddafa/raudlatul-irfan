import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pages = [];
        const delta = 1;

        let start = Math.max(1, currentPage - delta);
        let end = Math.min(totalPages, currentPage + delta);

        if (currentPage - delta <= 2) {
            start = 2;
        }

        if (currentPage + delta >= totalPages - 1) {
            end = totalPages - 1;
        }

        pages.push(1);
        if (start > 2) {
            pages.push("...");
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < totalPages - 1) {
            pages.push("...");
        }

        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };

    const pages = getPageNumbers();

    return (
        <div className="flex justify-center mt-8 space-x-2">
            <button
                className={`flex items-center justify-center w-10 h-10 rounded-full border ${
                    currentPage === 1
                        ? "cursor-not-allowed bg-gray-200 border-gray-300"
                        : "bg-white border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ChevronLeftIcon className="h-5 w-5" />
            </button>
            {pages.map((page, index) => (
                <button
                    key={index}
                    className={`flex items-center justify-center w-10 h-10 rounded-full border ${
                        currentPage === page
                            ? "bg-[#E6F4EC] border-[#00932F] text-[#00932F]"
                            : "bg-white border-gray-300 hover:bg-gray-100"
                    } ${
                        page === "..."
                            ? "cursor-default bg-transparent border-none"
                            : ""
                    }`}
                    onClick={() => page !== "..." && onPageChange(page)}
                    disabled={page === "..."}
                >
                    {page}
                </button>
            ))}
            <button
                className={`flex items-center justify-center w-10 h-10 rounded-full border ${
                    currentPage === totalPages
                        ? "cursor-not-allowed bg-gray-200 border-gray-300"
                        : "bg-white border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() =>
                    currentPage < totalPages && onPageChange(currentPage + 1)
                }
                disabled={currentPage === totalPages}
            >
                <ChevronRightIcon className="h-5 w-5" />
            </button>
        </div>
    );
};

export default Pagination;
