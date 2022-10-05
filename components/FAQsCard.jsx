import React from 'react'
import styles from "../styles/FAQs.module.css";

const FAQsCard = ({ question, answer }) => {
  return (
    <div
      className={`${
        styles.loadEffect
      } ${"bg-[#29292a] w-full rounded-md p-8 h-full text-white cursor-default"}`}
    >
      <h1 className="text-3xl font-bold">{question}</h1>
      <p className="text-xl font-semibold text-[#878995] py-1">
        {answer}
      </p>
    </div>
  );
}

export default FAQsCard