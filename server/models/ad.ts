// src/app/core/models/ad.ts

export class Ad {
  constructor(
    public adType: string,
    public startDatetime: string,
    public endDatetime: string,
    public transportMode: string,
    public frequencyTravel: string,
    public availableWeight: string,
    public kilogramPrice: string,
    public departurePhone: string,
    public arrivalPhone: string,
    public serviceCharge: string,
    public comment: string,
    public _adId?: string,
  ) {}
}
