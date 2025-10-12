// This are the main thing to create storybook component
// 1.  meta
// 2. stories
// 3. type meta and stories

import {type Meta, StoryObj} from "@storybook/nextjs-vite";
import Avatar, { Size } from "@/components/atom/avatar";

const sizeOptions: Size[] = ["sm", "md", "lg", "xl"]

const meta = {
    title: "Design System/Atoms/Button",
    component: Avatar,
    args: {
        size: "md"
    },
    argTypes: {
        size: {
            control: { type: "radio"},
            options: sizeOptions
        }
    }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default = {} satisfies Story;
export const Small = {
    args: {
        size: "sm"
    }
} satisfies Story;
export const Large = {
    args: {
        size: "lg"
    }
} satisfies Story;
export const XLarge = {
    args: {
        size: "xl"
    }
} satisfies Story;