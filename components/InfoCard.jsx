import React from 'react'
import styles from "../styles/infoCard.module.css";

const infoCard = ({heading, description, imgSrc}) => {
  return (
    <div className="p-10 bg-[#1e1d1f]">
      <div className="flex justify-between items-center text-white py-4">
        <img
          className={`${styles.floatAnim} ${"rounded-lg"}`}
          src={imgSrc}
          alt="/"
          width="390"
        />
        <div className="ml-24">
          <ul>
            <li
              className={`${"text-5xl font-bold text-white"}`}
            >
              {heading}
            </li>
            <li
              className={`${
                styles.floatAnim2
              } ${"text-2xl font-semibold py-4 text-[#878995]"}`}
            >
              {description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default infoCard