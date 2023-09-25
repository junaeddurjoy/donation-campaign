import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredDonation } from "../../utility/localstorage";

const Donation = () => {
    const donates = useLoaderData();
    const [appliedDonations, setAppliedDonations] = useState([]);
    useEffect( () => {
        const storedDonationsIds = getstoredDonation();
        if(donates.length>0){
            
            const donationsApplied = donates.filter(donate => storedDonationsIds.includes(donate.id));
            setAppliedDonations(donationsApplied);
        }
    },[] )
    return (
        <div>
            {
                appliedDonations.map(donate => <li key={donate.id}>{donate.title} <img src={donate.image} alt="" /></li>)
            }
        </div>
    );
};

export default Donation;