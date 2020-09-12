import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

import dir_sections from '../../data/directory.data.json';


class Directory extends React.Component {
	constructor(){
		super();
		this.state = {
			sections:[]
		}
	}

	componentDidMount(){
    // fetch('http://jm.trimble.com/monsters-rolodex/directory.data.json')
    // .then(res => res.json())
		// .then(items => this.setState({sections:items})) //overwrite monsters
		this.setState({sections:dir_sections.sections});

  }

	render() {
		return (
			<div className='directory-menu'>
					{
						this.state.sections.map(({id, title, imageUrl, size, linkUrl}) => (
							<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} 	/>
						))
					}

			</div>
		)
	}
}

export default Directory;