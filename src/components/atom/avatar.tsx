import { Avatar as DefaultAvatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import React, { ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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

type Props = { isOnline?: boolean } & AvatarVariantProps &
  Pick<ComponentProps<typeof AvatarImage>, "alt" | "src">;

const Avatar = ({ size, isOnline, src, alt }: Props) => {
  return (
    <div className='relative inline-block'>
      <DefaultAvatar className={cn(avatarVariants({ size}))}>
          <AvatarImage
            className='aspect-square size-full object-cover'
            src={src}
            alt={alt}
          />
          <AvatarFallback>
            <Image
              className='aspect-square size-full object-cover'
              src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
              alt="avatar placeholder image"
              width={40}
              height={40}
            />
          </AvatarFallback>
      </DefaultAvatar>
      {isOnline && (
        <span className={cn(
          'inline-block bg-green-400 rounded-full',
          'absolute bottom-0 right-0',
          'border border-white',
          size === 'sm' || size === 'md' ? 'size-2' : 'size-3'
        )}/>
      )}
    </div>
  )
}

export default Avatar

// size
// 28 x 28
// 32 x 32
// 36 x 36
// 40 x 40
