import './Card.css'

const Card = (props) => {
  const { picture, name, email } = props
  return (
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img className="is-rounded" src={picture} alt={name.last} />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{`${name.first} ${name.last}`}</p>
          <p className="subtitle is-6">{email}</p>
        </div>
      </div>
    </div>
  )
}

export default Card