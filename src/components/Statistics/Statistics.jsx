import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredDonation } from "../../utility/localstorage";
import Charts from "../Charts/Charts"

const Statistics = () => {
    const donates = useLoaderData();
    const [appliedDonations, setAppliedDonations] = useState([]);
    useEffect(() => {

        const storedDonationsIds = getstoredDonation();
        if (donates.length > 0) {
            const donationsApplied = donates.filter(donate => storedDonationsIds.includes(donate.id));
            setAppliedDonations(donationsApplied);
        }

        },[donates])
    var totalMoney=0;
    for(let i=0;i<appliedDonations.length;i++){
        totalMoney = totalMoney + appliedDonations[i].money
    }
    // console.log(totalMoney)
    return (
        <div>
            {/* <Charts totalMoney={totalMoney}></Charts> */}
            <Charts></Charts>
        </div>
    );
};

export default Statistics;