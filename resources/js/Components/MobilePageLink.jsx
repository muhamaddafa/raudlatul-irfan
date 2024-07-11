import { Link } from "@inertiajs/react";

export default function MobilePageLink({ active, children, href, ...props }) {
    return (
        <Link
            {...props}
            className={
                active
                    ? "text-[#00932F] font-bold md:text-4xl text-2xl text-end"
                    : "text-black font-light md:text-2xl"
            }
            href={href}
        >
            <div className="flex items-center font-semibold justify-end gap-10 duration-150 hover:text-[#00932F] hover:scale-90 hover:duration-150">
                {children}
            </div>
        </Link>
    );
}
