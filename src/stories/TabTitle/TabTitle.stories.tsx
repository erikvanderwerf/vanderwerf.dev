import {Meta, StoryObj} from "@storybook/react";

import {TabTitle} from './TabTitle';

const meta: Meta<typeof TabTitle> = {
    title: 'TabTitle',
    component: TabTitle,
    // tags: ['tab'],
}

export default meta;
type Story = StoryObj<typeof TabTitle>;

export const Normal: Story = {
    args: {
        title: 'Normal',
        isActive: false,
    }
};

export const Active: Story = {
    args: {
        title: "Active",
        isActive: true,
    }
};
