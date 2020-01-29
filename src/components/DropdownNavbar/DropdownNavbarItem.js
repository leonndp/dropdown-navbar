import React from 'react'

class DropdownNavbarItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
                <a href="#">{this.props.linkLabel || 'Link'}</a>
                <div className="dropdown-navbar__dropdown">
                    {this.props.children}
                </div>
            </li>
        )
    }
}

export default DropdownNavbarItem