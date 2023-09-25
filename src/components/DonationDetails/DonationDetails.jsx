import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../utility/localstorage";
const DonationDetails = () => {
    const feature = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const feat = feature.find(feat => feat.id === idInt);
    
    const handleDonations = () =>{
        saveDonation(idInt);
        toast("Donation Complete.");
    }
    return (
        <div>
            <div>
                <img className=" w-3/4 h-2/4 m-auto " src={feat.image} alt="" />
            </div>
            <div>
                <button onClick={handleDonations} className="text-white bg-[#FF444A] p-3 rounded-lg font-bold">Donate $290</button>
            </div>
            <h2 className="text-2xl font-bold">{feat.title}</h2>
            <h2>{feat.details}</h2>
            <ToastContainer></ToastContainer>
        </div>
        

    );
};

export default DonationDetails;