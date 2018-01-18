import moment from 'moment'
import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'

import MuModal from 'components/MuModal'
import PostButton from 'components/PostButton'
import createPostMutation from '~graphql/mutations/createPost.gql'
import todayQuery from '~graphql/queries/today.gql'
import { black, blackBoxShadow, grey } from 'styling/vars'

const Image = styled.div`
  height: 72px;
  width: 72px;
  border-radius: 50%;
  margin-bottom: 24px;
  background-color: ${grey};
  background-image: url('${({src}) => src}');
  background-size: cover;
  box-shadow: ${blackBoxShadow};
`

const Title = styled.h3`
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 24px;
  color: ${black};
  font-weight: 500;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 200px;
  width: 100%;
`

const NewPost = styled.textarea`
  flex: 1;
  width: 100%;
  border: none;
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  line-height: 24px;
  resize: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${grey};
  }
`

class MuPostModal extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = { newPost: '', pending: false }
  }

  handleChange (event) {
    this.setState({ newPost: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()

    const {
      imageUrl,
      mutate,
      taskId,
      title,
    } = this.props

    mutate({
      mutation: createPostMutation,
      variables: {
        content: this.state.newPost,
        taskId: taskId || null,
      },
      optimisticResponse: {
        post: {
          id: Math.round(Math.random() * -1000000),
          createdAt: moment().format(),
          content: this.state.newPost,
          task: {
            subscription: {
              program: {
                title,
                imageUrl,
                __typename: 'Program',
              },
              __typename: 'Subscription',
            },
            __typename: 'SubscriptionTask',
          },
          __typename: 'Post',
        },
      },
      update: (proxy, { data: { post } }) => {
        const data = proxy.readQuery({
          query: todayQuery,
          variables: { completedAt: null },
        });

        // Add the post
        data.posts.splice(0, 0, post);

        proxy.writeQuery({
          query: todayQuery,
          variables: { completedAt: null },
          data
        });
      }
    })

    this.props.onClose()
  }

  render () {
    const { imageUrl, onClose, prompt, title } = this.props

    return <MuModal onClose={onClose}>
      <Image src={imageUrl} />
      {title && <Title>{title}</Title>}
      <Form onSubmit={this.handleSubmit}>
        <NewPost onChange={this.handleChange} placeholder={prompt} />
        <PostButton />
      </Form>
    </MuModal>
  }
}

export default graphql(createPostMutation)(MuPostModal)
