import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, type, ...otherProps}) =>(
	<button className={`custom-button ${type}`} {...otherProps} >
		{children}

	</button>
);


export default CustomButton;