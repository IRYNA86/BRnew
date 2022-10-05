import AddResultStat from "js/components/AddResultStat";
import GoalReading from "js/components/GoalReading";
import MyTrainingPlayingCheakBox from "js/components/MyTrainingPlayingCheakBox/MyTrainingPlayingCheakBox";
import Timer from "js/components/TimerYear/TimerYear";
import s from '../Statistics/Statistics.module.css'

const Statistics = () => {
  return (
    <>
    <div className={s.statContainer}>
    <Timer/>
    <Timer/>
    </div>
    <GoalReading/>
    <MyTrainingPlayingCheakBox/>
    <AddResultStat/>
    </>
  )
};

export default Statistics;
