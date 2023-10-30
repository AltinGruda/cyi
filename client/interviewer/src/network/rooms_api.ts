import { FieldValues } from 'react-hook-form';

export async function createRoom(roomName: FieldValues) {
    try {
        
        const response = await fetch('http://localhost:5000/room/createRoom', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: roomName,
            })
        });

        if (response.ok) {
            console.log('Room created, redirecting soon!');
        }
    } catch (error) {
        console.error("Error creating room:", error);
        // Handle error, show error message, etc.
    }
}

export async function getAllRooms() {
    try {
        const response = await fetch('http://localhost:5000/room/rooms');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}