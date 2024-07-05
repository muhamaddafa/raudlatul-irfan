import { Head } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import MobileNavBar from "@/Components/MobileNavBar";

const PageLayout = ({ children, title, currentPath }) => {
    return (
        <>
            <Head title={title} />
            <NavBar currentPath={currentPath} />
            <MobileNavBar currenPath={currentPath} />
            <div className="grid grid-cols-12 gap-4">
                <div className="h-screen col-span-12 main">{children}</div>
            </div>
        </>
    );
};

export default PageLayout;
