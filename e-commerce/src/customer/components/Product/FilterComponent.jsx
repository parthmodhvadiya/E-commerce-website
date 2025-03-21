import { useSearchParams, useNavigate } from "react-router-dom";

const FilterComponent = ({ filterData }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleFilter = (filterType, filterValue) => {
    console.log("Filter triggered:", filterType, filterValue); // Debugging log

    // Get current parameters
    const currentParams = new URLSearchParams(searchParams);

    // Get existing values for the filter type
    let values = currentParams.get(filterType)?.split(",") || [];

    if (values.includes(filterValue)) {
      // Remove the value if already selected
      values = values.filter((value) => value !== filterValue);
    } else {
      // Add the new selected value
      values.push(filterValue);
    }

    // Update search params
    if (values.length > 0) {
      currentParams.set(filterType, values.join(","));
    } else {
      currentParams.delete(filterType);
    }

    // Update the URL
    navigate(`?${currentParams.toString()}`, { replace: true });
  };

  return (
    <div>
      {filterData.map((section) => (
        <div key={section.id}>
          <h3>{section.name}</h3>
          {section.options.map((option, optionIdx) => (
            <div key={option.value} className="flex gap-3">
              <input
                type="checkbox"
                id={`filter-${section.id}-${optionIdx}`}
                name={`${section.id}[]`}
                value={option.value}
                checked={searchParams
                  .get(section.id)
                  ?.split(",")
                  .includes(option.value) || false}
                onChange={() => handleFilter(section.id, option.value)}
              />
              <label htmlFor={`filter-${section.id}-${optionIdx}`}>
                {option.label}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FilterComponent;
