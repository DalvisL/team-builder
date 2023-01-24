
import {useState} from 'react';
import  styled from 'styled-components'

const MembersList = styled.div`
  .member {
    border: solid red 3px;
 }
`
const teamMemberList = [
  {
    'name' : 'Dalvis',
    'age' : '23',
    'occupation' : 'Full-Stack Web Dev'
  },
  {
    'name' : 'George',
    'age' : '32',
    'occupation' : 'Senior Software Engineer'
  },
  {
    'name' : 'Emily',
    'age' : '27',
    'occupation' : 'UI Web Designer'
  },
  {
    'name' : 'Jacques',
    'age' : '40',
    'occupation' : 'Director of Sales'
  }
]

function App() {
  const [teamMembers, setTeamMembers] = useState(teamMemberList);
  console.log(teamMemberList);

  return (
    <div className="App">
      <h1>Members</h1>
      <MembersList>
        {teamMembers.map( (member, index) => {
          
          return(
            <div className='member' key={index}>
              <div className='member-name'>
                <h3>Name: {member.name}</h3>
              </div>
              <div className='member-info'>
                <h4>Age: {member.age}</h4>
                <h4>Occupation: {member.occupation}</h4>
              </div>
            </div>
          )
        })}
      </MembersList>
    </div>
  );
}

export default App;
