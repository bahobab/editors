import { Cell } from '../state';

import CodeCell from './code-cell';
import TextEditor from './text-editor';
import ActionBar from './cell-bar';

import './cell-list-item.css';

interface CellListItemProps {
  cell: Cell
};

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let Child: JSX.Element;

  if (cell.type === 'code') {
    Child = <>
      <div className="action-bar-wrapper">
      <ActionBar id={ cell.id}/>
      </div>
      <CodeCell cell={cell} />
    </>
  }
  else {
    Child = <>
      <div className="action-bar-wrapper">
      <ActionBar id={ cell.id}/>
      </div>
      <TextEditor cell={cell} />
    </>
  }

  return (
    <div className="cell-list-item">
      {Child}
    </div>
  )
}

export default CellListItem;