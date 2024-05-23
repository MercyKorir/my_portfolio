import React from "react";
import Ellipse from "../../../public/images/Ellipsebg.svg";
import Ellipse2 from "../../../public/images/Ellipsebg2.svg";
import MercyImage from "../../../public/images/Mercy.png";
import MercyLogo from '../../../public/images/Logo.png'
import Image from "next/image";
import styles from '../../styles/Home.module.css'

interface HomeSectionProps {}

const HomeSection: React.FC<HomeSectionProps> = () => {
  return (
    <div className={styles.homeContainer}>
      {/* <div className="flex flex-row justify-between">
          <button>Prev</button>
          <button>Next</button>
        </div> */}
      <div className={styles.homeContent}>
        <div className={styles.leftText}>
          <h1>Hello.</h1>
          <p>
            Web developer by day, internet jester by night. Together, we'll
            craft something truly one-of-a-kind.
          </p>
        </div>
        <div className={styles.centerItems}>
          <span className={styles.ellipseOuterBg}>
            <Image
              width={500}
              height={500}
              src={Ellipse}
              alt="Ellipse Image Background"
              className={styles.outerEllipseImg}
            />
          </span>
          <span className={styles.ellipseInnerBg}>
            <Image
              width={320}
              height={320}
              src={Ellipse2}
              alt="Ellipse Image Background 2"
              className={styles.innerEllipseImg}
            />
          </span>
          <span className={styles.userImgContainer}>
            <Image
              width={300}
              height={300}
              src={MercyLogo}
              alt="Mercy Image"
              className={styles.userImg}
            />
          </span>
        </div>
        <div className={styles.rightItems}>
          <h3>Full Stack Web Development</h3>
          <h3>Front End Development</h3>
          <h3>Back End Development</h3>
          <h3>Web Enhancement</h3>
          <h3>Cross-Platform Development</h3>
          <h3>Freelance Web Development</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
