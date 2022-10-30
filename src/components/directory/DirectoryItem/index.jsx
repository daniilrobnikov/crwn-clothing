import { useNavigate } from 'react-router-dom'

const DirectoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate()

  const handleDirectoryItemClick = () => {
    navigate(`/shop/${title}`)
  }
  return (
    <div className='directory-container' onClick={handleDirectoryItemClick}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='directory-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
      <style jsx>{`
        .directory-container {
          min-width: 30%;
          height: 240px;
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid black;
          margin: 0 7.5px 15px;
          overflow: hidden;
        }
        .directory-container:hover {
          cursor: pointer;
        }
        .directory-container:hover .background-image {
          transform: scale(1.1);
          transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        .directory-container:hover .directory-body-container {
          opacity: 0.9;
        }

        .directory-container.large {
          height: 380px;
        }

        .directory-container:first-child {
          margin-right: 7.5px;
        }

        .directory-container:last-child {
          margin-left: 7.5px;
        }

        .directory-container .background-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }
        .directory-container .directory-body-container {
          height: 90px;
          padding: 0 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid black;
          background-color: white;
          opacity: 0.7;
          position: absolute;
        }
        .directory-container .directory-body-container h2 {
          font-weight: bold;
          margin: 0 6px 0;
          font-size: 22px;
          color: #4a4a4a;
        }
        .directory-container .directory-body-container p {
          font-weight: lighter;
          font-size: 16px;
        }
      `}</style>
    </div>
  )
}

export default DirectoryItem
