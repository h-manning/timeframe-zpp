"use client"

import { useEffect, useState } from "react"
import { Clock, Bus, MapPin } from "lucide-react"

interface Departure {
  tripId: string
  departure: string
  destination: string
  departureTime: Date
  arrivalTime: Date
  delay: number
  status: "ON_TIME" | "DELAYED" | "EARLY"
}

export function TransitDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [departures, setDepartures] = useState<Departure[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Fetch transit data
  useEffect(() => {
    const fetchTransitData = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/transit")

        if (!response.ok) {
          throw new Error("Failed to fetch transit data")
        }

        const data = await response.json()
        setDepartures(data.departures || [])
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    fetchTransitData()
    // Refresh every 30 seconds
    const interval = setInterval(fetchTransitData, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString("en-AU", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
  }

  const getMinutesUntil = (departureTime: Date) => {
    const now = new Date()
    const departure = new Date(departureTime)
    const diff = Math.floor((departure.getTime() - now.getTime()) / 1000 / 60)
    return diff
  }

  return (
    <div className="h-screen w-full bg-background flex flex-col p-6 gap-6">
      {/* Header */}
      <header className="flex items-start justify-between border-b border-border pb-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <Bus className="h-8 w-8" />
            <h1 className="text-4xl font-bold tracking-tight">ROUTE 120</h1>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
            <MapPin className="h-4 w-4" />
            <span>CHATSWOOD STATION</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <time className="text-3xl font-mono tabular-nums">{formatTime(currentTime)}</time>
          </div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider">
            {currentTime.toLocaleDateString("en-AU", {
              weekday: "short",
              day: "numeric",
              month: "short",
            })}
          </div>
        </div>
      </header>

      {/* Departures Table */}
      <div className="flex-1 flex flex-col gap-3 overflow-hidden">
        <div className="grid grid-cols-[120px_1fr_90px_90px_80px_100px] gap-4 px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
          <div>From</div>
          <div>To</div>
          <div className="text-right">Departs</div>
          <div className="text-right">Arrives</div>
          <div className="text-right">In</div>
          <div className="text-right">Status</div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2">
          {loading && (
            <div className="flex items-center justify-center h-full">
              <div className="text-muted-foreground animate-pulse">LOADING DEPARTURES...</div>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center h-full">
              <div className="text-destructive">ERROR: {error.toUpperCase()}</div>
            </div>
          )}

          {!loading && !error && departures.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <div className="text-muted-foreground">NO DEPARTURES SCHEDULED</div>
            </div>
          )}

          {!loading &&
            !error &&
            departures.map((departure, index) => {
              const minutesUntil = getMinutesUntil(departure.departureTime)
              const isImminent = minutesUntil <= 2

              return (
                <div
                  key={`${departure.tripId}-${index}`}
                  className={`grid grid-cols-[120px_1fr_90px_90px_80px_100px] gap-4 px-4 py-4 bg-card border border-border transition-all ${
                    isImminent ? "bg-accent/20 border-accent" : ""
                  }`}
                >
                  <div className="text-base font-medium truncate text-muted-foreground">{departure.departure}</div>
                  <div className="text-lg font-medium truncate">{departure.destination}</div>
                  <div className="text-right text-lg font-mono tabular-nums">
                    {formatTime(departure.departureTime).slice(0, 5)}
                  </div>
                  <div className="text-right text-lg font-mono tabular-nums text-muted-foreground">
                    {formatTime(departure.arrivalTime).slice(0, 5)}
                  </div>
                  <div className={`text-right text-2xl font-bold tabular-nums ${isImminent ? "text-accent" : ""}`}>
                    {minutesUntil <= 0 ? "NOW" : `${minutesUntil}m`}
                  </div>
                  <div className="text-right text-sm uppercase tracking-wider">
                    {departure.status === "ON_TIME" && <span className="text-muted-foreground">On Time</span>}
                    {departure.status === "DELAYED" && <span className="text-destructive">Delayed</span>}
                    {departure.status === "EARLY" && <span className="text-muted-foreground">Early</span>}
                  </div>
                </div>
              )
            })}
        </div>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span>LIVE UPDATES</span>
        </div>
        <div>TRANSPORT NSW • CHATSWOOD</div>
      </footer>
    </div>
  )
}
