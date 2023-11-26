import CardsData from "../../CardsData";
import "./Btn.css"
function Btn({ menuItem, FilterItem, setitem }) {
    return (
        <>
            <div className="Btn">
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