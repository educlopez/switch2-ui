interface ToggleSwitchProps {
  enabled: boolean
  onToggle: () => void
  className?: string
}

export function ToggleSwitch({
  enabled,
  onToggle,
  className = "",
}: ToggleSwitchProps) {
  return (
    <button
      onClick={onToggle}
      className={`h-7 w-14 rounded-full ${
        enabled ? "bg-blue-500" : "bg-gray-300"
      } flex items-center p-1 transition-colors duration-200 ${className}`}
    >
      <div
        className={`h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-200 ${
          enabled ? "translate-x-7" : "translate-x-0"
        }`}
      ></div>
    </button>
  )
}
