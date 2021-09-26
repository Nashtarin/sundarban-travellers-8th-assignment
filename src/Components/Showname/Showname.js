import React from 'react';
import './Showname.css'

const Showname = props => {
    const { img, name, contribution } = props;
    return (
        <div className="show p-2 m-3 rounded">
            <img className="rounded-circle p-2" src={img} alt="" />
            <div>
                <h6>{name}</h6>

                <p>Contribution: BDT {contribution}</p>
            </div>


        </div>
    );
};

export default Showname;