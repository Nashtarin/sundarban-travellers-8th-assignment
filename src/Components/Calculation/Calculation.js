import React from 'react';
import Showname from '../Showname/Showname';

import './Calculation.css'

const Calculation = props => {
    const { persons } = props


    const total = persons.reduce((previous, person) => previous + person.contribution, 0)

    return (
        <div>
            <div className="calculation rounded ">
                <div className="card-body">
                    <h6 className="card-title text-white">Number of Members in this tour:{persons.length}</h6>
                    <h6 className="card-subtitle mb-2 text-white fs-bold">Fund Collected:  BDT {total}  </h6>

                </div>

            </div>
            {
                persons.map(person => <Showname name={person.name}
                    img={person.img}
                    contribution={person.contribution}></Showname>)
            }
        </div>
    );
};

export default Calculation;