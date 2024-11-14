import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showRabbit, hideRabbit } from '../features/rab';
import './Page.css';
const Page = () => {
    const dispatch = useDispatch();
    const { clickedButtons } = useSelector((state) => state.rab);
    const bunnyImage = "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const numberAr = [1, 2, 3, 4, 5];

    return (
        <div>
            <h1>Rabbits</h1>
            {numberAr.map((nums) => (
                <div key={nums}>
                    {!clickedButtons[nums] ? (
                        <button onClick={() => dispatch(showRabbit({ nums }))}>
                            Show Rabbit {nums}
                        </button>
                    ) : (
                        <img
                            src={bunnyImage}
                            alt="Bunny"
                            style={{ width: "100px", height: "100px"}}
                            onClick={() => dispatch(hideRabbit({ nums }))}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default Page;
