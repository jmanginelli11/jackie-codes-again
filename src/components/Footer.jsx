import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

const Footer = () => {
  return (
    <>
      <div>
        <p className='read-the-docs'>Made with the best ingredients:</p>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
};

export default Footer; 