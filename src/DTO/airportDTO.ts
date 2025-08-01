import {Airport} from '../model/Airport'

export interface AirportSearchResultDTO {
  entityId: number
  skyId: string
  title: string
  suggestionTitle: string
  subtitle: string
  entityType: string
  localizedName: string
  flightPlaceType: string
}


export function fromSearchResultAirport(result:AirportSearchResultDTO){
    return new Airport(result.entityId,result.skyId,result.title,result.localizedName)
}