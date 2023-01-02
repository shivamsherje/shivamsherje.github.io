import React from 'react'
// import { useContext } from 'react';
// import { ThemeContext } from '../../contexts/ThemeContext';
import './Gitstats.css';

const Gitstats = () => {
  // const { theme } = useContext(ThemeContext);
  return (
    <div  data-aos="fade-right" style={{ "textAlign": "center", marginTop: "2rem" }}>
      <h2 className="section__title different" style={{color:"#2ECBE9" , fontSize:"40px"}}  >GitHub Stats</h2>

      <div className="gitstat-status" >
        <img src="https://github-readme-stats.vercel.app/api?username=shivamsherje&theme=react&hide_border=true&include_all_commits=true&count_private=true" />
        <img alt="shivam stats"
          src="https://github-readme-streak-stats.herokuapp.com/?user=shivamsherje&hide_border=true&theme=react&hide_border=true&bg_color=0D1117" />
      </div>
    </div>
  )
}

export default Gitstats