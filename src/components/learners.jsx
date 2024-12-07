import Scores from "./scores";

export default function Learners({learners_function}){
    return (
    <>
        <h1> {learners_function.name}</h1>
        <h2> {learners_function.bio} </h2>
        <Scores scores ={learners_function.scores} />

    </>
    )
}
