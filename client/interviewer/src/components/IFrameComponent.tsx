import { FieldValues } from 'react-hook-form'

interface IframeComponentProps {
    joinRoomName: FieldValues | string;
  }
  
const IframeComponent: React.FC<IframeComponentProps> = ({ joinRoomName }) => {
  const iframeUrl = `https://taskmanager-team.daily.co/${joinRoomName}`;
  return (
    <iframe
      title="Video Call"
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        border: "0",
        zIndex: 9999
      }}
      allow="camera;microphone"
      src={iframeUrl}
    />
  );
};
  
  export default IframeComponent;
  