import React, { useState } from "react";
import categoriesData from "../categories.json";
import './sidebar.css';

const Sidebar = ({ className, onSelectSloka }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSlokamClick = (path) => {
    onSelectSloka(path);
  };

  return (
    <nav className={`sidebar ${className}`}>
      <ul>
        {Object.keys(categoriesData).map((category) => (
          <li key={category}>
            <div onClick={() => toggleCategory(category)}>
              {expandedCategories[category] ? "-" : "+"}{" "}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
            {expandedCategories[category] && (
              <ul>
                {categoriesData[category].map((subCategory, index) => (
                  <li key={index} onClick={() => handleSlokamClick(subCategory.path)}>
                    {subCategory.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
