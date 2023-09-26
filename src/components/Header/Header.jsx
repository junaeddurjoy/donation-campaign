import { NavLink } from "react-router-dom";

const Header = () => {
    const handleLinkColor = (idd) => {
        const gg = document.getElementById(idd);
        if(gg.innerText == 'Home'){
            const cc = document.getElementById('donation');
            cc.classList.remove('text-red-500')
            const bb = document.getElementById('stat');
            bb.classList.remove('text-red-500')
            gg.classList.add('text-red-500')
        }
        else if(gg.innerText == 'Donation'){
            const cc = document.getElementById('home');
            cc.classList.remove('text-red-500')
            const bb = document.getElementById('stat');
            bb.classList.remove('text-red-500')
            gg.classList.add('text-red-500')
        }
        else if(gg.innerText == 'Statistics'){
            const cc = document.getElementById('donation');
            cc.classList.remove('text-red-500')
            const bb = document.getElementById('home');
            bb.classList.remove('text-red-500')
            gg.classList.add('text-red-500')
        }
    };

    const links = <>
        <li  id="home" onClick={() => handleLinkColor('home')}><NavLink to='/'><u>Home</u></NavLink></li>
        <li  id="donation" onClick={() => handleLinkColor('donation')}><NavLink to='/donation'><u>Donation</u></NavLink></li>
        <li  id="stat" onClick={() => handleLinkColor('stat')}><NavLink to='/statistics' ><u>Statistics</u></NavLink></li>
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