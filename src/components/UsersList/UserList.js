import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserList = () => {
    const { pages, currentPage, allPages } = useSelector(s => s)
    const dispatch = useDispatch()
    return (
        <div className='user_list_container'>
            <ul>
                {}
            </ul>
        </div>
    )
}

export default UserList
