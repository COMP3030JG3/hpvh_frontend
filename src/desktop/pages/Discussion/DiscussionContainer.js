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




    render() {

        const onQuestionFinish = (v) => {
            this.props.createQuestion(v)
        }
        const onAnswerFinish = (v) => {
            this.props.createAnswer(v)
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
        return (
            <Discussion {...this.props} data={data}
                onQuestionFinish={onQuestionFinish}
                resetAnswer={this.props.resetAnswer}
                onAnswerFinish={onAnswerFinish}
                onAnswerClick={onAnswerClick}
            />
        );
    }
}

const mapState = state => ({

    entry: state.discussion.entry,
    questions: state.discussion.questions,
    answers: state.discussion.answers,
    firstLoad: state.discussion.firstLoad
});

const mapDispatch = dispatch => ({
    getQuestions: dispatch.discussion.getQuestions,
    getAnswers: dispatch.discussion.getAnswers,
    createAnswer: dispatch.discussion.createAnswer,
    createQuestion: dispatch.discussion.createQuestion,
    resetAnswer: dispatch.discussion.resetAnswer,

});

export default injectIntl(connect(mapState, mapDispatch)(DiscussionContainer));