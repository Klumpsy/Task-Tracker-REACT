import React from 'react'; 
import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({title, showAddTaskWindow, showAddButton}) => { 

    return (
        <header className='header'>
            <h1>{title}</h1>
           <Button onClick={showAddTaskWindow} color= {showAddButton ? "red":"green"} text={showAddButton ? "Close":"Add"} />
        </header>
    )
}

Header.defaultProps = { 
    title: 'Task Tracker'
}

Header.propTypes = { 
    title: PropTypes.string.isRequired
}

export default Header

