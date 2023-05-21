interface LinkItemProps {
    href: string,
    img: string,
    alt: string,
}

export const LinkItem = (props: LinkItemProps) => {
    return (
        <a href={props.href}>
            <div className="link-item">
                <img src={props.img} alt={props.alt}/>
            </div>
        </a>
    )
}