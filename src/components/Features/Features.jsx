import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
const Features = ({ feature }) => {
    // eslint-disable-next-line react/prop-types
    const { id, image, category, title} = feature;
    return (
        <>
            <div>
                {category === "Clothing" && 
                    <div>
                    <Link to={`/donationdetails/${id}`}>
                        <div className={`card card-compact rounded-sm w-80 bg-green-200`}>
                            <figure><img src={image} className="w-full" /></figure>
                            <div className="card-body">
                                <p className="w-min p-1 rounded-md font-bold text-green-900 bg-green-300">{category}</p>
                                <h2 className="card-title text-green-600">{title}</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                }
                {category === "Health" && 
                    <div>
                    <Link to={`/donationdetails/${id}`}>
                        <div className={`card card-compact rounded-sm w-80 bg-blue-200`}>
                            <figure><img src={image} className="w-full" /></figure>
                            <div className="card-body">
                                <p className="w-min p-1 rounded-md text-blue-900 font-bold bg-blue-300">{category}</p>
                                <h2 className="card-title text-blue-600">{title}</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                }
                {category === "Education" && 
                    <div>
                    <Link to={`/donationdetails/${id}`}>
                        <div className={`card card-compact rounded-sm w-80 bg-red-200`}>
                            <figure><img src={image} className="w-full" /></figure>
                            <div className="card-body">
                                <p className="w-min p-1 rounded-md text-red-900 font-bold bg-red-300">{category}</p>
                                <h2 className="card-title text-red-600">{title}</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                }
                {category === "Food" && 
                    <div>
                    <Link to={`/donationdetails/${id}`}>
                        <div className={`card card-compact rounded-sm w-80 bg-orange-200`}>
                            <figure><img src={image} className="w-full" /></figure>
                            <div className="card-body">
                                <p className="w-min p-1 rounded-md text-orange-900 font-bold bg-orange-300">{category}</p>
                                <h2 className="card-title text-orange-600">{title}</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                }
            </div>
            
        </>
    );
};
Features.propTypes = {
    id: PropTypes.number.isRequired,
};
export default Features;