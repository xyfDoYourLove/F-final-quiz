import React from 'react';
import Trainee from '../../TraineeList/Trainee/Trainee';
import GroupName from './GroupName/GroupName';
import GroupTrainers from './GroupTrainers/GroupTrainers';
import "./GroupFrame.scss"

class GroupFrame extends React.Component {
  render() {
    return (
      <div className="single-group">
        <div className="single-group-header">
          <GroupName groupName={this.props.groupName} />
          <GroupTrainers trainers={this.props.groupTrainers} />
        </div>
        <div className="group-trainees">
          {this.props.gooupTrainees.map((item) => (
            <Trainee
              studentId={item.id}
              studentName={item.name}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

GroupFrame.propTypes = {};

export default GroupFrame;