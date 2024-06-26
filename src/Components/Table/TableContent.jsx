import PropTypes from "prop-types";

export const TableContent = ({ headings, tableData }) => {
  return (
    <tbody>
      {tableData.map((expense) => (
        <tr key={expense.id}>
          {headings.map((key) => (
            <td key={key}>{expense[key]}</td>
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
