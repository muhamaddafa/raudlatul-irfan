import { Link } from "@inertiajs/react";

export default function PageLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 text-xl font-extrabold leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "text-[#00923F]"
                    : "border-transparent text-[#1C1B1B] hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
