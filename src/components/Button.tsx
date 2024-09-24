1 // components/Button.tsx
import { component$, PropFunction } from '@builder.io/qwik'

interface ButtonProps {
  text: string
  url: string
}

export const CustomButton = component$((props: ButtonProps) => {
  return (
    <a
      href={props.url}
      style={{
        padding: '10px 20px',
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: '5px',
      }}
    >
      {props.text}
    </a>
  )
})
