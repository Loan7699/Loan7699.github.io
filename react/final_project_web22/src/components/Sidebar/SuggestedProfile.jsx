import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import users from '../../constant/infoUser';

function SuggestedProfile() {
    const handleFollowUser = () => {

    }

    return (
        <div>
            <div>
                {users.map((user, index) => 
                    <img
                    key={index}
                    className=''
                    src={`/images/avatars/${user.username}.jpeg`}
                    alt='avatar'
                />
                )}
                {/* {console.log(users[0].username)} */}

                {/* <img
                    src={`/images/avatars/${users[0].username}.jpeg`}
                    alt='avatar'
                /> */}

                {/* <Link>
                    <p className="">{users.username}</p>
                </Link> */}

            </div>

            <button
                className=""
                type="button"
                onClick={handleFollowUser}
            >
                Follow
            </button>
        </div>

    )
}

export default SuggestedProfile;