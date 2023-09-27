import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="text-center my-40">
            <span className="loading loading-dots loading-lg"></span>
            <h2 className="text-3xl font-semibold">Ooops!!!No page found on that directory.</h2>
            <Link to="/"><button className="btn btn-neutral my-5">Go Back</button></Link>
        </div>
    );
};

export default Errorpage;