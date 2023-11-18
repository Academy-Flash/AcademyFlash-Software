import { useState } from "react";

const useCommunity = () => {
    const [community, setCommunity] = useState('UNIFESP');

    const get_current_community = (): string => {
        return community;
    };

    const set_current_community = (new_community: string): void => {
        setCommunity(new_community);
    };

    return {get_current_community, set_current_community };
};

export default useCommunity;

