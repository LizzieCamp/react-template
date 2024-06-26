import { TableContent } from "./TableContent";
import { TableHeadings } from "./TableHeadings";
import PropTypes from "prop-types";
import './table.css';

export const Table = ({ tableData }) => {
  const orderedHeadings = [
    "date",
    "merchant",
    "amount",
    "category",
    "description",
    "status",
  ];
  return (
    <table className="table">
      <TableHeadings headings={orderedHeadings} />
      <TableContent headings={orderedHeadings} tableData={tableData} />
    </table>
  );
};

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
};