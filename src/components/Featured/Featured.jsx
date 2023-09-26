import { useEffect, useState } from "react";
import Features from "../Features/Features";

const Featured = () => {
    const [feature,setFeature] = useState([]);

    useEffect( ()=> {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setFeature(data));
    },[])
    return (
        <div className="py-20 lg:px-5">
            <div className="gap-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
                {
                    feature.map(feature => <Features key={feature.id} feature={feature}></Features>)
                }
            </div>
        </div>
        
    );
};

export default Featured;