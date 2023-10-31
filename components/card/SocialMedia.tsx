import { RiLinkedinLine, RiInstagramLine, RiTelegramLine } from 'react-icons/ri';
import styles from './SocialMedia.module.css';

interface SocialMediaItem {
    name: string;
    icon: JSX.Element;
    link: string;
}

export default function SocialMedia() {
    const socialArray: SocialMediaItem[] = [
        {
            name: 'linkedin',
            icon: <RiLinkedinLine />,
            link: 'https://www.linkedin.com/in/abolfazl-mahjoob'
        },
        {
            name: 'instagram',
            icon: <RiInstagramLine />,
            link: 'https://instagram.com/abolfazl__mr'
        },
        {
            name: 'telegram',
            icon: <RiTelegramLine />,
            link: 'https://t.me/abolfazllofficial'
        },
    ];

    return (
        <div className='flex gap-8 justify-center my-6 mt-9'>
            {socialArray.map((item) => (
                <a className='group' key={item.name} href={item.link} target="_blank" rel="noopener noreferrer">
                    <div className={`${styles.socialLink} flex flex-col items-center`} >
                        {item.icon}
                    </div>
                    <p className='opacity-0 translate-y-[-20px] group-hover:opacity-100 group-hover:translate-y-0 duration-500'>
                        {item.name}
                    </p>
                </a>
            ))}
        </div>
    );
}
