import React, {useEffect, useState} from 'react';
import '../../styles/_navigator.scss';

/**
 * Description
 * @return {any}
 */
function Navigator() {
  const [toggle, setToggle] = useState(false);
  const linksArr = [
    {name: 'My Skills', id: 'myskill_container'},
    {name: 'Projects', id: 'work_container'},
    {name: 'Contact', id: 'contact_container'},
  ];
  const socialLinks = [
    {
      url: 'https://github.com/sandeep-jaiswar',
      imgSrc: 'assets/images/github.svg',
      alt: 'github',
    },
    {
      url: 'https://twitter.com/FPL_TITANS',
      imgSrc: 'assets/images/twitter.svg',
      alt: 'twitter',
    },
  ];
  const scrollHandle = (id) => {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
  };
  const linkHandler = (id) =>{
    setToggle(false);
    scrollHandle(id);
  };
  const resizeCheck = () => {
    Array.from(document.getElementsByClassName('nav__li')).forEach(function(item) {
      item.style.display = window.innerWidth < 768 ? 'none' : 'block';
    });
  };
  useEffect(() => {
    Array.from(document.getElementsByClassName('nav__li')).forEach(function(
        item,
    ) {
      if (!toggle && window.innerWidth < 768) {
        item.style.display = 'none';
      } else {
        item.style.display = 'block';
      }
    });
  }, [toggle]);
  useEffect(() => {
    resizeCheck();
    window.addEventListener('resize', () => {
      resizeCheck();
    });
  }, []);
  return (
    <div
      className="navigator"
      id="navigator"
      style={{height: `${toggle ? '100vh' : 'inherit'}`}}
    >
      <div onClick={() => scrollHandle('home_container')} className="logo">
        <img
          src="assets/images/js.svg"
          alt="logo"
          style={{width: '6rem', height: '6rem'}}
        ></img>
      </div>
      <div onClick={() => setToggle(!toggle)} className="menu">
        {!toggle ? (
          <img
            src="assets/images/menu.svg"
            alt="menu"
            style={{width: '5rem', height: '5rem'}}
          />
        ) : (
          <img
            src="assets/images/close.svg"
            alt="close"
            style={{width: '5rem', height: '5rem'}}
          />
        )}
      </div>
      {linksArr.map((li) => (
        <div onClick={() => linkHandler(li.id)} key={li.id} className="nav__li">
          <span>{li.name}</span>
        </div>
      ))}
      <div
        onClick={() =>
          window.open(
              `https://docs.google.com/document/d/1pUSVlqQtGM-PCkBxDqH_JHH1PiDXsWSq9_Wzw-lHrXA/edit`,
          )
        }
        className="nav__li"
      >
        <span>{`Resume`}</span>
      </div>
      <div className="social__tab">
        {socialLinks.map((li) => (
          <img
            src={li.imgSrc}
            alt={li.alt}
            key={li.alt}
            onClick={() => window.open(li.url)}
          />
        ))}
      </div>
    </div>
  );
}

export default Navigator;
