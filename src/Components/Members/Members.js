import React, { useEffect, useState } from 'react';
import '../../Data/data'

const Members = () => {
    const [Member, setMember] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setMember(data))
    }, [])
    console.log(Member);
    return (
        <div>
            <div className="Members">
                <div className="members-container">

                </div>
                <div className="calculation-container">

                </div>

            </div>

        </div>
    );
};

export default Members;