import PropTypes from "prop-types";
import { slugify } from "../../utils/helper";

const DataFilter = ({ categories }) => {
  return (
    <div className="data-filter-menu">
      <button className="active is-checked default-btn-sm" data-filter="*">
        All
      </button>
      {categories?.map((cat, idx) => (
        <button
          key={idx}
          data-filter={`.${slugify(cat)}`}
          className="default-btn-sm"
        >
          <span className="filter-text">{cat}</span>
        </button>
      ))}
    </div>
  );
};

DataFilter.propTypes = {
  categories: PropTypes.array,
};

export default DataFilter;
