import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import PublicRoomCard from '@/components/PublicRoomCard';
import { useState, useEffect } from 'react';
import { Room } from '@/models/Room';
import { getAllRooms } from '../network/rooms_api'
import Logo from '@/components/Logo';


interface RoomResponse {
    data: Room[]
}

const PublicRooms = () => {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getRooms() {
            try {
                const response: RoomResponse = await getAllRooms();
                const publicRooms = response.data.filter(room => room.privacy === 'public');
                setRooms(publicRooms);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        getRooms();
    }, []);
    
    return (
        <>
            <div className='flex items-center flex-col space-y-5 m-5'>
                <div className='h-20 mb-10 flex items-start'>
                    <Logo />
                </div>
                <h2 className='text-2xl font-bold'>A list of all rooms</h2>
                <div className='relative'>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon width={20}/>
                    </div>
                    <Input type="search" className='block p-4 pl-10 w-96 rounded-3xl' onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5 p-5'>
                <PublicRoomCard rooms={rooms} loading={loading} search={search} />
            </div>
        </>
    )
}

export default PublicRooms;
