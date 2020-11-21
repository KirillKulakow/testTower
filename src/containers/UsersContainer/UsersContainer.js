import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './UsersContainer.sass'
import DB from '../../data/users.json'
import { uploadUsers, setLoading } from '../../redux/actions'
import Loader from '../../components/Loader/Loader'

const downloadUsers = new Promise((res, rej) => {
    setTimeout(() => {
        res(DB.users)
    }, 2000)
})

const UsersContainer = ({children}) => {
    const { loading } = useSelector(s => s)
    const dispatch = useDispatch()

    const loadData = useCallback(async () => {
        await downloadUsers
        .then((res) => {
            dispatch(uploadUsers(res))
            dispatch(setLoading(false))
        })
    }, [dispatch]) 

    useEffect(() => {
        loadData()
    }, [dispatch, loadData])

    return (
        <>
            {loading ? <Loader/> : 
            <div className='container_users'>
                {children}
            </div>
            }
        </>
    )
}

export default UsersContainer
