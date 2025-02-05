import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer'

const customers = [
  {
  'id': 1,
  'image': 'https://picsum.photos/id/1/64/64',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://picsum.photos/id/2/64/64',
  'name': '권준우',
  'birthday': '971222',
  'gender': '남자',
  'job': '프로그래머'
},
{
  'id': 3,
  'image': 'https://picsum.photos/id/3/64/64',
  'name': '이순신',
  'birthday': '901222',
  'gender': '남자',
  'job': '디자이너'
}
]

class App extends Component {
  render() {
    return (
      <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
        </div>
    );
  }
}

export default App;
