// This are the main thing to create storybook component
// 1.  meta
// 2. stories
// 3. type meta and stories

import {type Meta, StoryObj} from "@storybook/nextjs-vite";
import Avatar, { Size } from "@/components/atom/avatar";
import { fn } from "storybook/test";
import { useState } from "react";
import { Button } from "../ui/button";

const sizeOptions: Size[] = ["sm", "md", "lg", "xl"]

const meta = {
    title: "Design System/Atoms/Button",
    component: Avatar,
    args: {
        src: "https://github.com/shadcn.png",
        alt: "Avatar Image",
        isOnline: false,
        size: "md",
        onClick: fn()
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
export const OnlineIndicator = {
    args: {
        isOnline: true
    }
} satisfies Story;

export const PlaceholderImage ={
    args: {
        src: 'Invalid Image'
    }
} satisfies Story

export const DynamicPresenceIndicator = {
    argTypes: {
        isOnline: {
            control: {disable: true}
        }
    },
    render: (args) => {
        const [isOnline, setIsOnline] = useState<boolean>(false);

        return (
            <div className="flex flex-col gap-4 items-start">
                <Avatar {...args} isOnline={isOnline} />

                <p>Is Online: {JSON.stringify(isOnline)}</p>
                <Button onClick={() => setIsOnline(prev => !prev)}>
                    {isOnline ? "Disconnect" : "Connect!"}
                </Button>
            </div>
        );
    }
} satisfies Story;
