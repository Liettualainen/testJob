import { Component } from "react";

export default class UserCard extends Component {
    #formatter;
    #followers;
    #tweets;

    constructor() {
        super();
        this.#formatter = new Intl.NumberFormat('en-US');
        this.state = {
            followers: 0,
            tweets: 0
        };
        // this.#followers = parseInt(this.props.followers);
        // if (this.props.following)
        //     ++this.#followers;
        // this.#tweets = parseInt(this.props.tweets);
    }

    componentDidMount() {
        let followers = parseInt(this.props.followers);
        if (this.props.following)
             ++followers;
        this.setState({ followers: followers, tweets: parseInt(this.props.tweets) });
    }
    
    render() {
        return (
            <div className="user-card" data-id="{this.props.id}">
                <img className="img" src={this.props.avatar}
                    alt="User avatar" width="300px"></img>
                <div>
                    {this.#formatter.format(this.state.tweets)} TWEETS
                </div>
                <div>
                    <span className="followers">
                        {this.#formatter.format(this.state.followers)}</span> FOLLOWERS
                </div>
                <button className="{this.props.following ? '' : ''}">
                    {this.props.following ? "Following" : "Follow"}
                </button>
            </div>
        );
    }

}