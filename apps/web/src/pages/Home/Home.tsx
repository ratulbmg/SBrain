import React from 'react'
import { Button } from '@repo/ui'
import { cn } from '../../utils'

const Home: React.FC =() => {
    return(
        <div className={cn('m-auto w-full min-h-screen h-full flex justify-center items-center bg-home-background dark:bg-home-background-dark')}>
            <div className={cn('w-auto h-auto flex justify-center items-center flex-col gap-8 px-2')}>
                <h1 className={cn('text-center text-text-300 dark:text-text-dark-100 text-[clamp(30px,9vw,72px)] capitalize font-bold')}>Protection that never<br className='hidden sm:block'/> sleeps</h1>
                <p className={cn('text-center text-text-300 dark:text-text-dark-300 text-[clamp(11px,2vw,20px)]')}>Your possessions deserve constant protection. Always secure your things with <br className='hidden sm:block' /> trust, safety, and reliability. Strong security ensures peace of mind, <br className='hidden sm:block'/> keeping what matters most truly safe.</p>
                <Button variant='primary' className='w-40'>Click To Join</Button>
            </div> 
        </div>
    )
}

export default Home
