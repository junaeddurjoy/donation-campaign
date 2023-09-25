import { Link } from "react-router-dom";
import Donation from "../Donation/Donation";

const Features = ({ feature }) => {
    const {id, image, category, title } = feature;

    return (
        <div>
            <Link to={`/donationdetails/${id}`}>
            <div className="card card-compact rounded-sm w-80">
                <figure><img src={image} className="w-full" /></figure>
                <div className="card-body">
                    <p className="w-min p-1 rounded-md bg-gray-200">{category}</p>
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Features;