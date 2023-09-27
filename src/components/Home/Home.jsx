import Featured from "../Featured/Featured";

const Home = () => {
    return (
        <>
            <div className="relative opacity-20">
                <img className="object-cover w-full h-96" src="https://i.ibb.co/WyvNDFc/Screenshot-2023-09-27-132408.png" alt="" />
            </div>
            <div className="absolute -mt-72 ml-96 justify-center ">
                <div className="items-center pt-10">
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="flex lg:justify-center pt-9">
                        <input type="text" placeholder="search here..." className="input input-bordered input-secondary w-full max-w-xs" />
                        <button className="btn btn-outline btn-secondary">Search</button>
                    </div>
                </div>
            </div>
            <Featured></Featured>
        </>
    );
};

export default Home;