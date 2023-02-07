import {useState} from 'react';

function CreateTask({onCreate}) {
    const [title, setTitle] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    const addItem = (e) => {
        onCreate(title, taskDesc);
        setTitle(' ');
        setTaskDesc(' ');
        e.preventDefault();
    }

    return ( 
        <div className='createTask'>
            <div className='createHead bg-dark text-white w-100 text-center'>
                <h3>YENI GOREV EKLE</h3>
            </div>
            <form className='form'>
                <input 
                    className='input'
                    placeholder='Baslik...'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <textarea 
                    className='textarea'
                    placeholder='Gorev Aciklamasi...'
                    rows={6}
                    onChange={(e) => setTaskDesc(e.target.value)}
                    value={taskDesc}
                />
                <button onClick={addItem} className='btn btn-primary'>Ekle</button>
            </form>
        </div>
     );
}

export default CreateTask;