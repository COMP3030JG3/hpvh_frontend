import { request, authRequest, authRequestE } from '../utils/requests'
import { getCookie, setCookie } from '../utils/cookies'
import history from '../routes/history'
import { message } from 'antd'
import Operation from 'antd/lib/transfer/operation'
export default {
    state: {
        questions: [],
        answers: [],
        entry: 'anonymous',
        firstLoad: {
            questions: true,
            answers: true,
            pets: true
        },
        questionsIndex: 1,
        AnswersIndex: 1,
        questionsTotal: 0,
        answersTotal: 0,
    },
    reducers: {

        setDiscussionEntry(state, key) {
            return { ...state, entry: key };
        },
        getAnswerReducer(state, key) {
            return { ...state, answers: [...state.answers, ...key] };
        },
        getQuestionReducer(state, key) {
            return { ...state, questions: [...state.questions, ...key] };
        },
        firstLoadReducer(state, key) {
            return { ...state, firstLoad: { ...state.firstLoad, ...key } };
        },
        resetAnswer(state, key) {
            return { ...state, answers: [] };
        },
        resetQuestion(state, key) {
            return { ...state, questions: [] };
        },
        setQuestionsIndex(state, key) {
            return { ...state, questionsIndex: key };
        },
        setQuestionsTotal(state, key) {
            return { ...state, questionsTotal: key };
        },
        setAnswersTotal(state, key) {
            return { ...state, answersTotal: key };
        },

        setAnswersIndex(state, key) {
            return { ...state, answersIndex: key };
        }
    },
    effects: {
        async createQuestion(data, rootState) {
            await authRequest.post('/question/create', data).then(res => {
                if (res.data.code === 4103) {
                    message.error(res.data.error);
                } else {
                    message.success('success create question');

                }
            })
        },
        async createAnswer(data, rootState) {
            const req = data.user_type === 'customer' ? authRequest : authRequestE
            let { user_type, ...d } = data
            await req.post('/answer/create', d).then(res => {
                if (res.data.code === 404) {
                    message.error(res.data.error);
                } else {
                    message.success('success create question');
                }
            })
        },
        async getQuestions({ index, ...data }, rootState) {
            this.firstLoadReducer({ questions: true })
            request.get('/question/' + index, {
                params: {
                    ...data
                }
            }).then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    this.getQuestionReducer(res.data.data.item);
                    this.setQuestionsIndex(index);
                    this.setQuestionsTotal(res.data.data.total);
                } else {
                    this.getQuestionReducer([]);
                }


                this.firstLoadReducer({ questions: false })
            }).catch(() => {

                message.error('you are not login')
            })
        },
        async getAnswers({ index, ...data }, rootState) {
            this.firstLoadReducer({ answers: true })

            request.get('/answer/' + index, {
                params: {
                    ...data
                }
            }).then(res => {
                if (res.data.code === 200) {
                    this.getAnswerReducer(res.data.data.item);
                    this.setAnswersIndex(index);
                    this.setAnswersTotal(res.data.data.total);
                } else {
                    this.getAnswerReducer([]);
                }
                this.firstLoadReducer({ answers: false })
            })
        },
    }
} 