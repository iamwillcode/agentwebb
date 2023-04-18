import clsx from 'clsx'

export default function Container({ className, ...props }: any) {
  return (
    <div
      className={clsx('container mx-auto py-32 p-4', className)}
      {...props}
    />
  )
}
