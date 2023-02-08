import { TableContainer } from '@mui/material';
import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'



const Tag = () => {

    const [tags, setTags] = React.useState([]);
    const [taginput, setTagInput] = React.useState('');

    const onAddTag = (e) => {
        e.preventDefault();
        setTags([...tags, taginput]);
        setTagInput('');
    }
    const removeTag = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    }

    return (
        <div className='py-2 w-full'>
            <form className='flex w-full p-4 gap-x-2' onSubmit={onAddTag}>
                <input value={taginput} onChange={(e) => setTagInput(e.target.value)} type="text" className="px-4 py-2 outline-none w-[400px] border-[1px]" />
                <button type='submit' className='bg-purple-200 px-3 '>Add Tag</button>
            </form>
            <div className="px-4 w-[600px] overflow-x-auto">

                <TableContainer>
                    

                </TableContainer>
            </div>
        </div>
    )
}

export default Tag