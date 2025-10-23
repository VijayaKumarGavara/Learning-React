import {Link} from 'react-router'

const Body = () => {
  return (
    <div className='body'>
      <h3>Welcome to LearnHub.</h3>
      <h5>Here you can learn JS, React etc., Please check out our <Link to='/courses'>Courses</Link> </h5>
    </div>
  )
}

export default Body