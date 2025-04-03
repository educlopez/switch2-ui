interface JoyconIndicatorProps {
  color?: string
  className?: string
}

export function JoyconIndicator({
  color = "bg-gray-400",
  className = "",
}: JoyconIndicatorProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex">
        <div className={`mr-1 h-6 w-2 ${color}`}></div>
        <div className={`h-6 w-6 rounded-sm ${color}`}></div>
      </div>
    </div>
  )
}
