import React from "react";
import Image from "next/image";
import { SkillData } from "@/types/types";
import styles from "../../styles/SkillItem.module.css";

interface SkillItemProps {
  itemData: SkillData;
}

const SkillItem: React.FC<SkillItemProps> = ({ itemData }) => {
  return (
    <div className={styles.skillItemContainer}>
      <div className={styles.imageContainer}>
        <Image
          width={150}
          height={100}
          src={`/images/skill-icons/${itemData.imageName}`}
          alt={itemData.title}
          className={styles.skillImage}
        />
      </div>
      <div className={styles.titleContainer}>
        <p>{itemData.title}</p>
      </div>
    </div>
  );
};

export default SkillItem;
