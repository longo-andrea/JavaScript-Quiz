import { shuffleArray } from "../utils/shuffleArray.js";
import { mapQuestions } from '../utils/mapQuestions.js';



/* @Class
* Represents the Questions' list
* */
export class Questions {

    /**
     * Builds a new questions list
     * @param {Array<Question>} questions the questions list
     * */
    constructor(questions) {
        if (questions)
            this._questions = questions
        else
            this._questions = []
    }

    /**
     * Returns the questions list
     * @return {Array<Question>} the questions list
     * */
    get getQuestions() {
        return this._questions
    }

    /**
     * Returns the question at the given index
     * @param {Number} index the index of the desired question
     * @return {Question} the question
     * */
    getQuestion(index) {
        return this._questions[index]
    }

    /**
     * Add a new question to the list
     * @param {Question} question the new question to add
     * */
    addQuestion(question) {
        this._questions.push(question)
    }

    /**
     * Map the questions list to correct format
     * */
    fetchQuestions() {
        this._questions = mapQuestions(this._questions)
    }

    /**
     * Shuffles the current questions
     * */
    shuffleQuestions() {
        this._questions = shuffleArray([...this._questions.getQuestions])
    }
    /**
        * Marks the answer as incorrect
        *   @param {Number} index the index of the question to be marked as incorrect
        * */

    marAnswerkAsIncorrect(index) {
        this._questions[index].isIncorrect = true
    }

    /**
    * Return incorrect answers
    
    * */
    getIncorrectAnswers() {
        return this._questions.filter(a => a.isIncorrect)
    }
    /**
            * Get a portion of the questions
            *   @param {Number} size the number of questions to retrieve
            * */
    getPortionOfQuestions(size) {
        this._questions = this._questions.slice(0, size)
    }

}
