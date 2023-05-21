import * as React from "react";

interface NameProps {
    name: string
}

export const Name: React.FC<NameProps> = (props: NameProps) => {
    return (
        <h1 className="name">{props.name}</h1>
    )
}
