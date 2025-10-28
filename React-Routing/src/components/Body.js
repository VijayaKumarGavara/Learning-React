import {Link} from 'react-router'

const Body = () => {
  return (
    <div className='my-52 bg-white size-full flex flex-col justify-center items-center text-2xl font-bold text-blue-700'>
      <h3 className='my-8'>Welcome to LearnHub.</h3>
      <h5>Here you can learn JS, React etc., Please check out our <Link to='/courses' className='underline'>Courses</Link> </h5>
    </div>
  )
}

export default Body