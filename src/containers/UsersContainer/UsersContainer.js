import React from 'react'
import './UsersContainer.sass'

const UsersContainer = ({children}) => {
    return (
        <div className='container_users'>
            {children}
        </div>
    )
}

export default UsersContainer
