import React from "react";

const ContainerLayout = ({ children, className = "" }) => {
    return (
        <>
            <div
                className={
                    `container-layout lg:px-[70px] lg:pt-[132px] pb-[32px] lg:pt-[120px] pt-[125px] px-8 md:px-12 ` +
                    className
                }
            >
                {children}
            </div>
        </>
    );
};

export default ContainerLayout;
