import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import history from '../../history';

import Card from '../../components/Card/Card'

import './ListPage.css';

const ListPage = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.json-generator.com/templates/Xp8zvwDP14dJ/data', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer v3srs6i1veetv3b2dolta9shrmttl72vnfzm220z'
      })
    })
      .then(res => res.json())
      .then(data => setData(data))
      .then(() => setLoading(false))
  }, [])

  if (isLoading) {
    return (
      <progress className="progress is-small is-primary mt-6" max="100">15%</progress>
    )
  }

  const renderCards = () => {
    if (data.length === 0) return
    return data.map(item => {
      const { _id, name, email, picture } = item
      return (
        <div
          className="card is-clickable"
          key={item._id}
          onClick={() => history.push({
            pathname: `/${_id}`,
            state: item,
          })}
        >
          <Card name={name} email={email} picture={picture} />
        </div>
      )
    })
  }

  return (
    <div className="card__container">
      {renderCards()}
    </div>
  )
}

export default withRouter(ListPage);
