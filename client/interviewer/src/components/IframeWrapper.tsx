import IframeComponent from "./IFrameComponent";

const IframeWrapper = ({ joinRoomName }: { joinRoomName: string }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="absolute inset-0 z-50">
                <IframeComponent joinRoomName={joinRoomName} />
            </div>
        </div>
    )
};

export default IframeWrapper;