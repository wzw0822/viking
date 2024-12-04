import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
    component: Button,
}
export default meta;
type Story = StoryObj<typeof Button>
export const Primary: Story = {
    args: {
        className: 'btn',
        label: '按钮',
        size: "sm",
        btnType: "danger"
    }
}