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

export const Flights:Flight[] = [
    new Flight("1","American Airlines","JFK","SWF","2024-07-01","2024-07-01",35,"Jhon F Kennedy","Stewart International",200),
    new Flight("2","United Airlines","JFK","NCL","2025-04-15","2025-04-16",1440,"Jhon F Kennedy","Newcastle",1500),
    new Flight("3","Copa Airlines","JFK","NCL","2023-03-02","2023-04-03",1430,"Jhon F Kennedy","Newcastle"),
    new Flight("4","United Airlines","JFK","NCL","2021-08-21","2025-04-22",1240,undefined,undefined,1500),
    new Flight("5","United Airlines","JFK","NCL","2015-12-15","2025-04-16",1600),
    new Flight("6","American Airlines","EWR","LGA","2025-05-01","2025-05-01",20,"New York Newark","New York LaGuardia",300),
    new Flight("7","Copa Airlines","EWR","LGA","2010-08-15","2010-08-15",30,"New York Newark","New York LaGuardia",200),
    new Flight("8","American Airlines","EWR","LGA","2015-12-30","2015-12-30",25,"New York Newark","New York LaGuardia",290),
    new Flight("9","United Airlines","EWR","LGA","2014-11-12","2014-11-12",19,"New York Newark","New York LaGuardia",310),
    new Flight("10","Copa Airlines","EWR","LGA","2016-08-05","2016-08-05",24,"New York Newark","New York LaGuardia",320),
    new Flight("11"," Airlines","EWR","LGA","2021-03-25","2021-03-25",15,"New York Newark","New York LaGuardia",300)
]