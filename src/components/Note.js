import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return(
        <div className='note'>
            <span>First note of the day, yay!</span>
            <div className="note-footer">
                <small>15/11/2000</small>
                <MdDeleteForever className='delete-icon' size='1.3em' />
            </div>

        </div>
    );
};

export default Note;