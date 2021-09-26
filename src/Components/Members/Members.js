import React, { useEffect, useState } from 'react';
import '../../Data/data'
import Calculation from '../Calculation/Calculation';
import Person from '../Person/Person';
import './Members.css'

const Members = () => {
    const [members, setMembers] = useState([]);
    const [joinedPersons, setJoinedPersons] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    const handleToJoin = person => {

        const joined = [...joinedPersons, person];
        setJoinedPersons(joined);
    }
    return (
        <div>
            <div className="members">

                <div className=" container members-container row row-cols-1 row-cols-md-3 g-4">

                    {
                        members.map(member => <Person
                            key={member.key}
                            member={member}
                            handleToJoin={handleToJoin}></Person>)
                    }

                </div>
                <div className="calculation-container">
                    <Calculation persons={joinedPersons}></Calculation>

                </div>

            </div>

        </div>
    );
};

export default Members;