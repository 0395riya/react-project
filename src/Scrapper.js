import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import './scrapper.css'

export default class Scrapper extends Component {

    constructor() {
        super();
        this.state = ({
            url: '',
            html: 'HTML SCRAPPED'
        })
    }

    render() {
        const search = (
            <div className='container'>
                <div className='input-group input-group-lg'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text'>URL</span>
                    </div>
                    <input
                        type='text'
                        className='form-control'
                        value={this.state.url}
                        onChange={this.setUrl.bind(this)}
                    />
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary'
                            type='button'
                            id='button-addon2'
                            onClick={this.sendUrl.bind(this)}>
                            Scrap
                        </button>
                    </div>
                </div>

                <div>
                    <textarea className='result' rows='15' cols='120' value={this.state.html} />
                </div>
            </div>
        )

        return (
            <div>
                {search}
            </div>
        )
    }


    setUrl(e) {
        this.setState({
            ...this.state,
            url: e.target.value
        });
    }

    sendUrl() {
        axios.get('http://localhost:3002/scrape', {
            params: { url: this.state.url }
        }).then((res) => {
            this.setState({
                ...this.state,
                html: res.data
            })
        })
    }
}
