import * as React from 'react';

import './page.css';
import {Name} from "../../components/Name/Name";
import {LinkItem} from "../LinkItem/LinkItem";
import {LinkView} from "../LinkView/LinkView";

export const Page: React.FC = () => {
    return (
        <div className="page-root">
            <Name name="Erik VanderWerf"/>
            <p>
                Occasionally I Do Things
            </p>
            <LinkView>
                <LinkItem
                    href="https://github.com/erikvanderwerf"
                    img="/github-mark/github-mark-white.svg"
                    alt="My GitHub Profile"
                />
                <LinkItem
                    href="https://www.linkedin.com/in/erik-vanderwerf/"
                    img="/linkedin/In-White-128@2x.png"
                    alt="My LinkedIn Profile"
                />
            </LinkView>
        </div>
    );
};
