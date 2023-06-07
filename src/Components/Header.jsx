import SlideshowIcon from '@mui/icons-material/Slideshow';
import Link from 'next/link';

export default function Header() {
    return (
        <header className='flex justify-between w-100 bg-slate'>
            <div className='flex m-1 text-white-400'>
                <Link href='/'>
                    <h1><img className='w-18 h-12' src='https://cdn.discordapp.com/attachments/1026632294041133111/1112815230611882085/2.png'></img>
                    </h1>
                </Link>
            </div>

            <Link className='m-4' href='/Sobre'>Sobre</Link>
        </header>
    )
}