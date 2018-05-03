import React, { Component } from 'react'
import { Link, Redirect} from 'react-router-dom';

class ReadFiles extends Component {

    constructor(props) {
		super(props)
		this.state = { data: [] }
    }
    
    loadData() {
		fetch('https://blooming-lowlands-26457.herokuapp.com/api/files')
			.then(response => response.json())
			.then(data => {
				this.setState({data: data })
		})
			.catch(err => console.error(this.props.url, err.toString()))
    }
    
    componentDidMount() {
		this.loadData()
    }
    
    render() {
        return (
        <div>
        <span>Archivos de Audio (en Cloudinary)</span>
        <ul>
            { this.state.data.map((item, i) => {
                        return <li className='item' key={i}>
                            <span>{item._id}</span>
                            <Link to={'/videoplayer/'+encodeURIComponent(item.uri)}>=>Reproducir</Link>
                        </li>
                })
            }
        </ul>
        </div>)
        
    }
}

export default ReadFiles;
