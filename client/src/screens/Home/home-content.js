import React from 'react'
import './Home.css'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
function Homecontent() {
  return (
    <div className='giHomeMain'>
      <div>
      <h1 className='localheader'>Account Aggregation</h1>
      <h4>Lets' know what is account aggregation</h4>
      <div className='mainRows'>
      <Card className='cardsHome'>
      <Card.Body><Card.Text> Account Aggregation Software is allowed to access balance information and transaction records of an individual person. </Card.Text></Card.Body>
      </Card>
      <Card className='cardsHome'>
      <Card.Body><Card.Text>  Account aggregation can be a useful financial management and planning tool, providing streamlined account access for account holders </Card.Text></Card.Body>
      </Card>
      <Card className='cardsHome'>
      <Card.Body><Card.Text>  Aggregating accounts can be particularly beneficial for families who have multiple financial goals, such as saving for retirement and college, because the statements give a more complete picture of the family's financial assets. </Card.Text></Card.Body>
      </Card>
      <Card className='cardsHome'>
      <Card.Body><Card.Text>Gathering all of your credit card, brokerage, checking, savings, loan, and other accounts, even if they're held across many financial institutions, together on one page  </Card.Text></Card.Body>
      </Card>
      <Card className='cardsHome'>
      <Card.Body><Card.Text> Knowing how much is in your checking account while at the same time seeing that you have an upcoming credit card bill or loan payment due  </Card.Text></Card.Body>
      </Card>
      </div>
     
     
    </div>
  
    </div>
  )
}

export default Homecontent