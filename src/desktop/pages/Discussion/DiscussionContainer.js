import React from "react";
import Discussion from "./Discussion"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import fomatDate from '../../utils/formatDate'

class DiscussionContainer extends React.Component {

    componentDidMount() {
        if (this.props.firstLoad.questions) {
            this.props.getQuestions({ index: 1 });
        }

    }

    componentDidUpdate() {

    }



    componentWillMount() {

        window.addEventListener('scroll', () =>
            console.log(123, document.body.scrollTop || document.documentElement.scrollTop)
        )
    }

    render() {

        const onQuestionFinish = (v) => {
            this.props.createQuestion(v)
            this.props.resetQuestion();
            this.props.getQuestions({ index: 1 });
        }
        const onAnswerFinish = (v) => {
            this.props.createAnswer(v);
            this.props.resetAnswer();
            this.props.getAnswers({ index: 1, question_id: v.question_id });
        }
        const onAnswerClick = (v) => {
            this.props.getAnswers({ index: 1, question_id: v });
        }


        let d
        let data = null
        if (!this.props.firstLoad.questions) {
            d = this.props.questions;
            if (d !== undefined) {
                data = d.map(item => {
                    return {
                        avatar: item.avatar,
                        userId: item.user_id,
                        userName: item.username,
                        id: item.id,
                        question: item.content,
                        createTime: fomatDate(new Date(Math.round(item.date) * 1000), 'yyyy-MM-dd'),
                        replies: item.replies
                    }
                }
                )
            }
        }
        const onQuestionSearch = (e) => {
            this.props.resetQuestion()
            this.props.getQuestions({ index: 1, content: e });
        }

        return (

            <Discussion {...this.props} data={data}
                resetQuestion={this.props.resetQuestion}
                getQuestions={this.props.getQuestions}
                getAnswers={this.props.getAnswers}
                onQuestionSearch={onQuestionSearch}
                onQuestionFinish={onQuestionFinish}
                resetAnswer={this.props.resetAnswer}
                questionsIndex={this.props.questionsIndex}
                answersIndex={this.props.answersIndex}
                answersTotal={this.props.answersTotal}
                questionsTotal={this.props.questionsTotal}
                onAnswerFinish={onAnswerFinish}
                onAnswerClick={onAnswerClick}
                firstLoadReducer={this.props.firstLoadReducer}
            />

        );
    }
}

const mapState = state => ({

    entry: state.discussion.entry,
    questions: state.discussion.questions,
    answers: state.discussion.answers,
    questionsIndex: state.discussion.questionsIndex,
    answersIndex: state.discussion.answersIndex,
    firstLoad: state.discussion.firstLoad,
    questionsTotal: state.discussion.questionsTotal,
    answersTotal: state.discussion.answersTotal
});

const mapDispatch = dispatch => ({
    getQuestions: dispatch.discussion.getQuestions,
    getAnswers: dispatch.discussion.getAnswers,
    createAnswer: dispatch.discussion.createAnswer,
    createQuestion: dispatch.discussion.createQuestion,
    resetAnswer: dispatch.discussion.resetAnswer,
    resetQuestion: dispatch.discussion.resetQuestion,
    firstLoadReducer: dispatch.discussion.firstLoadReducer,
});

export default injectIntl(connect(mapState, mapDispatch)(DiscussionContainer));