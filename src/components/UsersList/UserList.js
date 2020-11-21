import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../Pagination/Pagination'
import './UserList.sass'

const UserList = () => {
    const { pages, currentPage } = useSelector(s => s)
    return (
        <div>
            <ul>
                {pages[currentPage - 1].map((element, index) => (
                    <li key={index} className='user_item'>
                        <div className='name_container'>
                            <h3>{`Name: ${element.name}`}</h3>
                            <h3>{`Surname: ${element.surname}`}</h3>
                        </div>
                        <p>{`Description: ${element.desc}`}</p>
                    </li>
                ))}
            </ul>
            <Pagination/>
        </div>
    )
}

export default UserList
