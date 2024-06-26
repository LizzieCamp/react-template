import PropTypes from "prop-types";

export const TableHeadings = ({ headings }) => {
  return (
    <thead>
      <tr>
        {headings.map((heading) => (
          <th key={heading}>
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeadings.propTypes = {
  headings: PropTypes.array.isRequired
};
