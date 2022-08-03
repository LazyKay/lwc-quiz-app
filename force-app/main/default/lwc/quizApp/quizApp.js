import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
	myQuestions = [
		{
			id: "Question1",
			question: "Which one of the following is not a template loop?",
			answers: {
				a: "for:each",
				b: "iterator",
				c: "map loop"
			},
			correctAnswer: "c"
		},
		{
			id: "Question2",
			question: "Which of the file is invald in LWC component folder?",
			answers: {
				a: ".svg",
				b: ".apex",
				c: ".js"
			},
			correctAnswer: "b"
		},
		{
			id: "Question3",
			question: "WHich one of the following is not a directive?",
			answers: {
				a: "for:each",
				b: "if:true",
				c: "@track"
			},
			correctAnswer: "c"
		}

	]

	selected = {}

	score = 0

	isSubmitted = false

	get allNotSelected() {
		return !(Object.keys(this.selected).length === this.myQuestions.length)
	}

	get isScoredFull() {
		return `slds-text-heading_large ${this.myQuestions.length === this.score ?
			'slds-text-color_success' : 'slds-text-color_error'}`
	}

	changeHandler(event) {
		console.log('name', event.target.name)
		console.log('value', event.target.value)
		const { name, value } = event.target
		this.selected = { ...this.selected, [name]: value }
	}

	submitHandler(event) {
		event.preventDefault()
		console.log('submitHandler is called')
		const correctAnswers = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
		this.score = correctAnswers.length
		console.log('score', this.score)
		this.isSubmitted = true
	}

	resetHandler() {
		this.selected = {}
		this.score = 0
		this.isSubmitted = false
	}
}