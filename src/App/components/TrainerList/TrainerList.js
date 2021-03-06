import React from 'react';
import { connect } from 'react-redux';
import "./TrainerList.scss"
import { getTrainers } from '../../../actions';
import InfoButton from '../Common/InfoButton/InfoButton';
import AddEntityButton from '../Common/AddEntityButton/AddEntityButton';
import { TRAINER } from '../Common/Constant';

class TrainerList extends React.Component {


  componentDidMount() {
    this.props.handleGetTrainers();
  }

  render() {
    const { data, isFetching } = this.props.trainers;
    return (
      <div className="trainer-list-container">
        <h1>讲师列表</h1>
        { isFetching ? (
          <p>Loading...</p>
        ) : (
          <section className="trainer-list">
            {data.map((item) => (
                //TODO feedback: 列表元素没有使用ul li
              <InfoButton
                entityId={item.id}
                entityName={item.name}
                key={item.id}
              />
            ))}
            <AddEntityButton buttonType={TRAINER} placeHolderName="添加讲师"/>
          </section>)
        }
      </div>
    );
  }
}

const mapStateToProps = ({ trainers }) => ({
  trainers
});

const mapDispatchToProps = dispatch => ({
  handleGetTrainers() {
    dispatch(getTrainers());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainerList);
