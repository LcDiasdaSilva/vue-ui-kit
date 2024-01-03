import type { Meta, StoryObj } from '@storybook/vue3';
import '../../assets/scss/ripple.scss'
import SimpleButton from './SimpleButton.vue';


const meta = {
  title: 'SimpleButton',
  component: SimpleButton,

  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    borderColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },

} satisfies Meta<typeof SimpleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    maxWidth: '300px'
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    maxWidth: '300px'
  },
};

export const Rounded: Story = {
  args: {
    size: 'medium',
    label: 'Button',
    maxWidth: '300px',
    rounded: true
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    maxWidth: '300px'
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    maxWidth: '300px'
  },
}






