import React from 'react'
import styles from "../styles/infoCard.module.css";

const MobileInfoCard = ({heading, description}) => {
  return (
    <div className={`${"p-10 bg-[#1e1d1f] text-white"}`}>
      <ul className={styles.floatAnim}>
        <li className="text-3xl font-bold text-white">{heading}</li>
        <li className="text-2xl font-semibold py-4 text-[#878995]">
          {description}
        </li>
      </ul>
    </div>
  );
}

export default MobileInfoCard