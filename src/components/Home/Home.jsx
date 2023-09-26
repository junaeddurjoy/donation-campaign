import Featured from "../Featured/Featured";

const Home = () => {
    return (
        <>
            <div className="lg:text-center">
                <figure className="w-[100%]">
                    <img src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg" alt="" />
                </figure>
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