import { useState } from "react";

const initialData = {
  "Fruits": ["Apple", "Banana", "Orange"],
  "Vegetables": ["Carrot", "Tomato", "Potato"],
};

export default function NestedCheckbox() {
  const [checked, setChecked] = useState({});

  const isAllSelected = () =>
    Object.keys(initialData).every((cat) =>
      initialData[cat].every((item) => checked[`${cat}-${item}`])
    );

  const handleSelectAll = (e) => {
    const value = e.target.checked;
    const newState = {};
    Object.keys(initialData).forEach((cat) =>
      initialData[cat].forEach((item) => {
        newState[`${cat}-${item}`] = value;
      })
    );
    setChecked(newState);
  };

  const handleParentChange = (category, e) => {
    const value = e.target.checked;
    const newState = { ...checked };
    initialData[category].forEach((item) => {
      newState[`${category}-${item}`] = value;
    });
    setChecked(newState);
  };

  const handleChildChange = (category, item, e) => {
    setChecked({ ...checked, [`${category}-${item}`]: e.target.checked });
  };

  const isParentChecked = (category) =>
    initialData[category].every((item) => checked[`${category}-${item}`]);

  const isParentIndeterminate = (category) => {
    const items = initialData[category];
    const checkedItems = items.filter((item) => checked[`${category}-${item}`]);
    return checkedItems.length > 0 && checkedItems.length < items.length;
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md max-w-md">
      {/* Select All */}
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isAllSelected()}
          onChange={handleSelectAll}
        />
        <span className="font-semibold">Select All</span>
      </label>

      <div className="mt-4 space-y-4">
        {Object.keys(initialData).map((category) => (
          <div key={category}>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isParentChecked(category)}
                ref={(el) => {
                  if (el) el.indeterminate = isParentIndeterminate(category);
                }}
                onChange={(e) => handleParentChange(category, e)}
              />
              <span className="font-medium">{category}</span>
            </label>
            <div className="ml-6 mt-2 space-y-2">
              {initialData[category].map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={checked[`${category}-${item}`] || false}
                    onChange={(e) => handleChildChange(category, item, e)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
