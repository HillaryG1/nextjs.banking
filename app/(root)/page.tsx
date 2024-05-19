import HeaderBox from '@/components/HeaderBox'

const Home = () => {
  const loggedIn = {firstName: 'Hillary'};

  return (
    <section className='home'>
    <div className='home-content'>
      <header className="home-header">
       <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Easily access and manage your account and transactions."
       />
      </header>
    </div>
    </section>
  )
}

export default Home