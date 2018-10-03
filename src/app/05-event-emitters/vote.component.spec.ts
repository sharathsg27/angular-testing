import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should trigger voteChanged with upVoted', () => {
    let votes = null;
    component.voteChanged.subscribe(totalVotes => {
      votes = totalVotes;
    });

    expect(votes).not.toBeLessThan(0);
  });
});
