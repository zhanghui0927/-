import React from 'react';
// import styles from './styles.less'; // 已启用 CSS Modules
import './styles.less'

const SvgIcon = (props) => {
    const { iconClass, fill, size } = props;
    
    return (
        // className={styles["svg-class"]}
        <i aria-hidden="true" className="anticon">
            <svg className='svgClass' style={{ fontSize: size }}>
                <use xlinkHref={"#icon-" + iconClass} fill="currentColor" />
            </svg>
        </i>
    )
}

// SvgIcon.propTypes = {
//     // svg名字
//     iconClass: PropTypes.string.isRequired,
//     // 填充颜色
//     fill: PropTypes.string
// };
  
// SvgIcon.defaultProps = {
//     fill: "currentColor"
// };

export default SvgIcon;