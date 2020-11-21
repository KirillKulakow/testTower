import React, { useState, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './User.sass'

const User = () => {
    const allUsers = useSelector(s => s.allUsers)
    const [user, setUser] = useState(null)

    const setRandomUser = useCallback(() => {
        let numberOfArray = Math.floor(0 + Math.random() * (allUsers.length - 0))
        setUser(allUsers[numberOfArray])
    }, [allUsers])

    useEffect(() => {
        setRandomUser()
        let interval = setInterval(() => setRandomUser(), 8000)
        return (() => clearInterval(interval))
    }, [allUsers, setRandomUser])

    return (
        <div className='user_info'>
            <p>{user === null ? 'User' : `Name: ${user.name} and Surname: ${user.surname}`}</p>
        </div>
    )
}

export default User
