import React from 'react';



import './Person.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFaucet, faHome, faRetweet, faUsers } from '@fortawesome/free-solid-svg-icons';

const Person = props => {
    const { name, profession, hobby, contribution, nationality, img } = props.member;
    return (

        <div className="col">
            <div className="card h-100 p-2">
                <img src={img} className="card-img-top rounded border border-success w-50 mx-auto p-1" alt="..." />
                <div className="card-body">
                    <h4 className="card-title text-white">Name:{name}</h4>
                    <h6 className="text-white">Profession:{profession}</h6>
                    <h6 className="text-white">Hobbies:{hobby}</h6>
                    <h6 className="text-white">Contribution:BDT {contribution}</h6>
                    <h6 className="text-white">Nationality:{nationality}</h6>


                    <button className="btn btn-success fs-bold" onClick={() => props.handleToJoin(props.member)}><FontAwesomeIcon icon={faUsers} /> Join Tour</button>
                    <br />
                    <br />

                    <FontAwesomeIcon style={{ color: "white" }} icon={faHome} /> <FontAwesomeIcon style={{ color: "white" }} icon={faCoffee} />
                </div>
            </div>
        </div >


    );
};

export default Person;