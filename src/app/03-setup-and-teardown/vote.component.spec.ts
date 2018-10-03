import {VoteComponent} from './vote.component';

describe('VoteComponent', () => {
  const component = new VoteComponent();

  it('should increment totalVotes when upvoted', () => {

    // Arrange
    component.upVote();

    // Act
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {

    component.downVote();

    expect(component.totalVotes).toBe(0);

  });
});
