import React from 'react'

class DropdownNavbarItemBackground extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.background = document.querySelector('.dropdown-navbar__follow-bg')
    }

    componentDidUpdate(prevProps) {
        if (this.props.backgroundCoords !== prevProps.backgroundCoords) {
            this.background.style.setProperty('width', `${this.props.backgroundCoords.width}px`)
            this.background.style.setProperty('height', `${this.props.backgroundCoords.height}px`)
            this.background.style.setProperty('transform', `translate(${this.props.backgroundCoords.left}px, ${this.props.backgroundCoords.top}px`)
        }

        if (this.props.backgroundIsOpen !== prevProps.backgroundIsOpen) {
            this.background.classList.toggle('dropdown-navbar__follow-bg--open')
        }
    }

    render() {
        return (
            <div className="dropdown-navbar__follow-bg">
                <span className="arrow"></span>
            </div>
        )

    }
}

export default DropdownNavbarItemBackground