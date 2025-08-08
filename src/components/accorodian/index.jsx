import './style.css'
import data from "./data";
import { use, useState } from "react";
function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enabelMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    function handleSingleSelection(currentId) {
        setSelected(currentId === selected ? null : currentId)
    }

    function handleMultiSelection(currentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);

        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(currentId);

        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1);


        }
        setMultiple(cpyMultiple);


    }
    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enabelMultiSelection)} className='multi-selection-btn'>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map((item) => (
                            <div className="item" key={item.id}>
                                <div onClick={enabelMultiSelection
                                    ? () => handleMultiSelection(item.id)
                                    : () => handleSingleSelection(item.id)} className="title">
                                    <h3 className='question'>{item.question}</h3>
                                    <span>+</span>
                                    <div>
                                        {
                                            enabelMultiSelection
                                                ? multiple.indexOf(item.id) !== -1 && (
                                                    <div className="answer">{item.answer}</div>
                                                )
                                                : selected === item.id && (<div className="answer">{item.answer}</div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                        : <div>No data found!</div>
                }
            </div>
        </div>)
}

export default Accordian;