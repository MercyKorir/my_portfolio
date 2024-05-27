import React from 'react'
import { WorkData } from '@/types/types'
import styles from "../../styles/WorkDetails.module.css"

interface WorkDetailsProps {
    selectedData: WorkData;
}

const WorkDetails: React.FC<WorkDetailsProps> = ({selectedData}) => {
  return (
    <div className={styles.workDetailsContainer}>
      <h2>{selectedData.title}</h2>
      <p>{selectedData.organization}</p>
    </div>
  )
}

export default WorkDetails