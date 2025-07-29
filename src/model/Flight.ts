export class Flight {
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

  constructor(
    flightNumber: string,     
    airline: string,       
    departureAirportCode: string,
    arrivalAirportCode: string,
    departureTime: string,      
    arrivalTime: string,      
    durationMinutes: number,
    departureAirportName?: string,
    arrivalAirportName?: string,    
    price?: number,             
    currency?: string,         
    status?: string
  ){
    this.flightNumber = flightNumber
    this.airline = airline
    this.departureAirportCode = departureAirportCode
    this.arrivalAirportCode = arrivalAirportCode
    this.departureTime = departureTime
    this.arrivalTime = arrivalTime
    this.durationMinutes = durationMinutes
    
    if (departureAirportName){this.departureAirportName = departureAirportName}
    if (arrivalAirportName){this.arrivalAirportName = arrivalAirportName}
    if (price){this.price = price}
    if (currency){this.currency = currency}
    if (status){this.status = status}
  }
}

export const flights:Flight[] = [
    new Flight("1","A1","A1","A4","2024-07-01","2024-07-02",1440,"Jhon F Kennedy","Aeropuerto de Ezeiza"),
    new Flight("2","A4","A4","A1","2024-07-20","2024-07-22",1440,"Aeropuerto de Ezeiza","Jhon F Kennedy"),
    new Flight("3","A2","A3","A2","2025-02-2","2024-02-2",75,"Airport of Paris","Airport of Toronto")
]