import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Popup from '@/components/_ui/Popup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';

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
    const [image, setImage] = useState<File | null>(null); // Step 2
    const [error, setError] = useState('');

    const router = useRouter();

    // const uploadImage = async (image: File): Promise<string> => {
    //     try {
    //         const formData = new FormData(); // Step 5
    //         formData.append('image', image); // Step 6
    //         const response = await fetch('/api/uploadImage', {
    //             method: 'POST',
    //             body: formData,
    //         });
    //         const data = await response.json();
    //         return data.imageURL; // Step 8
    //     } catch (error) {
    //         console.error(error);
    //         throw new Error('Failed to upload image');
    //     }
    // };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!communityName || !description) {
            setError('Please fill in all fields');
            return;
        }
        const community = { communityName, description, URL_image: ''};

        // if (image) {
        //     const imageURL = await uploadImage(image); // Step 4
        //     community.URL_image = imageURL; // Step 9
        // }

        await createCommunity(community);
        router.push('/');
    };

    const createCommunity = async (community: { communityName: string; description: string; URL_image: string }) => {
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
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 0, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Community Name"
                            defaultValue="Community Name"
                            className='bg-white border border-gray-3'
                            variant="filled"
                            value={communityName}
                            onChange={(event) => setCommunityName(event.target.value)}
                        />
                    </div>

                </Box>
                <Box component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 0, width: '50ch' },
                    }}
                    noValidate autoComplete="off"
                >
                    <div>
                        <TextField
                            id="filled-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                            variant='filled'
                            className='bg-white border border-gray-3'
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>
                </Box>
                {/* <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => setImage(event.target.files?.[0] || null)} // Step 3
                /> */}
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

