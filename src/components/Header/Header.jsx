import reactImg from '/src/assets/react-core-concepts.png';

import '/src/components/Header/Header.css';


export default function Header() {
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
  
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }
 