// Write your code here.
import {Component} from 'react'

class Thumbnail extends Component {
  changeImage = () => {
    const {items, changeImg} = this.props
    changeImg(items.id)
  }

  render() {
    const {items, isActive} = this.props
    const activeClas = isActive ? 'opacity-on' : 'opacity-off'
    console.log(activeClas)
    return (
      <li>
        <button
          type="button"
          className="thamp_container"
          onClick={this.changeImage}
        >
          <img
            src={items.thumbnailUrl}
            className={`thamp_img ${activeClas}`}
            alt={items.thumbnailAltText}
          />
        </button>
      </li>
    )
  }
}

export default Thumbnail
