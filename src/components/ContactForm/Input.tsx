interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string
  label: string
  children?: string
}

/**
 * Input component for forms.
 *
 * @param {Object} props - The props for the Input component.
 * @param {string} [props.type='text'] - The type of the input element.
 * @param {string} props.label - The label for the input element.
 * @param {string} [props.children] - The placeholder text for the input element.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} [props] - Additional input attributes.
 * @returns {JSX.Element} The rendered Input component.
 */

export default function Input({
  type = 'text',
  label,
  children,
  ...props
}: Props): JSX.Element {
  return (
    <div className='form-group'>
      <label htmlFor={label.toLowerCase()} className='form-label'>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          className='form-textarea'
          id={label.toLowerCase()}
          placeholder={children}
        />
      ) : (
        <input
          className='form-input'
          type={type}
          id={label.toLowerCase()}
          placeholder={children}
          {...props}
        />
      )}
    </div>
  )
}
