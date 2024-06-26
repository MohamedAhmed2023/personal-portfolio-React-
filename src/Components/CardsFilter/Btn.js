import CardsData from "../../CardsData";
import "./Btn.css"
import { useEffect, React } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Btn({ menuItem, FilterItem, setitem }) {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (
        <>
            <div data-aos="zoom-in" className="Btn">
                {menuItem.map(val => (
                    <button className="Btn-filter" onClick={() => FilterItem(val)}>
                        {val}
                    </button>
                ))}
                <button className="Btn-filter" onClick={() => setitem(CardsData)}>
                    ALL
                </button>
            </div>
        </>
    )
}

export default Btn;