import cn from 'clsx'
import type { FC, ReactElement, ReactNode } from 'react'
import { APIIcon } from '@components/icons'

const TypeToEmoji = {
  tech: '📑',
  API: <APIIcon />,
  test: '🧪',
}

type CalloutType = keyof typeof TypeToEmoji

const classes: Record<CalloutType, string> = {
  tech: cn(
    'x:border-black-100 x:bg-black-50 x:text-black-800 x:dark:border-black-400/30 x:dark:bg-black-400/20 x:dark:text-black-300'
  ),
  API: cn(
    'x:border-black-100 x:bg-black-50 x:text-black-800 x:dark:border-black-400/30 x:dark:bg-black-400/20 x:dark:text-black-300'
  ),
  test: cn(
    'x:border-black-100 x:bg-black-50 x:text-black-800 x:dark:border-black-400/30 x:dark:bg-black-400/20 x:dark:text-black-300'
  )
}

type CalloutProps = {
  type?: CalloutType
  emoji?: string | ReactElement
  children: ReactNode
}

export const CustomCallout: FC<CalloutProps> = ({
  children,
  type = 'tech',
  emoji = TypeToEmoji[type]
}) => {
  return (
    <div
      className={cn(
        'nextra-callout _overflow-x-auto _mt-6 _flex _rounded-lg _border _py-2 ltr:_pr-4 rtl:_pl-4',
        'contrast-more:_border-current!',
        classes[type]
      )}
    >
      <div
        className="_select-none _text-xl ltr:_pl-3 ltr:_pr-2 rtl:_pr-3 rtl:_pl-2"
        style={{
          fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        }}
        data-pagefind-ignore="all"
      >
        {emoji}
      </div>
      <div className="_w-full _min-w-0 _leading-7">{children}</div>
    </div>
  )
}