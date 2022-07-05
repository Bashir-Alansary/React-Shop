import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import PagesHead from '../../../PagesHead/pagesHead';
import "./style.css";

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
      return (list = JSON.parse(localStorage.getItem('list')));
    } else {
      return [];
    }
};

function GroceryBud() {
    const[name, setName] = useState('');
    const[list, setList] = useState(getLocalStorage());
    const[isEditing, setIsEditing] = useState(false);
    const[editID, setEditID] = useState(null);
    const[alert, setAlert] = useState({show:false, msg:'', type:''});

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name) {
            showAlert(true, 'name is required', 'danger');
        }
        else if(name && isEditing) {
            setList(list.map(item => {
                if(item.id === editID) {
                    return({...item, title: name})
                }
                return item;
            }))
            setName('');
            setEditID(null);
            setIsEditing(false);
            showAlert(true, "value changed", "success");
        }
        else {
            showAlert(true, 'item added to the list', 'success');
            const newItem = {id: new Date().getTime().toString(), title: name};
            setList([...list, newItem]);
            setName('');
        }
    }

    const clearAll = () => {
        showAlert(true, 'list is empty', 'danger');
        setList([]);
    }

    const showAlert = (show=false, msg='', type='') => {
        setAlert({show, msg, type});
    }

    const removeItem = (id) => {
        showAlert(true, 'item removed from the list', 'danger');
        setList(list.filter(item => item.id !== id));
    }

    const editItem = (id) => {
        const specificItem = list.find(item => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(specificItem.title);
    }

    useEffect(()=> {
        localStorage.setItem('list', JSON.stringify(list));
    })
    return (
        <>
        <PagesHead title="Grocery Bud"/>
        <main className='grocery'>
            <div className='container'>
                <h3 className='grocery-title'>Grocery Bud</h3>
                <form onSubmit={handleSubmit}>
                    {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
                    <input 
                    type="text" 
                    placeholder='e.g. apple' 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                    <button type='submit'>
                        {isEditing ? 'edit' : 'submit'}
                    </button>
                </form>
                {list.length> 0 && (
                    <div className='list-content'>
                        <List items={list} removeItem = {removeItem} editItem={editItem} />
                        <button className='clear' onClick={clearAll}>clear all</button>
                    </div>
                )}
            </div>
        </main>
        </>
    )
}

export default GroceryBud;
