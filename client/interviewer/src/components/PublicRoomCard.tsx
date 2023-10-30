import { Room } from '@/models/Room';
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Avatar from "boring-avatars";
import IframeWrapper from './IframeWrapper';
import { useState } from 'react';

interface PublicRoomCardProps {
    rooms: Room[];
    loading: boolean;
    search: string;
}

const PublicRoomCard: React.FC<PublicRoomCardProps> = ({rooms, loading, search}) => {
    const [roomJoinable, setRoomJoinable] = useState<string>('');


    return (
        <>
            {roomJoinable && <IframeWrapper joinRoomName={roomJoinable} />}
            {loading && !roomJoinable  && <p>Loading rooms...</p>}
            {!loading && !roomJoinable && rooms.length === 0 && <p>No public rooms available.</p>}
            {!loading && !roomJoinable && rooms.length > 0 && rooms.filter((room) => search.toLowerCase() === '' ? room : room.name.toLowerCase().includes(search)).map((room: Room) => (
                <Card key={room.id} className='grid grid-cols-4 drop-shadow-xl'>
                    <CardHeader className='col-span-1 justify-center'>
                        <Avatar
                            size={40}
                            name={room.name}
                            variant="beam"
                            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                        />
                    </CardHeader>
                    <CardContent className='col-span-3 mt-5 flex justify-between items-center'>
                        <CardTitle>{room.name}</CardTitle>
                        <Button onClick={() => {
                            setRoomJoinable(room.name);
                        }}>Join</Button>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};

export default PublicRoomCard;