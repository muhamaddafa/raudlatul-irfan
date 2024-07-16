import ModalConfirmDelete from "./Modal/ModalConfirmDelete";
import ModalFailed from "./Modal/ModalFailed";
import ModalLoading from "./Modal/ModalLoading";
import ModalSuccess from "./Modal/ModalSuccess";

const ModalStatus = ({
    status,
    item,
    statusMessage,
    messageLoading,
    messageError,
    feature,
    data,
    linkDelete,
    setStatus,
}) => {
    return (
        <>
            {(() => {
                switch (status) {
                    case "loading":
                        return (
                            <ModalLoading
                                item={item}
                                status={statusMessage}
                                message={messageLoading}
                            />
                        );
                    case "success":
                        return <ModalSuccess item={item} feature={feature} />;
                    case "failed":
                        return (
                            messageError && (
                                <ModalFailed
                                    item={item}
                                    message={messageError}
                                />
                            )
                        );
                    case "delete":
                        return (
                            <ModalConfirmDelete
                                item={item}
                                data={data}
                                link={linkDelete}
                                loading={setStatus}
                            />
                        );
                    default:
                        return null;
                }
            })()}
        </>
    );
};

export default ModalStatus;
