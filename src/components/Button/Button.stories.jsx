import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
	children: "Button"
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
	type: "secondary"
}

export const Tertiary = Template.bind({})
Tertiary.args = {
	type: "tertiary"
}

