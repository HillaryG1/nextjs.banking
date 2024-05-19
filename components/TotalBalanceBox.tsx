import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'
// Define the TotalBalanceBox component with destructured props
const TotalBalanceBox = ({
  accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
    <div className="total-balance-chart">
      {/* Render the DoughnutChart component with the 'accounts' prop */}
      <DoughnutChart accounts={accounts}/>
    </div>

    <div className='flex flex-col gap-6'>
        {/* Header with the total number of bank accounts */}
      <h2 className="header-2">
      Bank Accounts: {totalBanks}
      </h2>
      <div className='flex flex-col gap-2'>
         {/* Label for total current balance */}
        <p className='total-balance-label'>
          Total Current Balance
          </p>
            {/* Container for displaying the animated current balance */}
        <div className='total-balance-amount flex center gap-2'>
            {/* Render the AnimatedCounter component with the 'totalCurrentBalance'*/}
          <AnimatedCounter amount = {totalCurrentBalance}/>
         

        </div>



      </div>
    </div>
    </section>
  )
}

export default TotalBalanceBox
