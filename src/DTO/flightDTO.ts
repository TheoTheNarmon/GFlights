import { Flight } from "../model/Flight";

export interface FlightDTO {
  flightNumber: string
  airline: string
  departureAirportCode: string
  departureAirportName?: string
  arrivalAirportCode: string
  arrivalAirportName?: string
  departureTime: string
  arrivalTime: string
  durationMinutes: number
  price?: number
  currency?: string
  status?: string
}

export function fromFlightDTO(dto:FlightDTO){
    return new Flight(
        dto.flightNumber,
        dto.airline,
        dto.departureAirportCode,
        dto.arrivalAirportCode,
        dto.departureTime,
        dto.arrivalTime,
        dto.durationMinutes,
        dto.departureAirportName ?? undefined,
        dto.arrivalAirportName ?? undefined,
        dto.price ?? undefined,
        dto.currency ?? undefined,
        dto.status ?? undefined
    )
}