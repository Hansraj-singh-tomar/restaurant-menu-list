import PropTypes from 'prop-types';

const Category = ({categories, filterItems, activeCategory}) => {
  return (
    <div className="categoryContainer">
        <ul>
            {
                categories.map((CategItm, index) => {
                    return(
                        <li 
                            key={index} 
                            className={`${
                                activeCategory === CategItm ? "filter-btn active" : "filter-btn"
                            }`}
                            onClick={() => filterItems(CategItm)}   
                        >
                            {CategItm}
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

Category.propTypes = {
    categories: PropTypes.array.isRequired,
    activeCategory: PropTypes.string,
    filterItems: PropTypes.func.isRequired,
};

export default Category