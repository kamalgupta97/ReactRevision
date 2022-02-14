import React from 'react';

export const TodoInput = ({ value, onChange, onSubmit }) => {
    return <div>
        <form onSubmit={onSubmit}>
            <input autoFocus
                value={value}
                onChange={onChange}
                type="text" placeholder='Type Something...' className='taskInput' />
        </form>

    </div>;
};
