import React, { useState } from "react";
import Button from "../../Components/Buttons/Button";
import styles from "./CheckinForm.module.css";
//import { todaysDate } from "../../helpers/dateHelper";
import { scrumQuestions } from "../../helpers/stringHelper";
import moment from "moment";
const todaysDate = moment().format("MMMM Do YYYY");

const checkinFormSubmitHandler = (event) => {
	event.preventDefault();
	console.log("submitted");
};

const CheckinForm = () => {
	const [questionNumber, setQuestionNumber] = useState(0);
	const question = scrumQuestions[questionNumber];
	const nextQuestionHandler = () => setQuestionNumber(questionNumber + 1);
	const prevQuestionHandler = () => setQuestionNumber(questionNumber - 1);
	return (
		<div className={styles.container}>
			<h1>Today's Checkin</h1>
			<p>{todaysDate}</p>
			<form className={styles.form} onSubmit={checkinFormSubmitHandler}>
				<div className={styles["form-body"]}>
					<QuestionLabel question={question}></QuestionLabel>
					<input type="text"></input>
				</div>
				<FormControls
					questionNumber={questionNumber}
					totalQuestions={scrumQuestions.length}
					onNextBtnClick={nextQuestionHandler}
					onPrevBtnClick={prevQuestionHandler}></FormControls>
			</form>
		</div>
	);
};

export default CheckinForm;

const QuestionLabel = ({ question }) => {
	return (
		<label>
			<img src={question.icon} alt="icon"></img>
			{question.text}
		</label>
	);
};

const FormControls = ({
	questionNumber,
	totalQuestions,
	onNextBtnClick,
	onPrevBtnClick,
}) => {
	const isFirstQuestion = questionNumber === 0;
	const isLastQuestion = questionNumber + 1 === totalQuestions;

	return (
		<div className={styles["form-controls"]}>
			<Button
				type="button"
				onClick={onPrevBtnClick}
				display={isFirstQuestion ? "none" : "inline-block"}>
				Previous
			</Button>
			<p>
				{questionNumber + 1}/{totalQuestions}
			</p>

			{!isLastQuestion && (
				<Button type="button" color="#00FF38" onClick={onNextBtnClick}>
					Next
				</Button>
			)}
			{isLastQuestion && (
				<Button type="Submit" color="#00FF38">
					Submit
				</Button>
			)}
		</div>
	);
};
