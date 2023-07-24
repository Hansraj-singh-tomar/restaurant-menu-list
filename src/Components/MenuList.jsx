import PropTypes from 'prop-types';

const MenuList = ({ menuItems }) => {
    console.log(menuItems);
  return (
    <div className='main-container'>
        {
            menuItems.map((items) => {
                const {id, title, price, img, desc} = items;
                return(
                    <div className="menuListContainer" key={id}>
                        <img src={img} alt="img" className='photo'/>

                        <div className='item-info-container'>
                            <div className='item-info'>
                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </div>
                            <div>
                                <p className='item-text'>{desc}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

MenuList.propTypes = {
    menuItems: PropTypes.array.isRequired,
};

export default MenuList