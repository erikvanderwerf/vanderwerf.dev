import * as React from "react";

interface TabTitleProps {
    text: string;
    isActive: boolean;
}

export const TabTitle: React.FC<TabTitleProps> = (props: TabTitleProps) => {
    let className = 'tab';
    if (props.isActive) {
        className += ' tab-active';
    }
    return (
        <h1 className={className}>{props.text}</h1>
    )
}
