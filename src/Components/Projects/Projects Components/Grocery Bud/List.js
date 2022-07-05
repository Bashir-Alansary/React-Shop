import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({items, removeItem, editItem}) => {
    return(
        <div className='list'>
            {
                items.map(item => {
                    const{id, title} = item;
                    return(
                        <article className='item'>
                            <p className='title'>{title}</p>
                            <div className='btns'>
                                <button className='edit-btn' onClick={()=>editItem(id)} >
                                    <FaEdit />
                                </button>
                                <button className='delete-btn' onClick={() => removeItem(id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default List