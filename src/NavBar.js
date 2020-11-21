import React, { useRef } from 'react'

const styles ={
    root:{
        display:'flex',
        justifyContent:'space-between'
    },
    listItem:{
        textDecoration:'none',
        display:'inline'
    }
}
const NavBar = ()=>{
    const listRef = useRef(null)
    return(
        <nav style={styles.root}>
            <ul ref={listRef}>
                <li style={styles.listItem}>benefits</li>
                <li style={styles.listItem}>security</li>
                <li style={styles.listItem}>download</li>
            </ul>
        </nav>
    )
}
export default NavBar