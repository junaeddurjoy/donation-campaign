import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredDonation } from "../../utility/localstorage";
import { Link } from "react-router-dom";

const Donation = () => {
    const donates = useLoaderData();
    const [appliedDonations, setAppliedDonations] = useState([]);
    useEffect(() => {
        const storedDonationsIds = getstoredDonation();
        if (donates.length > 0) {

            const donationsApplied = donates.filter(donate => storedDonationsIds.includes(donate.id));
            setAppliedDonations(donationsApplied);
        }
    }, [donates])
    return (
        <div className="grid grid-cols-2 mx-20 gap-12">
            {
                appliedDonations.map(donate =>
                    <div key={donate.id} >
                        <div  className="card w-auto lg:card-side bg-base-100 shadow-xl">
                        <figure><img src={donate.image} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{donate.category}</h2>
                            <p>{donate.title}</p>
                            <p>${donate.money}</p>
                            <div className="card-actions">
                                <Link to={`/donationdetails/${donate.id}`}>
                                    <button className="btn btn-primary">View Details</button>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Donation;