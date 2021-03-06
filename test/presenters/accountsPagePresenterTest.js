import {AccountsPagePresenter} from '../../app/presenters/accountsPagePresenter'

describe('AccountsPagePresenter', () => {
  it('mapStateToProps', () => {
    let state = {
      entities: {
        accounts: {1: {name: 'CMB', balance: 1000}, 2: {name: 'ICBC', balance: 4500}}
      }
    }
    let props = AccountsPagePresenter.mapStateToProps(state)
    props.should.have.property('accounts').that.is.eql([{name: 'CMB', balance: 1000}, {name: 'ICBC', balance: 4500}])
  })
})
