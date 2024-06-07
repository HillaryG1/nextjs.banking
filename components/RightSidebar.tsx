import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'
//RightSidebar  with destructured props
const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    // Main aside element 
    <aside className='right-sidebar'>
     <section className='flex flex-col pb-8'>
       {/* Profile banner section */}
      <div className='profile-banner'/>
      <div className="profile">
        <div className="profile-img">
          {/* First letter of the user's name */}
          <span className='text-5xl font-bold text-blue-500'>{user.firstName[0]}</span>
        </div>
        <div className="profile-details">
          {/* User's full name */}
          <h1 className='profile-name'>
            {user.firstName} {user.lastName}
          </h1>
           {/* User's email */}
          <p className='profile-email'> 
          {user.email}

          </p>
        </div>

      </div>

     </section>

     <section className='banks'>
      <div className='flex w-full justify-between'>
        <h2 className='header-2'>My Banks</h2>
        {/* Link to add a new bank */}
        <Link href='/' className='flex gap-2'>
          <Image src="/icons/plus.svg"
          width={16}
          height={16}
          alt ="plus"/>
          <h2 className='text-14 font-semibold text-gray-600'>
            Add Bank
          </h2>
        </Link>
      </div>
      {/* Check if any banks need to be displayed */}
      {banks?.length > 0 && (
        <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
          {/* Show the first bank card */}
          <div className='relative z-10'>
            <BankCard
            key={banks[0].$id}
            account={banks[0]}
            userName={`${user.firstName} ${user.lastName}`}
            showBalance={false}
            />
          </div>
            {/* Show second bank card if it exists */}
          {banks [1] && (
            <div className='absolute right-0 top-8 z-0 w-[90%]'>
              <BankCard
              key={banks[1].$id}
              account={banks[1]}
              userName={`${user.firstName} ${user.lastName}`}
              showBalance={false}
              />

            </div>
          )}

        </div>
      )}

     </section>
    </aside>
  )
}

export default RightSidebar
