import React from "react";
import Answer from "./Answer"
import AnswerMobile from "./Answer_mobile"


import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import fomatDate from '../../../utils/formatDate'

class DiscussionContainer extends React.Component {






    render() {


        let d

        let data = null

        if (!this.props.firstLoad.answers) {
            d = this.props.answers;
            if (d !== undefined) {
                data = d.map(item => {
                    return {

                        avatar: item.avatar,
                        questionId: item.question_id,
                        userId: item.user_id,
                        userName: item.username,
                        id: item.id,
                        answer: item.content,
                        createTime: fomatDate(new Date(Math.round(item.date) * 1000), 'yyyy-MM-dd'),
                        user_type: item.user_type
                    }
                }
                )
            }
        }
        let answerData = {
            question: this.props.question,
            answers: data || []
        }
        return (
            this.props.isMobile ?
                <AnswerMobile {...this.props} data={answerData} />
                :
                <Answer {...this.props} data={answerData} />
        );
    }
}

const mapState = state => ({

    entry: state.discussion.entry,
    answers: state.discussion.answers,
    firstLoad: state.discussion.firstLoad
});

const mapDispatch = dispatch => ({
    getQuestions: dispatch.discussion.getQuestions,
    getAnswers: dispatch.discussion.getAnswers,

});

export default injectIntl(connect(mapState, mapDispatch)(DiscussionContainer));