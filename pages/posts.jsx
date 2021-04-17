import React, { Component } from 'react';
import { getPosts } from '../actions';

class Posts extends Component {
	static async getInitialProps() {
		const posts = await getPosts();

		return { posts };
	}

	render() {
		const { posts } = this.props;

		return (
			<div className='container'>
				<h1>
					I AM{' '}
					<strong>
						<em>POSTS</em>
					</strong>{' '}
					PAGE
				</h1>
				<ul>
					{posts.map((post, index) => (
						<li key={index}>
							<span>{post.id}: </span> <span>{post.title}</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Posts;
