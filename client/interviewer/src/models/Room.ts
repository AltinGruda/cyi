interface RoomConfig {
    max_participants: number;
    nbf: number;
    exp: number;
    start_video_off: boolean;
    enable_recording: 'cloud' | 'local' | 'none'; // Possible values are 'cloud', 'local', or 'none'
}

export interface Room {
    id: string;
    name: string;
    api_created: boolean;
    privacy: 'public' | 'private'; // Possible values are 'public' or 'private'
    url: string;
    created_at: Date; // change if problem
    config: RoomConfig;
}