import { Cell } from '../state';

import CodeCell from './code-cell';
import TextEditor from './text-editor';

interface CellListItemProps {
  cell: Cell
};

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let Child: JSX.Element;

  if (cell.type === 'code') {
    Child = <CodeCell cell={cell} />
  }
  else {
    Child = <TextEditor cell={cell} />
  }

  return (
    <div>
      {Child}
    </div>
  )
}

export default CellListItem;