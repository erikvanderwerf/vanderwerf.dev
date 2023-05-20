import {Meta, StoryObj} from "@storybook/react";

import {TabTitle} from './TabTitle';

const meta: Meta<typeof TabTitle> = {
    title: 'Example/TabTitle',
    component: TabTitle,
    // tags: ['tab'],
}

export default meta;
type Story = StoryObj<typeof TabTitle>;

export const Normal: Story = {
    render: () => <TabTitle text="Example" isActive={false} />
};

export const Active: Story = {
    render: () => <TabTitle text="Example" isActive={true} />
};
