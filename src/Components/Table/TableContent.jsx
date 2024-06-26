import { capitaliseFirstLetter } from "../../utils/capitaliseFirstLetter";
import { formatCurrrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import PropTypes from "prop-types";

export const TableContent = ({ headings, tableData }) => {
  const tableValues = (expense, key) => {
    if (key === "date") {
      return formatDate(expense[key]);
    }
    if (key === "amount") {
      return formatCurrrency(expense[key]);
    }
    return capitaliseFirstLetter(expense[key]);
  };
  return (
    <tbody>
      {tableData.map((expense) => (
        <tr key={expense.id}>
          {headings.map((key) => (
            <td key={key} className="table-cell">
              {tableValues(expense, key)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableContent.propTypes = {
  headings: PropTypes.array.isRequired,
  tableData: PropTypes.array.isRequired,
};
