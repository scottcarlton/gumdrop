
import './styles.scss';

const Avatar = ({ name }) => {

  const createInitials = () => {

    const names = name.split(' ');
    return `${names[0].substring(0, 1).toUpperCase()}${names[1].substring(0, 1).toUpperCase()}`
  }
  return (
    <div className="avatar">
      { createInitials() }
    </div>
  )
}


export default Avatar;
