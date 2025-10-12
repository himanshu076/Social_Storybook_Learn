import { Avatar as DefaultAvatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const avatarVariants = cva("block  rounded-full overflow-hidden", {
  variants: {
    size: {
      sm: "size-7",
      md: "size-8",
      lg: "size-9",
      xl: "size-10",
    }
  },
  defaultVariants: {
    size: "md"
  }
})

type AvatarVariantProps = VariantProps<typeof avatarVariants>;
export type Size = AvatarVariantProps["size"]

type Props = {} & AvatarVariantProps

const Avatar = ({ size }: Props) => {
  return (
    <DefaultAvatar className={cn(avatarVariants({ size: size}))}>
        <AvatarImage
          className='aspect-square size-full object-cover'
          src="https://github.com/shadcn.png"
        />
        <AvatarFallback>CN</AvatarFallback>
    </DefaultAvatar>
  )
}

export default Avatar