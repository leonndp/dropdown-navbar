import React from 'react'
import DropdownNavbarItem from './DropdownNavbarItem'
import DropdownNavbarItemBackground from './DropdownNavbarItemBackground'

class DropdownNavbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            backgroundCoords: {
                height: 0,
                width: 0,
                top: 0,
                left: 0
            },
            backgroundIsOpen: false
        }
    }

    componentDidMount() {
        this.nav = document.querySelector('.dropdown-navbar')
    }

    handleEnter = (e) => {
        const activeItem = e.currentTarget
        activeItem.classList.add('trigger-enter')
        setTimeout(() => activeItem.classList.add('trigger-enter-active'), 150)
        this.setState({ backgroundIsOpen: true })

        const dropdown = activeItem.querySelector('.dropdown-navbar__dropdown')
        const dropdownCoords = dropdown.getBoundingClientRect();
        const navCoords = this.nav.getBoundingClientRect()

        this.setState({
            backgroundCoords: {
                height: dropdownCoords.height,
                width: dropdownCoords.width,
                top: dropdownCoords.top - navCoords.top,
                left: dropdownCoords.left - navCoords.left
            }
        })


    }

    handleLeave = (e) => {
        const activeItem = e.currentTarget
        activeItem.classList.remove('trigger-enter', 'trigger-enter-active')
        this.setState({ backgroundIsOpen: false })
    }

    render() {
        return (
            <nav className="dropdown-navbar">
                <DropdownNavbarItemBackground
                    backgroundCoords={this.state.backgroundCoords}
                    backgroundIsOpen={this.state.backgroundIsOpen}
                />
                <div className="wrapper flex-container">
                    <h1>Company</h1>
                    <ul className="dropdown-navbar__menu">
                        <DropdownNavbarItem linkLabel='About Me' onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                            <div className="bio">
                                <img src="https://chapters.theiia.org/central-mississippi/About/ChapterOfficers/person-placeholder.jpg" />
                                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                            </div>
                        </DropdownNavbarItem>
                        <DropdownNavbarItem linkLabel='Features' onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                            <ul className="dropdown-navbar__list dropdown-navbar__list--medium">
                                <li>
                                    <a href="#">Projects</a>
                                </li>
                                <li>
                                    <a href="#">Testimonials</a>
                                </li>
                                <li>
                                    <a href="#">Pricing</a>
                                </li>
                            </ul>
                        </ DropdownNavbarItem>

                        <DropdownNavbarItem linkLabel='Social' onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                            <ul className="dropdown-navbar__list">
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Github</a></li>
                            </ul>
                        </DropdownNavbarItem>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default DropdownNavbar