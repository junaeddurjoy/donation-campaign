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
                    <div key={donate.id}>
                        {donate.category === "Health" &&
                            <div>
                                <div className="card w-auto lg:card-side bg-blue-100 shadow-xl">
                                    <figure><img src={donate.image} alt="Album" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-sm text-blue-800 w-min p-1 rounded-lg bg-blue-300">{donate.category}</h2>
                                        <p className="text-xl font-bold">{donate.title}</p>
                                        <p className="font-bold">${donate.money}</p>
                                        <div className="card-actions">
                                            <Link to={`/donationdetails/${donate.id}`}>
                                                <button className="btn btn-primary">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {donate.category === "Education" &&
                            <div>
                                <div className="card w-auto lg:card-side bg-red-100 shadow-xl">
                                    <figure><img src={donate.image} alt="Album" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-sm text-red-600 w-min p-1 rounded-lg bg-red-300">{donate.category}</h2>
                                        <p className="text-xl font-bold">{donate.title}</p>
                                        <p className="font-bold">${donate.money}</p>
                                        <div className="card-actions">
                                            <Link to={`/donationdetails/${donate.id}`}>
                                                <button className="btn btn-primary bg-red-500 border-none hover:bg-red-500">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {donate.category === "Clothing" &&
                            <div>
                                <div className="card w-auto lg:card-side bg-green-100 shadow-xl">
                                    <figure><img src={donate.image} alt="Album" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-sm text-green-800 w-min p-1 rounded-lg bg-green-300">{donate.category}</h2>
                                        <p className="text-xl font-bold">{donate.title}</p>
                                        <p className="font-bold">${donate.money}</p>
                                        <div className="card-actions">
                                            <Link to={`/donationdetails/${donate.id}`}>
                                                <button className="btn btn-primary bg-green-500 border-none hover:bg-green-500">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {donate.category === "Food" &&
                            <div>
                                <div className="card w-auto lg:card-side bg-orange-100 shadow-xl">
                                    <figure><img src={donate.image} alt="Album" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-sm text-orange-800 w-min p-1 rounded-lg bg-orange-300">{donate.category}</h2>
                                        <p className="text-xl font-bold">{donate.title}</p>
                                        <p className="font-bold">${donate.money}</p>
                                        <div className="card-actions">
                                            <Link to={`/donationdetails/${donate.id}`}>
                                                <button className="btn btn-primary bg-orange-500 border-none hover:bg-orange-500">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        
                    </div>
                )
            }
            <div className="text-center pl-[38rem] mb-10">
                <button className="bg-purple-300 w-40 p-4 text-xl font-semibold rounded-xl">Show All</button>
            </div>
        </div>
    );
};

export default Donation;