import {useActions} from '../hooks/use-actions'

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell} = useActions();
  return (
    <div>
      <button onClick={() => moveCell(id, 'up')} type="button" className="btn btn-outline-primary">UP</button>
      <button onClick={() => moveCell(id, 'down')} type="button" className="btn btn-outline-primary">Down</button>
      <button onClick={() => deleteCell(id)} type="button" className="btn btn-outline-primary">Delete</button>
    </div>
  )
}

export default ActionBar;