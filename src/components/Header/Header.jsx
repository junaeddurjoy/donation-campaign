import { NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donation'>Donation</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>
    return (
        <div className="p-16 lg:flex items-center justify-between">
            <div>
                <img src="https://i.ibb.co/234LD5v/Logo.png" alt="Logo" />
            </div>
            <div className="flex gap-16">
                <ul className="list-none flex gap-14 text-xl font-semibold">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Header;