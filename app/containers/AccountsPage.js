import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Card, CardTitle, CardText, CardActions, RaisedButton, Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableRowColumn} from 'material-ui'
import * as AccountActions from '../actions/account'


@connect(mapStateToProps, mapDispatchToProps)
export default class AccountsPage extends React.Component {
  componentWillMount(){
    this.loadData()
  }
  loadData(){
    this.props.loadAccounts()
  }
  add(){

  }
  render() {
    let {accounts} = this.props
    return (
      <Card>
        <CardTitle title='Accounts'/>
        <CardText>
          <Table height='800px' fixedHeader={true} >
            <TableHeader>
              <TableRow>
                <TableHeaderColumn tooltip="Name">Name</TableHeaderColumn>
                <TableHeaderColumn tooltip="Balance">Balance</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody showRowHover={true} stripedRows={true}>
              {accounts.map((account, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{account.name}</TableRowColumn>
                  <TableRowColumn>{account.balance}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardText>
        <CardActions>
          <RaisedButton
            label='Add'
            primary={true}
            onTouchTap={() => this.add()}/>
        </CardActions>
      </Card>
    )
  }
}

function mapStateToProps(state) {
  return {
    accounts: Object.values(state.entities.accounts)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AccountActions, dispatch)
}