import { useState } from 'prop-types';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaFilter, FaSortAmountDown } from 'react-icons/fa';
import './ProductFilter.css';

function ProductFilter({ 
  categories = [], 
  onFilterChange, 
  onSearchChange,
  onSortChange 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  const handleCategoryToggle = (category) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(newCategories);
    if (onFilterChange) {
      onFilterChange(newCategories);
    }
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    if (onSortChange) {
      onSortChange(value);
    }
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSortBy('name');
    if (onSearchChange) onSearchChange('');
    if (onFilterChange) onFilterChange([]);
    if (onSortChange) onSortChange('name');
  };

  const hasActiveFilters = searchTerm || selectedCategories.length > 0;

  return (
    <div className="product-filter">
      {/* Search Bar */}
      <div className="filter-search-container">
        <div className="filter-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          {searchTerm && (
            <motion.button
              className="search-clear"
              onClick={() => {
                setSearchTerm('');
                if (onSearchChange) onSearchChange('');
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>
          )}
        </div>

        {/* Mobile Filter Toggle */}
        <motion.button
          className="filter-toggle-btn"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFilter />
          <span>Filters</span>
          {selectedCategories.length > 0 && (
            <span className="filter-badge">{selectedCategories.length}</span>
          )}
        </motion.button>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {(isFilterOpen || window.innerWidth > 768) && (
          <motion.div
            className="filter-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="filter-content">
              {/* Categories */}
              {categories.length > 0 && (
                <div className="filter-section">
                  <h4 className="filter-title">Categories</h4>
                  <div className="filter-options">
                    {categories.map((category) => (
                      <motion.label
                        key={category}
                        className={`filter-checkbox ${
                          selectedCategories.includes(category) ? 'active' : ''
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryToggle(category)}
                        />
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-label">{category}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>
              )}

              {/* Sort By */}
              <div className="filter-section">
                <h4 className="filter-title">
                  <FaSortAmountDown />
                  Sort By
                </h4>
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="filter-select"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <motion.button
                  className="clear-filters-btn"
                  onClick={clearAllFilters}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Clear All Filters
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Filter Badges */}
      {selectedCategories.length > 0 && (
        <div className="active-filters">
          {selectedCategories.map((category) => (
            <motion.span
              key={category}
              className="filter-badge-item"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              {category}
              <button onClick={() => handleCategoryToggle(category)}>
                <FaTimes />
              </button>
            </motion.span>
          ))}
        </div>
      )}
    </div>
  );
}

ProductFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  onFilterChange: PropTypes.func,
  onSearchChange: PropTypes.func,
  onSortChange: PropTypes.func,
};

export default ProductFilter;
