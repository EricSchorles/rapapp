"use client"
import Bell from '@/app/assets/Bell';
import Calendar from '@/app/assets/Calendar';
import Menu from '@/app/assets/Menu';
import Profile from '@/app/assets/Profile';
import { ButtonHTMLAttributes, useState, useRef, useEffect } from 'react';

type TabsProps = { children: any; tabProps?: ButtonHTMLAttributes<HTMLButtonElement> }

interface IAppBarProps {
    tabs?: TabsProps[]
}

const InitialTabs: TabsProps[] = [
    {
        children: <>
            <Profile className='w-7 h-7 text-main ' />
            <p>Perfil</p>
        </>
    },
    {
        children: <>
            <Calendar className='w-7 h-7 text-main' />
            <p>Eventos</p>
        </>
    },
    { children: 'About' },
]

const AppBar = ({ tabs = InitialTabs }: IAppBarProps) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const RefBar = useRef<HTMLButtonElement>(null)

    function handleClickAppBar(event: any) {
        const isClickOutside = RefBar.current && !RefBar.current.contains(event.target)

        if (isClickOutside) {
            menuOpen ? setMenuOpen(true) : setMenuOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickAppBar)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        console.log('asiodfjwerasfjioer');

    }, [RefBar])

    return (
        <>
            <header className='h-[10vh]'>
                <div className="px-6 z-10 black h-[10vh] items-center flex absolute w-full">
                    <button className='pr-6' onClick={() => setMenuOpen(!menuOpen)} ref={RefBar}>
                        <Menu className='w-6 h-6' />
                    </button>
                    <div className='justify-between flex w-full'>
                        <div className='flex'>
                            <p >Olá,&nbsp;</p>
                            <p className='text-main'>Usuário Principal</p>
                        </div>
                        <Bell className='w-6 h-6' />
                    </div>
                </div>
                <div className={`${menuOpen ? 'translate-x-0 overflow-y-hidden transition-transform' : ''}' h-screen z-40 w-4/5 absolute -translate-x-full ease-linear duration-300 bg-black '`}>
                    <div className='h-48 w-48 m-5 border-main rounded-full border-solid border-4 mx-auto'>

                    </div>
                    <div className='flex justify-center m-3'>
                        <p >Olá,&nbsp;</p>
                        <p className='text-main'>Usuário Principal</p>
                    </div>
                    <div className='divide-y divide-solid border-gray-600 divide-gray-600 border-y'>
                        {tabs.map((tab) => (
                            <div className='h-12'>
                                <button className='h-full w-full px-6 py-3 flex gap-3 items-center' {...tab?.tabProps} >
                                    {tab.children}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </header >
        </>
    )
}

export default AppBar