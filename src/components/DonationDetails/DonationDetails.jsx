import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../utility/localstorage";
const DonationDetails = () => {
    const feature = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const feat = feature.find(feat => feat.id === idInt);

    const handleDonations = () => {
        saveDonation(idInt);
        toast("Donation Complete.");
    }
    return (
        <div>
            <div className="relative">
                <img className=" w-3/4 h-2/4 m-auto " src={feat.image} alt="" />
            </div>
            <div className="absolute  w-3/4 h-[88px] m-auto ml-[190px] py-5 -mt-[88px] bg-black opacity-50">

            </div>
            <div className="absolute ml-60 -mt-[70px]">
                {
                    feat.category === "Health" &&
                    <button onClick={handleDonations} className="text-white bg-[#0052FF] hover:opacity-100 p-3 rounded-lg font-bold ">Donate $290</button>
                }
                {
                    feat.category === "Education" &&
                    <button onClick={handleDonations} className="text-white bg-[#FF444A] opacity-100 p-3 rounded-lg font-bold ">Donate $290</button>
                }
                {
                    feat.category === "Clothing" &&
                    <button onClick={handleDonations} className="text-white bg-[#79C23F] opacity-100 p-3 rounded-lg font-bold ">Donate $290</button>
                }
                {
                    feat.category === "Food" &&
                    <button onClick={handleDonations} className="text-white bg-[#F87147] opacity-100 p-3 rounded-lg font-bold ">Donate $290</button>
                }
            </div>
            <div className="w-3/4 m-auto my-10 ">
                <h2 className="text-4xl font-bold my-5">{feat.title}</h2>
                <h2 className="text-justify">{feat.details}</h2>
            </div>
            <ToastContainer></ToastContainer>
        </div>


    );
};

export default DonationDetails;