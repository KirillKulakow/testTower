import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IconContext } from "react-icons";
import { setPage } from '../../redux/actions'
import './Pagination.sass'

const ButtonPage = ({page, isActive}) => {
    const dispatch = useDispatch()
    const setNewPage = () => {
        dispatch(setPage(page))
    }
    return <button className='pagination__btn' disabled={isActive} onClick={setNewPage}>{page}</button>
}

const Pagination = () => {
    const {currentPage, allPages} = useSelector(s => s)
    const dispatch = useDispatch()
    const getPagesArray = (countAll) => {
        let pageElements = []
        for(let i = 1; i < countAll + 1; i++) {
            pageElements.push(i)
        }
        return pageElements
    }
    const setNextPage = () => {
        let page = currentPage + 1
        if(page <= allPages) dispatch(setPage(page))
    }
    const setBackPage = () => {
        let page = currentPage - 1
        if(page >= 1) dispatch(setPage(page))
    }

    return (
        <div className="pagination__container">
            <IconContext.Provider value={{ color: "blue", size: '2rem' }}>
                <IoIosArrowBack onClick={setBackPage} style={{cursor: 'pointer'}}/>
            </IconContext.Provider>
            <div className="pagination">
                {getPagesArray(allPages).map((element, index) => {
                    if(index === currentPage -1) return <ButtonPage key={index} page={element} isActive={true}/>
                    return <ButtonPage key={index} page={element} isActive={false}/>
                })}
            </div>
            <IconContext.Provider value={{ color: "blue", size: '2rem' }}>
                <IoIosArrowForward onClick={setNextPage} style={{cursor: 'pointer'}}/>
            </IconContext.Provider>
        </div>
    )
}

export default Pagination
