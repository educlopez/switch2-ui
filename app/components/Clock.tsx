import { useEffect, useState } from "react"

export function Clock() {
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date()
    return {
      hours: now.getHours() > 12 ? now.getHours() - 12 : now.getHours(),
      minutes: now.getMinutes(),
      ampm: now.getHours() >= 12 ? "PM" : "AM",
    }
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime({
        hours: now.getHours() > 12 ? now.getHours() - 12 : now.getHours(),
        minutes: now.getMinutes(),
        ampm: now.getHours() >= 12 ? "PM" : "AM",
      })
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  const formattedTime = `${currentTime.hours}:${currentTime.minutes
    .toString()
    .padStart(2, "0")}${currentTime.ampm}`

  return <span className="text-foreground font-medium">{formattedTime}</span>
}
