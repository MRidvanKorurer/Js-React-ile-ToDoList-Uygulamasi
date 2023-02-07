function TaskShow({task, onDelete}) {

    const deleteItem = () => {
        onDelete(task.id);
    }

    return ( 
        <div>
            <div className="card text-center">
                <div className="card-header">
                    <h4>{task.title}</h4>
                </div>
                <div className="card-body">
                    <p className="lead">{task.taskDesc}</p>
                </div>
                <div className="card-body">
                    <button onClick={deleteItem} className="btn btn-danger btn">Sil</button>
                </div>
            </div>
        </div>
     );
}

export default TaskShow;