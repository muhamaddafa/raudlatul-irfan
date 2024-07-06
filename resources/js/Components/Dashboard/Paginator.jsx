import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const Paginator = ({ meta, setPage }) => {
    const [currentPage, setCurrentPage] = useState();
    const [lastPage, setLastPage] = useState();
    const totalPerPage = 8;

    useEffect(() => {
        setCurrentPage(meta.current_page || 0);
        setLastPage(meta.last_page || 0);
    }, [meta]);

    const getPageNumbers = () => {
        const pages = [];
        const delta = 2;
        let start = Math.max(1, currentPage - delta);
        let end = Math.min(lastPage, currentPage + delta);

        if (currentPage <= delta) end = Math.min(lastPage, delta * 2 + 1);
        if (currentPage + delta >= lastPage)
            start = Math.max(1, lastPage - delta * 2);

        for (let i = start; i <= end; i++) pages.push(i);
        if (start > 1) pages.unshift("...");
        if (end < lastPage) pages.push("...");
        return pages;
    };

    const pages = getPageNumbers();
    const startIndex =
        (currentPage - 1) * totalPerPage + (meta.total === 0 ? 0 : 1);
    const endIndex = Math.min(currentPage * totalPerPage, meta.total);

    return (
        <div className="px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Menampilkan{" "}
                        <span className="font-medium">{startIndex || 0}</span>{" "}
                        ke <span className="font-medium">{endIndex || 0}</span>{" "}
                        dari{" "}
                        <span className="font-medium">{meta.total || 0}</span>{" "}
                        hasil
                    </p>
                </div>
                <div>
                    <nav
                        aria-label="Pagination"
                        className="inline-flex -space-x-px rounded-md shadow-sm isolate"
                    >
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                if (currentPage > 1) {
                                    setCurrentPage(currentPage - 1);
                                    setPage(currentPage - 1);
                                }
                            }}
                            className={`relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300 hover:cursor-pointer ${
                                currentPage === 1
                                    ? "pointer-events-none"
                                    : "hover:bg-gray-50"
                            } focus:z-20 focus:outline-offset-0`}
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon
                                aria-hidden="true"
                                className="w-5 h-5"
                            />
                        </a>
                        {pages.map((page, index) => (
                            <React.Fragment key={index}>
                                {page === "..." ? (
                                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 hover:cursor-pointer">
                                        {page}
                                    </span>
                                ) : (
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCurrentPage(page);
                                            setPage(page);
                                        }}
                                        aria-current={
                                            currentPage === page
                                                ? "page"
                                                : undefined
                                        }
                                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                                            currentPage === page
                                                ? "text-white bg-[#00923F]"
                                                : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        } focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00923F] hover:cursor-pointer`}
                                    >
                                        {page}
                                    </a>
                                )}
                            </React.Fragment>
                        ))}
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                if (currentPage < lastPage) {
                                    setCurrentPage(currentPage + 1);
                                    setPage(currentPage + 1);
                                }
                            }}
                            className={`relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:cursor-pointer ${
                                currentPage === lastPage
                                    ? "pointer-events-none"
                                    : "hover:bg-gray-50"
                            } focus:z-20 focus:outline-offset-0`}
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon
                                aria-hidden="true"
                                className="w-5 h-5"
                            />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Paginator;
