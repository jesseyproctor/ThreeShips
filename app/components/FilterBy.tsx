import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const FilterBy: React.FC = () => {
  return (
    <div className="fixed top-0 right-0 left-0 bg-white p-4 flex items-center justify-end z-10">
      <button className="border border-gray-300 rounded p-2 mr-4 font-semibold text-sm text-gray-500 flex items-center">
        STAR RATING
        <span className="ml-1">
          <FontAwesomeIcon icon={faAngleDown} color="blue" />
        </span>
      </button>
      <button className="border border-gray-300 rounded p-2 mr-4 font-semibold text-sm text-gray-500 flex items-center">
        SERVICES OFFERED
        <span className="ml-1">
          <FontAwesomeIcon icon={faAngleDown} color="blue" />
        </span>
      </button>
      <button className="border border-gray-300 rounded p-2 font-semibold text-sm text-gray-500 flex items-center">
        DISTANCE
        <span className="ml-1">
          <FontAwesomeIcon icon={faAngleDown} color="blue" />
        </span>
      </button>
    </div>
  );
};

export default FilterBy;


