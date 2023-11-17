import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Popup from '@/components/_ui/Popup';

interface Community {
    id: number;
    community_name: string;
    description: string;
    date_creation: string;
    user_count: number;
    card_count: number;
}

const AddCommunityPage = () => {
    const [communityName, setCommunityName] = useState('');
    const [description, setDescription] = useState('');
    const [communities, setCommunities] = useState<Community[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [error, setError] = useState('');

    const router = useRouter();

    useEffect(() => {
        const fetchCommunities = async () => {
            try {
                const response = await fetch('/api/getCommunities');
                const data = await response.json();
                setCommunities(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCommunities();
    }, [isPopupOpen]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!communityName || !description) {
            setError('Please fill in all fields');
            return;
        }
        const community = { communityName, description };
        await createCommunity(community);
        router.push('/');
    };

    const createCommunity = async (community: { communityName: string; description: string }) => {
        try {
            await fetch('/api/create/community', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(community),
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex flex-col h-full w-full justify-center items-center gap-6">
            <h1 className="text-3xl font-semibold mb-4">Add Community</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label htmlFor="communityName">Community Name</label>
                <input
                    type="text"
                    id="communityName"
                    value={communityName}
                    onChange={(event) => setCommunityName(event.target.value)}
                    className="text-black border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className="text-black border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors"
                >
                    Add Community
                </button>
            </form>
        </div>
    );
};


export default AddCommunityPage;

