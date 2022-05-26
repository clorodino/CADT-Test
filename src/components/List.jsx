import React from 'react'
import styles from './List.module.scss'

const List = ({ headers, columns }) => {

        return (
            <>
               <table>
                   <tbody>
                    <tr>
                        <th className={styles.alignLeft}>{headers.col1}</th>
                        <th>{headers.col2}</th>
                        <th>{headers.col3}</th>
                        <th>{headers.col4}</th>
                        <th>{headers.col5}</th>
                    </tr>
                    {columns.map((el, index)=>{
                        return (
                            <tr key={index}>
                                <td className={styles.alignLeft}>{el.col1}</td>
                                <td>{el.col2}</td>
                                <td>{el.col3}</td>
                                <td>{el.col4}</td>
                                {el.col5.length === 2 ? <td className={styles.alignCenter}><div className={styles.userBubble}>{el.col5}</div></td> : <td>{el.col5}</td> }
                            </tr>
                        )
                    })}

                   </tbody>
               </table> 
            </>
        )
}

export default List
