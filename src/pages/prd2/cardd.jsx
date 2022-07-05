import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Coursepage.css";
import { FaStar, FaRegCheckCircle } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./ima.jpg";
import styles from "./card1.module.css";
function Card1() {
  return (
    <div className={styles.Container}>
      <div className={styles.cardContainer}>
        <div className={styles.cardLeft}>
          <img className={styles.img} src={logo} />
          <div className={styles.productRating}>
            <span className={styles.rating}>4.7</span>
            <span className={styles.star}>
              <FaStar className={styles.starIcon}></FaStar>
            </span>
            <span className={styles.star}>
              <FaStar  className={styles.starIcon}></FaStar>
            </span>
            <span className={styles.star}>
              <FaStar  className={styles.starIcon}></FaStar>
            </span>
            <span className={styles.star}>
              <FaStar  className={styles.starIcon}></FaStar>
            </span>
            <span className={styles.star}>
              <FaStar className={styles.starIcon}></FaStar>
            </span>
            <span className={styles.starCount}>(218248)</span>
          </div>
          <p className={styles.enrolled}> 1.2k enrolled</p>
        </div>
        <div className={styles.cardRight}>
          <div className={styles.cardRightTitleContainer}>
          <p className={styles.cardRightTitle}>Gate XE Thermodynamics</p>
          </div>
        
          <div className={styles.cardRightTable}>
           
              <div className={styles.TableListLeft}>
              <div className={styles.points}><FaRegCheckCircle className={styles.listIcon}></FaRegCheckCircle><span className={styles.pointsText}>General Aptitude</span></div>
              <div className={styles.points}><FaRegCheckCircle className={styles.listIcon}></FaRegCheckCircle><span className={styles.pointsText}>General Aptitude</span></div>
              <div className={styles.points}><FaRegCheckCircle className={styles.listIcon}></FaRegCheckCircle><span className={styles.pointsText}>General Aptitude</span></div>
              <div className={styles.points}><FaRegCheckCircle className={styles.listIcon}></FaRegCheckCircle><span className={styles.pointsText}>General Aptitude</span></div>
              </div>
              <div className={styles.TableListRight}>
              <div className={styles.points}><FaRegCheckCircle className={styles.listIcon}></FaRegCheckCircle><span className={styles.pointsText}>General Aptitude</span></div>
              <div className={styles.points}><FaRegCheckCircle className={styles.listIcon}></FaRegCheckCircle><span className={styles.pointsText}>General Aptitude</span></div>
              <div className={styles.points}><FaRegCheckCircle className={styles.listIcon}></FaRegCheckCircle><span className={styles.pointsText}>General Aptitude</span></div>
              <div className={styles.points}><FaRegCheckCircle className={styles.listIcon}></FaRegCheckCircle><span className={styles.pointsText}>General Aptitude</span></div>
              </div>
           
          </div>
          <div className={styles.buttonContainer}>
          <button className={styles.button}>View Packages</button>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Card1;
