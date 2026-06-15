import PerformanceChart from "./PerformanceChart";

export default function LearnerDetails({ learner }) {
    if (!learner) { return <p>Select a learner.</p>; }

    return (
        <>
            <p>Name: {learner.name}</p>
            <p>Points: {learner.points}</p>
            <p>Courses: {learner.coursesCompleted}</p>
            <p>Assignment %:{learner.assignmentCompletion}</p>
            <p>Streak: {learner.streak}</p>
            <PerformanceChart learner={learner} />
        </>
    );
}