import { React, Component } from "react";
import { getUsers, recordsPerPage } from "MockapiAPI";
import UserCard from "./UserCard";

export class App extends Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      page: 1,
      users: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.#loadUsers().then(() => {});
  }

  render() {
    console.log('render');
    return (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }}
        >
          React homework template test-job
        
        {
            this.state.users.map(({ id, tweets, avatar, followers }) => {
              return (
                <UserCard
                  id={id}
                  tweets={tweets}
                  followers={followers}
                  avatar={avatar}
                  following = "{this.#isFollowing(id)}"
                />
              );
            })
          }

          <button>LOAD MORE</button>
        </div>
      );
  }
  
  async #loadUsers() {
    try {
      const users = await (await getUsers(this.state.page)).json();
      this.setState({ page: this.state.page + 1, users: users });
      if (users.length < recordsPerPage) {
        // TODO: disable 'load more' button
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  #isFollowing(id) {
    //TODO
    return false;
  }
  
};


