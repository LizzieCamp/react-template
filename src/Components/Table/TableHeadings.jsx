import { capitaliseFirstLetter } from "../../utils/capitaliseFirstLetter";
import PropTypes from "prop-types";

export const TableHeadings = ({ headings }) => {
  return (
    <thead>
      <tr>
        {headings.map((heading) => (
          <th key={heading} className="table-headings">
            {capitaliseFirstLetter(heading)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeadings.propTypes = {
  headings: PropTypes.array.isRequired
};
