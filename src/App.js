
import {useState} from 'react';
import  styled from 'styled-components'

const MembersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin: 20px 0;
 
  .member {
    border: solid grey 3px;
    border-radius: 10px;
    width: 40vw;
    background: white;
    h3 {
      font-size: 3rem;
    }
    h4 {
      font-size: 2.5rem;
    }
  }

.member-info {
  margin: 15px 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  span {
    color: grey;
  }
}
`
const AddMemberForm = styled.div`

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
              <div className='member-info'>
                <div className='member-name'>
                  <h3>{member.name}</h3>
                  <hr></hr>
                </div>
                <div className='adt-info'>
                  <h4>Age: <span>{member.age}</span></h4>
                  <h4>Occupation: <span>{member.occupation}</span></h4>
                </div>  
              </div>
            </div>
          )
        })}
      </MembersList>
      <AddMemberForm></AddMemberForm>
    </div>
  );
}

export default App;
