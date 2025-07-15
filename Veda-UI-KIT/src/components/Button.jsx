
import classNames from "classnames";


/**
 * @param {"primary" | "secondary" | "outline" | "ghost"} variant
 * @param {"sm" | "md" | "lg" } size
 * @param {boolean} disabled
 * @param {import("react").ButtonHTMLAttributes<HTMLButtonElement>} props
 */

const Button = ({variant, size, disabled=false, className, ...props}) => {


  const baseStyles = [
    'inline-flex items-center justify-center font-medium rounded-2xl bg-[#7F3AFF] transition',
    'focus:outline-none focus:ring-2 focus:right-2 focus:ring-offset-white'
  ].join(" ");

  const sizeMap = {
    sm:"text-sm px-3 py-1.5",
    md:"text-base px-4 py-2",
    lg:"text-lg px-5 py-3",
  }

  const variantMap = {
    // solid purple button
    primary:[
        'bg-[#7f3aff]',
        'text-white',
        'hover:bg-[#6a2fe0]',
        'focis:ring-[#7f3aff]/50'
    ].join(" "),
    secondary:[
        'bg-[#ff7f50]',
        'text-white',
        'hover:bg-[#ffaf92]',
        'focis:ring-ring-gray-500/50'
    ].join(" "),
    outline:[
        'border-2 border-[#7f3aff]',
        'text-white',
        'hover:bg-[#7f3aff]/10',
        'focis:ring-ring-[#7f3aff]/50'
    ].join(" "),
    ghost:[
        'bg-transparent',
        'text-[#7f3aff]',
        'hover:bg-[#7f3aff]/10',
        'focis:ring-ring-[#7f3aff]/50'
    ].join(" "),
  }

  const disabledStyles = "opacity-50 cursor-not-allowed hover:bg:none focus:ring-0"

  const classes = classNames(
    baseStyles,
    sizeMap[size],
    variantMap[variant],
    disabled && disabledStyles,
    className
  )


  return (
    <button className={classes} {...props}/>
  )
}

export default Button
