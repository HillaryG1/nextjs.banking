import AnimatedCounter from './AnimatedCounter'

const TotalBalanceBox = ({
  accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>Total Balance Box
    <div className="total-balance-chart">
      {/* DoughnutChart */}
    </div>

    <div className='flex flex-col gap-6'>
      <h2 className="header-2">
      Bank Accounts: {totalBanks}
      </h2>
      <div className='flex flex-col gap-2'>
        <p className='total-balance-label'>Total Current Balance</p>

        <p className='total-balance-amount flext center gap-2'>
          <AnimatedCounter amount = {totalCurrentBalance}/>
         

        </p>



      </div>
    </div>
    </section>
  )
}

export default TotalBalanceBox
